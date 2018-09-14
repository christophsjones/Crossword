#!/usr/bin/env python

import re
import sys
import io

def esc_quotes(clue):
    return clue.replace('"', '\\"')

def remove_nonalpha(ans):
    return re.sub(r'[^a-zA-Z]', '', ans)

puzzle_name = sys.argv[1]

grid = []
across_clues = {}
down_clues = {}
across_answers = {}
down_answers = {}

with io.open(puzzle_name, mode='r', encoding="utf-8-sig") as puzzle:
    # Parse the grid
    line = puzzle.readline().strip()
    while line != "":
        grid.append(list(line))
        line = puzzle.readline().strip()

    # Parse the Across clues
    line = puzzle.readline().strip()
    assert(line == "Across")
    line = puzzle.readline().strip()
    while line != "":
        clue_number_break = line.find(" ")
        number = int(line[:clue_number_break - 1])
        clue = line[clue_number_break + 1:]
        across_clues[number] = esc_quotes(clue)
        line = puzzle.readline().strip()

    # Parse the Down clues
    line = puzzle.readline().strip()
    assert(line == "Down")
    line = puzzle.readline().strip()
    while line != "":
        clue_number_break = line.find(" ")
        number = int(line[:clue_number_break - 1])
        clue = line[clue_number_break + 1:]
        down_clues[number] = esc_quotes(clue)
        line = puzzle.readline().strip()

    puzzle.readline().strip()
    # Parse the Across answers
    line = puzzle.readline().strip()
    answers = line.split(" ")
    assert(answers[0] == "Across:")
    i = 1
    while i < len(answers):
        number = int(answers[i][:-1])
        answer = answers[i+1][:-1]
        across_answers[number] = remove_nonalpha(answer)
        i += 2
    puzzle.readline()

    # Parse the Down answers
    line = puzzle.readline().strip()
    answers = line.split(" ")
    assert(answers[0] == "Down:")
    i = 1
    while i < len(answers):
        number = int(answers[i][:-1])
        answer = answers[i+1][:-1]
        down_answers[number] = remove_nonalpha(answer)
        i += 2

# Get the grid locations of each number
number_locs = {}
current_num = 1
i = 1
j = 1
for i in range(1, len(grid) + 1):
    for j in range(1, len(grid[i-1]) + 1):
        if (
            grid[i-1][j-1] != "." and 
            ((
                (i == 1 or grid[i-2][j-1] == ".") and
                i < len(grid) and 
                grid[i][j-1] != "."
            ) or
            (
                (j == 1 or grid[i-1][j-2] == ".") and
                j < len(grid[i-1]) and
                grid[i-1][j] != "."))):
            number_locs[current_num] = (i, j)
            current_num += 1

# Create the output file
with io.open(
        "script-" + puzzle_name[:puzzle_name.find('.')] + ".js",
        mode="w",
        encoding="utf-8"
        ) as outfile:
    outfile.write(
u"""
(function($) {
    $(function() {
        var puzzleData = [
""")

    for number, clue in across_clues.items():
        outfile.write(
u"""
            {{
                clue: "{clue}",
                answer: "{answer}",
                position: {nbr},
                orientation: "across",
                startx: {loc_j},
                starty: {loc_i}
            }},
""".format(
    nbr=number,
    loc_i=number_locs[number][0],
    loc_j=number_locs[number][1],
    clue=clue,
    answer=across_answers[number]))

    for number, clue in down_clues.items():
        outfile.write(
u"""
            {{
                clue: "{clue}",
                answer: "{answer}",
                position: {number},
                orientation: "down",
                startx: {loc_j},
                starty: {loc_i}
            }},
""".format(
    number=number,
    loc_i=number_locs[number][0],
    loc_j=number_locs[number][1],
    clue=clue,
    answer=down_answers[number]))

    outfile.write(
u"""
        ]

    $('#puzzle-wrapper').crossword(puzzleData);

    })
})(jQuery)
""")


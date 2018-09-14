A Javascript crossword puzzle interface.

To modify the puzzle, create a file with the same format as js/script.js then change the line
```
<script scr="js/script.js"></script>
```
to point to your file.

To import a puzzle from Crossword Compiler 10, run "Export puzzle" and choose the Plain text option. Export Solution, Clues, Fill-in words, and Answers, with Unicode character set and upper case answers. Then run the script cc2js on the text file,
```
cc2js my-puzzle.txt
```


Issues:
1. Typing too fast doesn't insert characters correctly
2. Answer checking should be turned off... perhaps only verification of entire puzzle
3. Every keypress advances the cursor, only A-Z should
4. Rebuses?
5. change to capital letters by default (and make answers case-insensitive)
6. answers can be found in JS source

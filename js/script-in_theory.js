
(function($) {
    $(function() {
        var puzzleData = [

            {
                clue: "Guitar “attachmént”",
                answer: "STRAP",
                position: 1,
                orientation: "across",
                startx: 1,
                starty: 1
            },

            {
                clue: "Cyrillic letter",
                answer: "LHA",
                position: 6,
                orientation: "across",
                startx: 8,
                starty: 1
            },

            {
                clue: "First man",
                answer: "ADAM",
                position: 9,
                orientation: "across",
                startx: 12,
                starty: 1
            },

            {
                clue: "Snap",
                answer: "PHOTO",
                position: 13,
                orientation: "across",
                startx: 1,
                starty: 2
            },

            {
                clue: "\"Smile!\"",
                answer: "SAYCHEESE",
                position: 14,
                orientation: "across",
                startx: 7,
                starty: 2
            },

            {
                clue: "Gyro cheeses",
                answer: "FETAS",
                position: 16,
                orientation: "across",
                startx: 1,
                starty: 3
            },

            {
                clue: "Emotional highs",
                answer: "EUPHORIAS",
                position: 17,
                orientation: "across",
                startx: 7,
                starty: 3
            },

            {
                clue: "A good question to ask yourself",
                answer: "BUTHOWDOESIT",
                position: 18,
                orientation: "across",
                startx: 2,
                starty: 4
            },

            {
                clue: "Animal house",
                answer: "DEN",
                position: 20,
                orientation: "across",
                startx: 1,
                starty: 5
            },

            {
                clue: "\"Just ___!\"",
                answer: "ASEC",
                position: 21,
                orientation: "across",
                startx: 6,
                starty: 5
            },

            {
                clue: "Largest non-ocean biome",
                answer: "TAIGA",
                position: 22,
                orientation: "across",
                startx: 11,
                starty: 5
            },

            {
                clue: "Ponzi schemer Bernie",
                answer: "MADOFF",
                position: 25,
                orientation: "across",
                startx: 1,
                starty: 6
            },

            {
                clue: "Valuable props. in Monopoly",
                answer: "RRS",
                position: 28,
                orientation: "across",
                startx: 8,
                starty: 6
            },

            {
                clue: "Marxist Trotsky",
                answer: "LEON",
                position: 30,
                orientation: "across",
                startx: 12,
                starty: 6
            },

            {
                clue: "55th St. restaurant",
                answer: "SNAIL",
                position: 31,
                orientation: "across",
                startx: 1,
                starty: 7
            },

            {
                clue: "Particle with a charm quark and antiquark",
                answer: "PSION",
                position: 32,
                orientation: "across",
                startx: 7,
                starty: 7
            },

            {
                clue: "Drunkard",
                answer: "SOT",
                position: 34,
                orientation: "across",
                startx: 13,
                starty: 7
            },

            {
                clue: "Sagan of UChicago",
                answer: "CARL",
                position: 35,
                orientation: "across",
                startx: 4,
                starty: 8
            },

            {
                clue: "Stepped (on)",
                answer: "TROD",
                position: 37,
                orientation: "across",
                startx: 9,
                starty: 8
            },

            {
                clue: "Ideology: suffix",
                answer: "ISM",
                position: 39,
                orientation: "across",
                startx: 1,
                starty: 9
            },

            {
                clue: "Make fun of",
                answer: "TEASE",
                position: 42,
                orientation: "across",
                startx: 5,
                starty: 9
            },

            {
                clue: "Rebuke",
                answer: "SCOLD",
                position: 44,
                orientation: "across",
                startx: 11,
                starty: 9
            },

            {
                clue: "Trendy",
                answer: "CHIC",
                position: 48,
                orientation: "across",
                startx: 1,
                starty: 10
            },

            {
                clue: "Swindle, politically incorrectly",
                answer: "GYP",
                position: 50,
                orientation: "across",
                startx: 6,
                starty: 10
            },

            {
                clue: "Plath who wrote \"Daddy\"",
                answer: "SYLVIA",
                position: 51,
                orientation: "across",
                startx: 10,
                starty: 10
            },

            {
                clue: "Many-headed serpent",
                answer: "HYDRA",
                position: 52,
                orientation: "across",
                startx: 1,
                starty: 11
            },

            {
                clue: "Number one",
                answer: "BEST",
                position: 54,
                orientation: "across",
                startx: 7,
                starty: 11
            },

            {
                clue: "Shady tree",
                answer: "ELM",
                position: 56,
                orientation: "across",
                startx: 13,
                starty: 11
            },

            {
                clue: "Second part of the question",
                answer: "WORKINTHEORY",
                position: 57,
                orientation: "across",
                startx: 3,
                starty: 12
            },

            {
                clue: "At the core",
                answer: "INESSENCE",
                position: 61,
                orientation: "across",
                startx: 1,
                starty: 13
            },

            {
                clue: "Love, as God of man and man of God",
                answer: "AGAPE",
                position: 63,
                orientation: "across",
                startx: 11,
                starty: 13
            },

            {
                clue: "One who rides shotgun",
                answer: "PASSENGER",
                position: 65,
                orientation: "across",
                startx: 1,
                starty: 14
            },

            {
                clue: "Kingly",
                answer: "REGAL",
                position: 66,
                orientation: "across",
                startx: 11,
                starty: 14
            },

            {
                clue: "Starting bet in poker",
                answer: "ANTE",
                position: 67,
                orientation: "across",
                startx: 1,
                starty: 15
            },

            {
                clue: "Anonymous Internet browser for the dark web",
                answer: "TOR",
                position: 68,
                orientation: "across",
                startx: 6,
                starty: 15
            },

            {
                clue: "Tournament ranks",
                answer: "SEEDS",
                position: 69,
                orientation: "across",
                startx: 11,
                starty: 15
            },

            {
                clue: "Coppertone num.",
                answer: "SPF",
                position: 1,
                orientation: "down",
                startx: 1,
                starty: 1
            },

            {
                clue: "\"Cloud Gate\", colloquially",
                answer: "THEBEAN",
                position: 2,
                orientation: "down",
                startx: 2,
                starty: 1
            },

            {
                clue: "Jefferson Memorial feature",
                answer: "ROTUNDA",
                position: 3,
                orientation: "down",
                startx: 3,
                starty: 1
            },

            {
                clue: "\"Star Wars\" walker",
                answer: "ATAT",
                position: 4,
                orientation: "down",
                startx: 4,
                starty: 1
            },

            {
                clue: "Swanky",
                answer: "POSH",
                position: 5,
                orientation: "down",
                startx: 5,
                starty: 1
            },

            {
                clue: "Ones giving a hand",
                answer: "LAUDERS",
                position: 6,
                orientation: "down",
                startx: 8,
                starty: 1
            },

            {
                clue: "\"Do as I say, not as I do\" speaker",
                answer: "HYPOCRITE",
                position: 7,
                orientation: "down",
                startx: 9,
                starty: 1
            },

            {
                clue: "Heartthrob?",
                answer: "ACHE",
                position: 8,
                orientation: "down",
                startx: 10,
                starty: 1
            },

            {
                clue: "Kind of view",
                answer: "AERIAL",
                position: 9,
                orientation: "down",
                startx: 12,
                starty: 1
            },

            {
                clue: "Goddesses",
                answer: "DEITIES",
                position: 10,
                orientation: "down",
                startx: 13,
                starty: 1
            },

            {
                clue: "\"Baked ___ cake\"",
                answer: "ASA",
                position: 11,
                orientation: "down",
                startx: 14,
                starty: 1
            },

            {
                clue: "30 days in Spain?",
                answer: "MES",
                position: 12,
                orientation: "down",
                startx: 15,
                starty: 1
            },

            {
                clue: "Uses a needle",
                answer: "SEWS",
                position: 14,
                orientation: "down",
                startx: 7,
                starty: 2
            },

            {
                clue: "Party thrower",
                answer: "HOST",
                position: 15,
                orientation: "down",
                startx: 11,
                starty: 2
            },

            {
                clue: "Buffoon",
                answer: "OAF",
                position: 19,
                orientation: "down",
                startx: 6,
                starty: 4
            },

            {
                clue: "Runs a Dungeons and Dragons game",
                answer: "DMS",
                position: 20,
                orientation: "down",
                startx: 1,
                starty: 5
            },

            {
                clue: "Gunk",
                answer: "GOO",
                position: 23,
                orientation: "down",
                startx: 14,
                starty: 5
            },

            {
                clue: "Farm animal?",
                answer: "ANT",
                position: 24,
                orientation: "down",
                startx: 15,
                starty: 5
            },

            {
                clue: "\"Huh. Got it\", online",
                answer: "OIC",
                position: 26,
                orientation: "down",
                startx: 4,
                starty: 6
            },

            {
                clue: "Like 41D",
                answer: "FLAT",
                position: 27,
                orientation: "down",
                startx: 5,
                starty: 6
            },

            {
                clue: "Frat. counterpart",
                answer: "SOR",
                position: 29,
                orientation: "down",
                startx: 10,
                starty: 6
            },

            {
                clue: "Thing to do at the old folks' home",
                answer: "PLAYBINGO",
                position: 32,
                orientation: "down",
                startx: 7,
                starty: 7
            },

            {
                clue: "Intrusive",
                answer: "NOSY",
                position: 33,
                orientation: "down",
                startx: 11,
                starty: 7
            },

            {
                clue: "Brutal structure?",
                answer: "REG",
                position: 36,
                orientation: "down",
                startx: 6,
                starty: 8
            },

            {
                clue: "MCCC halved",
                answer: "DCL",
                position: 38,
                orientation: "down",
                startx: 12,
                starty: 8
            },

            {
                clue: "\"___ bin ein Berliner\"",
                answer: "ICH",
                position: 39,
                orientation: "down",
                startx: 1,
                starty: 9
            },

            {
                clue: "Like a wallflower",
                answer: "SHY",
                position: 40,
                orientation: "down",
                startx: 2,
                starty: 9
            },

            {
                clue: "Chicago's place",
                answer: "MIDWEST",
                position: 41,
                orientation: "down",
                startx: 3,
                starty: 9
            },

            {
                clue: "Richard of UChicago who got punched in the face",
                answer: "SPENCER",
                position: 43,
                orientation: "down",
                startx: 8,
                starty: 9
            },

            {
                clue: "Permitted to imbibe",
                answer: "OVERAGE",
                position: 45,
                orientation: "down",
                startx: 13,
                starty: 9
            },

            {
                clue: "Frog's spot",
                answer: "LILYPAD",
                position: 46,
                orientation: "down",
                startx: 14,
                starty: 9
            },

            {
                clue: "Big blocker",
                answer: "DAM",
                position: 47,
                orientation: "down",
                startx: 15,
                starty: 9
            },

            {
                clue: "Stick in a stick game",
                answer: "CROSSE",
                position: 49,
                orientation: "down",
                startx: 4,
                starty: 10
            },

            {
                clue: "Ref. book abbr. for generic objects",
                answer: "STH",
                position: 51,
                orientation: "down",
                startx: 10,
                starty: 10
            },

            {
                clue: "What a Brit sits on",
                answer: "ARSE",
                position: 53,
                orientation: "down",
                startx: 5,
                starty: 11
            },

            {
                clue: "Trick suffix",
                answer: "STER",
                position: 55,
                orientation: "down",
                startx: 9,
                starty: 11
            },

            {
                clue: "___ Chemical Laboratory",
                answer: "KENT",
                position: 58,
                orientation: "down",
                startx: 6,
                starty: 12
            },

            {
                clue: "Corn units",
                answer: "EARS",
                position: 59,
                orientation: "down",
                startx: 11,
                starty: 12
            },

            {
                clue: "S-shaped curve",
                answer: "OGEE",
                position: 60,
                orientation: "down",
                startx: 12,
                starty: 12
            },

            {
                clue: "Popular hoppy beer",
                answer: "IPA",
                position: 61,
                orientation: "down",
                startx: 1,
                starty: 13
            },

            {
                clue: "Divide-by-0 result, to a computer",
                answer: "NAN",
                position: 62,
                orientation: "down",
                startx: 2,
                starty: 13
            },

            {
                clue: "Golfer Ernie",
                answer: "ELS",
                position: 64,
                orientation: "down",
                startx: 15,
                starty: 13
            },

        ]

    $('#puzzle-wrapper').crossword(puzzleData);

    })
})(jQuery)

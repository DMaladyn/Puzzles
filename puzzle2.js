let copiedPuzzle = null;
let exID;
document.getElementById('nextButton').style.visibility = 'hidden'

function takePuzzle(id, puzzle)
{
copiedPuzzle = puzzle
exID = id
console.log("down")
}

function putPuzzle(id)
{
    if(document.getElementById(id).src.includes('empty'))
    {
        document.getElementById(exID).src = 'words/empty.png'
        document.getElementById(id).src = copiedPuzzle
        console.log("up")
        copiedPuzzle = null
    }
    else
    {
        document.getElementById(exID).src = document.getElementById(id).src
        document.getElementById(id).src = copiedPuzzle
        console.log("up")
        copiedPuzzle = null
    }

    check()
}

function clear()
{
    copiedPuzzle = null;
    console.log('clear')
}

var right = new Audio('right.mp3')
var wrong = new Audio('wrong.mp3')
right.volume = 0.1
wrong.volume = 0.1

function check()
{
    if(document.getElementById('slot1').src.includes('empty') == false && document.getElementById('slot2').src.includes('empty') == false && document.getElementById('slot3').src.includes('empty') == false && document.getElementById('slot4').src.includes('empty') == false && document.getElementById('slot5').src.includes('empty') == false && document.getElementById('slot6').src.includes('empty') == false && document.getElementById('slot7').src.includes('empty') == false)
    {
        console.log('full')

        if(document.getElementById('slot1').src.includes('words2/maybe') && document.getElementById('slot2').src.includes('words2/you') && document.getElementById('slot3').src.includes('words2/could') && document.getElementById('slot4').src.includes('words2/help') && document.getElementById('slot5').src.includes('words2/me') && document.getElementById('slot6').src.includes('words2/with') && document.getElementById('slot7').src.includes('words2/this'))
        {
            console.log('right')
            document.getElementById('slot1').classList = 'puzzleSpaceCorrect'
            document.getElementById('slot2').classList = 'puzzleSpaceCorrect'
            document.getElementById('slot3').classList = 'puzzleSpaceCorrect'
            document.getElementById('slot4').classList = 'puzzleSpaceCorrect'
            document.getElementById('slot5').classList = 'puzzleSpaceCorrect'
            document.getElementById('slot6').classList = 'puzzleSpaceCorrect'
            document.getElementById('slot7').classList = 'puzzleSpaceCorrect'
            right.play()
            document.getElementById('holder1').style.display = 'none'
            document.getElementById('holder2').style.display = 'none'
            document.getElementById('holder3').style.display = 'none'
            document.getElementById('holder4').style.display = 'none'
            document.getElementById('holder5').style.display = 'none'
            document.getElementById('holder6').style.display = 'none'
            document.getElementById('holder7').style.display = 'none'
            document.getElementById('nextButton').style.visibility = 'visible'
        }
        else
        {
            console.log('wrong')
            document.getElementById('slot1').classList = 'puzzleSpaceWrong'
            document.getElementById('slot2').classList = 'puzzleSpaceWrong'
            document.getElementById('slot3').classList = 'puzzleSpaceWrong'
            document.getElementById('slot4').classList = 'puzzleSpaceWrong'
            document.getElementById('slot5').classList = 'puzzleSpaceWrong'
            document.getElementById('slot6').classList = 'puzzleSpaceWrong'
            document.getElementById('slot7').classList = 'puzzleSpaceWrong'
            wrong.play()
        }
    }
    else
    {
        document.getElementById('slot1').classList = 'puzzleSpace'
        document.getElementById('slot2').classList = 'puzzleSpace'
        document.getElementById('slot3').classList = 'puzzleSpace'
        document.getElementById('slot4').classList = 'puzzleSpace'
        document.getElementById('slot5').classList = 'puzzleSpace'
        document.getElementById('slot6').classList = 'puzzleSpace'
        document.getElementById('slot7').classList = 'puzzleSpace'
    }
}
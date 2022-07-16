let blockOne = document.createElement('div')
let blockTwo = document.createElement('div')
let blockThree = document.createElement('div')
let blockFour = document.createElement('div')
let main = document.createElement('div')

main.classList = ('main')
blockOne.classList.add('block')
blockTwo.classList.add('block')
blockThree.classList.add('block')
blockFour.classList.add('block')


document.body.prepend(blockOne)
document.body.prepend(blockTwo)
document.body.prepend(blockThree)
document.body.prepend(blockFour)
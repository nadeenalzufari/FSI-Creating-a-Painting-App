// when we psress in the pixle it consoltesting, testing, 123'

//painting.addEventListener('click', function(e){
//	console.log('testing, testing, 123')
let selectedColor = '"color-choice'
const painting = document.querySelector('.painting')

painting.addEventListener('click', function (e) {
    e.target.style.backgroundColor = selectedColor
})

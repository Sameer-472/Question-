let plus = document.querySelectorAll('.plus')

// console.log(plus[1])
let minues = document.querySelectorAll('.minues');
// console.log(minues)
let text = document.querySelectorAll('.question-text');
// console.log(text)


// when ever user click on the plus hide the click and show show the text

for (let x = 0; x < plus.length; x++) {
    // const element = array[x];
    // console.log(plus[x])

plus[x].addEventListener("click" , ()=>{
    text[x].classList.remove('show-text');
    console.log(plus[x]);
    plus[x].style.display = 'none'
    minues[x].style.display = 'block'
})
}


for (let y = 0; y < minues.length; y++) {
    // const element = array[x];
    // console.log(plus[x])

minues[y].addEventListener("click" , ()=>{
    text[y].classList.add('show-text');
    // console.log(plus[x]);
    plus[y].style.display = 'block'
    minues[y].style.display = 'none'
})
}



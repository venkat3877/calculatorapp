
let result=''
let operation=''
let secondoperand=''
let firstoperand=''

const single_button= e =>{
    if(operation==''){
        firstoperand+=e.target.dataset.number
        result+=e.target.dataset.number
        display()
    }else{
        secondoperand+=e.target.dataset.number
        result+=e.target.dataset.number
        display()
    }
}
const getoperation= event =>{
    operation=event.target.innerText
    result=result+operation
    display()
}
const operations=() =>{
    if(operation=='+'){
        result=Number(firstoperand)+Number(secondoperand) 
        console.log(result)
    }
    else if(operation=='-'){
        result=Number(firstoperand)-Number(secondoperand)        
    }
    else if(operation=='*'){
        result=Number(firstoperand)*Number(secondoperand)        
    }
    else if(operation=='/'){
        result=Number(firstoperand)/Number(secondoperand)        
    }
}

const equal=()=>{
    operations()
    display()
}
const clear=()=>{
    result=''
    display()
}
let equalbut=document.getElementById('equalbutton')
equalbut.addEventListener('click',equal)

let clearbut=document.getElementById('clearbutton')
clearbut.addEventListener('click',clear)
const display=() =>{
    document.getElementById("display").innerText=result
}

let number_buttons=document.querySelectorAll('.number_button')
number_buttons.forEach(single_number_button =>{
    single_number_button.addEventListener('click',single_button)
})
let get_operation=document.querySelectorAll('.operation')
get_operation.forEach(op => {
    op.addEventListener('click',getoperation)
})


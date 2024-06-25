let screen=document.querySelector(".screen");
let arr = Array.from(document.querySelectorAll(".item"))
arr.forEach((val)=>{
    val.addEventListener('click',()=>{
        if(val.id!='equalsto' && val.id!='clear'){
            let textNode = document.createTextNode(val.textContent);
            screen.appendChild(textNode);
            screen.scrollTop = screen.scrollHeight; 
            
        }
    })
})

document.querySelector('#clear').addEventListener('click',()=>{
    screen.innerHTML=""
})
document.getElementById("equalsto").addEventListener('click',()=>{
    let toeval="";
    let enteredtext=screen.innerHTML;
    for(let i=0;i<enteredtext.length;i++){
        if(enteredtext[i]=='X'){
            toeval+="*";

        }
        else{
            toeval+=enteredtext[i];
        }
    }
    try{
        screen.innerHTML=eval(toeval);
    }
    catch{
        screen.innerHTML="Error"
    }
})
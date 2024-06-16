const inputField=document.getElementById("inputField");
const outputField=document.getElementById("outputField");
const buttons = document.querySelectorAll(".button");
const clearBtn=document.getElementById("clearBtn");
const backBtn=document.getElementById("backBtn");
const evalBtn=document.getElementById("evalBtn");

// buttons
buttons.forEach(button=>{

    button.addEventListener('click',( )=>{
        switch (button.innerHTML){
            case "×":  inputField.innerHTML+="*";
            break;
            case "÷":  inputField.innerHTML+="/";
            break;
            case "^":  inputField.innerHTML+="**";
            break;
            default: inputField.innerHTML+=button.innerHTML;
            break;
        }
    })

})

// delete all
clearBtn.addEventListener('click',( )=>{
    inputField.innerHTML="";
    outputField.innerHTML="";
})

// back button
backBtn.addEventListener('click',( )=>{
    inputField.innerHTML=inputField.innerHTML.slice(0,-1);
})

// equals
evalBtn.addEventListener('click',( )=>{
    try{
        let Ans=eval(inputField.innerHTML);
        Ans=Ans.toFixed(4); Ans=parseFloat(Ans);
        outputField.innerHTML=Ans;
    }catch{
        outputField.innerHTML="oops :("
    }
})

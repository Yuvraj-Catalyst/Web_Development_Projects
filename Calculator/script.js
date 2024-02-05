let buttons = document.getElementsByClassName("btn");
let input = document.getElementById("input");
let back = document.getElementById("back");
let divide = document.getElementById("divide");
let answer;
let cut = false;
let submit = false;
Array.from(buttons).forEach((element)=>{
    element.addEventListener("click",()=>{
        if(element.innerText === "CE"){
            let str = input.value;
            input.value = str.slice(0,str.length-1);
        }
        else if(element.innerText === "AC"){
            input.value = "";
        }
        else if(element.innerText === "="){
            let str1 = input.value;
            if(str1.length === 0){
                return;
            }
            let d = str1[str1.length-1];
            if(!(d==="+" || d==="-" || d==="x" || d===divide.innerText || d==="%" || d===".")){
                cut = false;
                back.innerText = "AC";
                let str = input.value;

                str = str.replace("x","*");
                str = str.replace(divide.innerText,"/");
                console.log(str);
                answer = eval(str);
                input.value = input.value+" = "+answer;
                submit = true;
            }
        }
        else{
            if(submit){
                let c = element.innerText;
                if((c==="+" || c==="-" || c==="x" || c===divide.innerText || c==="%")){
                    input.value = answer;
                }
                else{
                    input.value = "";
                }
            }

            let str = input.value;
            let c = element.innerText;
            let d = str[str.length-1];
            if(input.value.length===0 && (c === "." || c===")")){
                return;
            }
            if(!(((c==="+" || c==="-" || c==="x" || c===divide.innerText || c==="%" || c===".") && (d==="+" || d==="-" || d==="x" || d===divide.innerText || d==="%" || d==="."))||(c==="(" && d==="(")||(d===")" && c===")")||(d===")" && c==="(")||(c===")" && input.value.length === 0))){
                input.value = input.value+element.innerText;
            }
            if(!cut){
                back.innerText = "CE";
                cut = true;
            }
        }
    })
})
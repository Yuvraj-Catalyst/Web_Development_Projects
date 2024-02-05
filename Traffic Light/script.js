var lightCount = 31;
let light = document.getElementsByClassName("light-part");
let btn = document.getElementsByClassName("btn");
let start = btn[0];
let reset = btn[1];
let light1 = light[0];
let light2 = light[1];
let light3 = light[2];
var showingcolor,showingTime;
let showTime = document.getElementById("showTime");
let setGreen = ()=>{
    light3.classList.toggle("addGreen");
}
let setRed = ()=>{
    light1.classList.toggle("addRed");
}
let setYellow = ()=>{
    light2.classList.toggle("addYellow");
}
let setTime = (time)=>{
    if(time<10){
        showTime.innerText = "0"+time;
    }
    else{
        showTime.innerText = time;
    }
}
start.addEventListener("click",()=>{
    reset.classList.toggle("btn-reset");
    start.classList.toggle("btn-start");
    showingcolor = setInterval(()=>{
        if(lightCount>15){
            if(light1.classList.contains("addRed")){
                light1.classList.remove("addRed");
            }if(light2.classList.contains("addYellow")){
                light2.classList.remove("addYellow");
            }
            setGreen();
        }
        else if(lightCount<=5){
            if(light1.classList.contains("addRed")){
                light1.classList.remove("addRed");
            }if(light3.classList.contains("addGreen")){
                light3.classList.remove("addGreen");
            }
            setYellow();
        }
        else if(lightCount<=15){
            if(light2.classList.contains("addYellow")){
                light2.classList.remove("addYellow");
            }if(light3.classList.contains("addGreen")){
                light3.classList.remove("addGreen");
            }
            setRed();
        }
    },200);
    showingTime= setInterval(()=>{
        lightCount--;
        if(lightCount == 0){
            lightCount = 30;
        }
        if(lightCount>15){
            setTime(lightCount-15);
        }
        else if(lightCount<=15){
            setTime(lightCount);
        }
    },1000);
})
reset.addEventListener("click",()=>{
    clearInterval(showingcolor);
    clearInterval(showingTime);
    if(light1.classList.contains("addRed")){
        light1.classList.remove("addRed");
    }if(light2.classList.contains("addYellow")){
        light2.classList.remove("addYellow");
    }
    if(light3.classList.contains("addGreen")){
        light3.classList.remove("addGreen");
    }
    showTime.innerText = "00";
    start.classList.toggle("btn-start");
    reset.classList.toggle("btn-reset");
    lightCount = 31;
    
})


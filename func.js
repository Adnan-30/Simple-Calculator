const dis = document.getElementById("Display");

function appendToDisplay(input){
    if(dis.value=="Error") dis.value="";
    dis.value += input;
}
function DeleteLastElement(){
    if(dis.value=="Error") dis.value="";
    dis.value=dis.value.slice(0,-1);
}
function clearDisplay(){
    dis.value = "";
}
function Calculate(){
    try{
        dis.value=eval(dis.value);
    }
    catch(error){
        dis.value="Error";
    }
}
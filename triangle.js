const input=document.querySelectorAll('.angle-input')
const btn=document.getElementById('button')
const output=document.getElementById('output')

function calculatesumofangles(Angle1, Angle2, Angle3){
    const sumofAngles= Angle1 + Angle2 + Angle3
    return sumofAngles
}
function isTriangle(){
    const sum= calculatesumofangles(Number(input[0].value), Number(input[1].value), Number(input[2].value))
    //console.log(sum)
    if(sum===180){
        output.innerText = "Yay, 😃The angles form a triangle"

    }
    else{
        output.innerText="Oh! 😟The angles do not form a triangle" 
    }
}

btn.addEventListener("click", isTriangle)

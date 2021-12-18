const perpendicular = document.getElementById("perpendicular");
const base = document.getElementById("base");
const btn = document.getElementById('button');
const output = document.getElementById('output');

function calculateSumOfSquares(P,B){
    const sumOfSquares = P*P + B*B;
    return sumOfSquares;
}

function calculateHypotenuse(){
    var P= Number(perpendicular.value)
    var B= Number(base.value)
    if(P > 0 && B > 0)
    {
        const sumOfSquares = calculateSumOfSquares(P,B);
        const result = Math.sqrt(sumOfSquares);
            Hypotenuse= result.toFixed(2)
         output.innerText = "The Length of Hypotenuse is " + Hypotenuse + " unit";
    }
    else{
          output.innerText = "Please enter the valid input";
    }
    
}

btn.addEventListener("click", calculateHypotenuse);
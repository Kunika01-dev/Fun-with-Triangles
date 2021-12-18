const quizform= document.querySelector('.quiz-form')
const submit=document.getElementById('button')

const output= document.getElementById('output')

const correctAnswers= ['70°','Right Angled','6,8,10','Equilateral Triangle','15cm' ]

function calculatescore(){
       let score=0
       let index=0
       const formResult=new FormData(quizform)
       for(let value of formResult.values()){
           if (value===correctAnswers[index]){
                  score=score+1
           }
           index=index+1
       }
       output.innerText= "Your score is " + score
}

submit.addEventListener('click', calculatescore)

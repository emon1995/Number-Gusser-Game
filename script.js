let result = document.querySelector("#clickBtn");


result.addEventListener("click", newResult);

let randomNumber = Math.floor(Math.random() * 10 + 1); 

function newResult(e){

    for (let i=1; i<=3; i++ ) {

    let correcr_ans = prompt("Enter a guess: ");
    
    if(correcr_ans == ""){
        alert("Invalid Input!!");
    }
    else if(correcr_ans == randomNumber){	 
        alert("CONGRATULATIONS!!! You Win "); 
        break;
    }else if(correcr_ans > randomNumber) {	 
        alert("Correct answer is smaller!"); 
    }else { 
        alert("Correct answer is greater! ") ;
    } 

    if(i == 3){
        alert("You lose! ");
    }

 }
 e.preventDefault();
}












function displayIOB(){
   
    
    const income = document.getElementById("incomeAmount").value; //get the value of income that was entered by the user
    const exp = document.getElementById("expenceAmount").value; //get the value of expense that was entered by the user

    //get the the display box by id
    let incomeDisplay =document.getElementById("incomeDisplay");
    let expenseDisplay =document.getElementById("expenseDisplay");
    let balanceDisplay =document.getElementById("balanceDisplay");

    //calculating Balance display with income entered and expense entered
    let balanDisplay=income-exp;
   
    //Displaying everything into the displayBox
    balanceDisplay.innerHTML=balanDisplay;
    incomeDisplay.innerHTML=income;
    expenseDisplay.innerHTML=exp;


}

   




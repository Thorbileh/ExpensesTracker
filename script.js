

function displayIOB(){
   
    
    const selectElement = document.getElementById("enter_Income_Expense");
    const amountInput = parseFloat(document.getElementById("amountEntered").value);
    const titleInput = document.getElementById("titleEntered").value;

    const incomeDisplay = document.getElementById("incomeDisplay");
    const expDisplay = document.getElementById("expenseDisplay");
    const balanDisplay = document.getElementById("balanceDisplay");
    const transactionTableBody = document.getElementById("transactionTableBody");


    // Variables to store current income and expense values
    let currentIncome = parseFloat((incomeDisplay.innerHTML));
    let currentExpense = parseFloat((expDisplay.innerHTML));

    // Calculate and display balance
    const balance = currentIncome - currentExpense;
    balanDisplay.innerHTML = balance;

    //if nothing is entered 
    if (amountInput === 0 || titleInput === '') {
        alert("Please enter an amount and a title");
        return;
    }  // Stop function execution here if no amount or title is entered


    // Check if entered amount is a number
    if (isNaN(amountInput)) {
        alert("Please enter a valid number");
        return;
    }  // Stop function execution here if entered amount is not a number


    // Check if it's income or expense based on selection
    let transactionType = '';
    if (selectElement.value === "0") {
        currentIncome += amountInput;  // Add the income amount
        incomeDisplay.innerHTML = currentIncome;
        transactionType = 'Income';
    } 
    else 
    if (selectElement.value === "1" && balance< amountInput) {
        
            alert(amountInput+ " is the more than the balance of "+ balance);
            return;  // Stop function execution here if there is no money available to cover the expense amount
    }
    else
        {
            currentExpense += amountInput;  // Add the expense amount
            expDisplay.innerHTML = currentExpense;
            transactionType = 'Expense';
        }
       
    
    // Add current time in the table of transaction record
        const date = new Date();
        const hours = date.getHours();
        const minutes = date.getMinutes();

        const time = hours +":"+minutes;

    // Create a new row for the transaction table
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
        <td> ${transactionType} </td>
        <td> ${titleInput} </td>
        <td> R${amountInput} </td>
        <td> ${time} </td>
    `;
     // Append the new row to the transaction table
    transactionTableBody.appendChild(newRow);


    //clearing the input after entering data
    document.getElementById("titleEntered").value = '';
    document.getElementById("amountEntered").value = '';

}

function updatePlaceholder() {
    const selectElement = document.getElementById("enter_Income_Expense");
    const amountInput = document.getElementById("amountEntered");
    
   
    if (selectElement.value === "0") {
        amountInput.placeholder = "Enter the income";
    } else if (selectElement.value === "1") {
        amountInput.placeholder = "Enter the expense";
    }
}


   




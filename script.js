

//Function to save on local storage
function saveTransactionStorage(income,expense)
{
    localStorage.setItem("income",income);
    localStorage.setItem("expense",expense);
}

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

    // Check if it's income or expense based on selection
    let transactionType = '';
    if (selectElement.value === "0") {
        currentIncome += amountInput;  // Add the income amount
        incomeDisplay.innerHTML = currentIncome;
        transactionType = 'Income';
    } 
    else 
    if (selectElement.value === "1" && amountInput>balanDisplay) {
        
            alert("No Money available");
    }
    else
        {
            currentExpense += amountInput;  // Add the expense amount
            expDisplay.innerHTML = currentExpense;
            transactionType = 'Expense';
        }
       
    


    // Create a new row for the transaction table
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
        <td> ${transactionType} </td>
        <td> ${titleInput} </td>
        <td> R${amountInput} </td>
    `;
     // Append the new row to the transaction table
    transactionTableBody.appendChild(newRow);

    // Calculate and display balance
    const balance = currentIncome - currentExpense;
    balanDisplay.innerHTML = balance;


    //display transaction details
    saveTransactionStorage(currentIncome, currentExpense);

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


   




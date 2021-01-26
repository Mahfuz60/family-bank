//login Button event handler
const loginButton = document.getElementById("login_button");
loginButton.addEventListener("click", function () {

  const loginArea = document.getElementById("login-area");
  loginArea.style.display = "none";
  const transactionArea = document.getElementById("transaction-area");
  transactionArea.style.display = "block";
});

//Deposit Button Event Handler

    const depositBtn=document.getElementById("add-deposit");
    depositBtn.addEventListener("click",function(){
    // const depositAmount = document.getElementById("depositAmount").value;
    // const depositNumber=parseFloat(depositAmount);
    const depositNumber=getInputNumber("depositAmount");


        /*const currentDeposit=document.getElementById("currentDeposit").innerText;
        const currentDepositNumber=parseFloat(currentDeposit);
        const totalDeposit=depositNumber+currentDepositNumber;
        document.getElementById("currentDeposit").innerText=totalDeposit;
        */

        /* const currentBalance=document.getElementById("currentBalance").innerText;
          const currentBalanceNumber=parseFloat(currentBalance);
         const totalBalance=depositNumber+currentBalanceNumber;
         document.getElementById("currentBalance").innerText=totalBalance;
         console.log(totalBalance);*/


        updateSpanText("currentDeposit",depositNumber);
        updateSpanText("currentBalance",depositNumber);
        document.getElementById("depositAmount").value="";
       

})

function updateSpanText(id,depositNumber){

  const current=document.getElementById(id).innerText;
        const currentNumber=parseFloat(current);
        const totalAmount=depositNumber+currentNumber;
        document.getElementById(id).innerText=totalAmount;
}


//WithDraw Button Event Handler

const withDrawBtn=document.getElementById("addWithDraw");
withDrawBtn.addEventListener("click",function(){
  // const withDrawAmount=document.getElementById("withDrawAmount").value;
  // const withDrawNumber=parseFloat(withDrawAmount);
  const withDrawNumber=getInputNumber("withDrawAmount");
  updateSpanText("currentWithdraw",withDrawNumber);
  updateSpanText("currentBalance",-1*withDrawNumber);
  document.getElementById("withDrawAmount").value="";
  
  
  
  
  
  

})

function getInputNumber(id){
  const amount=document.getElementById(id).value;
  const amountNumber=parseFloat(amount);
  return amountNumber;
  

}
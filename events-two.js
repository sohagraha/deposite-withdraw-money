let deposite = document.getElementById('depositeId');
let withdraw = document.getElementById('withdrawId');
let balance = document.getElementById('balanceId');

let currentdep = 0;
let currentwithdraw = 0;
let currentbalance = 0;

let depositeInput = document.getElementById("depositeInputId");
let withdrawInput = document.getElementById("withdrawInputId");

let depositeBtn = document.getElementById('depositeBtnId');

depositeBtn.addEventListener('click', function () {
    let depositeInputv = depositeInput.value;
    let depositeInputval = parseFloat(depositeInputv)

    currentdep = currentdep + depositeInputval;

    currentbalance = currentbalance + depositeInputval;

    depositeInput.value = '';

    deposite.innerText = currentdep;
    balance.innerText = currentbalance;

});

let withdrawBtn = document.getElementById('withdrawBtnId');
withdrawBtn.addEventListener('click', function () {

    let withdrawInputv = withdrawInput.value;
    let withdrawInputval = parseFloat(withdrawInputv)

    currentwithdraw = currentwithdraw + withdrawInputval;

    currentbalance = currentbalance - withdrawInputval;

    withdrawInput.value = '';

    withdraw.innerText = currentwithdraw;
    balance.innerText = currentbalance;
});
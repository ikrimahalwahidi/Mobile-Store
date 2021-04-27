'use strict';





let randomNum=[100][500];
let store=[];

localStorage.store("User", "Type" , "Price" , "Condition");



function user(User,Type,Price,Condition) {
    this.User=User;
    this.Type=Type;
    this.Price=Price;
    this.Condition=Condition;
}
this.min = 100;
this.max = 500;


function randomNumber(min,max) {
    return Math.round(Math.random()*max-min);
    
}





let first = document.getElementById('first');
 let table =document.createElement('table');
  first.appendChild(table);

  function header() {
      let Row=document.createElement('tr');
      table.appendChild(Row);
      let Data = createElement('th');
      Row.appendChild(Data);

      for (let i = 0; i <randomNum.length ; i++) {
         let Data= document.createElement('th');
         Row.appendChild(Data);
         Data.textContent=randomNum[i];
        
         
        }
        header();
    }
    
    store.prototype= function () {
       let Data=document.createElement('tr');
       table.appendChild(Data);
let RowName=document.createElement('td');
Data.appendChild(RowName);
RowName.textContent=this.store;

for (let i = 0; i < 200; i++) {
    let RowNum=document.createElement('td');
Data.appendChild(RowNum);
RowNum.textContent=this.sum;
    
}
};    
getItem();

  let form2 = document.getElementById('form2');
  form.addEventListener('submit', submitter);

  function submitter(event) {
      event.preventdefault();

      let user =event.target.user.value;
      let Type =event.target.Type.value;
      let Price =event.target.Price.value;
      let Condition =event.target.Condition.value;

      letnew = user(User,Type,Price,Condition);
table.textContent='';
header();
  }

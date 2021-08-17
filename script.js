
let resultShow = document.getElementById("calculate");


function getValue(event){
  let inputValue = event.target.value;

  resultShow.value  += inputValue;
  
  // return resultShow.value;
}
function restValue(){
  resultShow.value = "";
}
function claculate(){
  // input er first item/ 0 index check kori -/+/. thakle caldulate hobe other wise hobe na
  // result field er 0 index e -/=/. ase ki na?
  let firstValue = resultShow.value[0].match(/[-+.]/)
  // +/-/. surute thakle or 0 index value 0/0 er besi hole calculate korbe
  if(firstValue || resultShow.value[0] >= 0){
    resultShow.value = eval(resultShow.value);
  }
}

// google kore tore pelam na. to ki hoise amii tore thik kortasi wait!!!
function deleteValue(){
  // result er valugula ke alada alada kori
 let valueFormate = resultShow.value.split('');
//  alada alada valugula ke arry te rakhar jonno ekta empty array nii
 let singleValue = [];
 
//  for loop diye alada kora value gula array te store kori
 for(single of valueFormate){
  singleValue.push(single)
 }
//  array theke last itemt ke delete kori
  singleValue.pop();
  // array te thaka baki item or elemet gula ke ek kori/ jora di/ join kori
  let afterDelete = singleValue.join('');
  // delete er kaj ses ebar output hisebe show kori
  resultShow.value = afterDelete;
}
// done :)
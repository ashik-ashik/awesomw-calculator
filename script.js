
let resultShow = document.getElementById("calculate");


function getValue(event){
  let inputValue = event.target.value;

  // starting e %/* or / oparetor use korte dimu na
  const notValid = inputValue.match(/[%*/]/);

  if(resultShow.value.length == 0){
    if(!notValid){
      resultShow.value  += inputValue;
    }
  }else{
    checkDuble(inputValue)

  }
  
  

  // console.log(notValid)
}

// check duble oparetor
function checkDuble(val){
  const prevVal = resultShow.value;
  if((val == "+" || val == "-" || val == "/" || val == "*" || val == "%") && (prevVal[prevVal.length -1] == "+" || prevVal[prevVal.length -1] == "-" || prevVal[prevVal.length -1] == "/" || prevVal[prevVal.length -1] == "*" || prevVal[prevVal.length -1] == "%")){
    // console.log("double oparetor is not allowed")
  }else{
    resultShow.value  += val;
  }
}

function restValue(){
  resultShow.value = "";
}

function claculate(){
  // input er first item/ 0 index check kori -/+/. thakle caldulate hobe other wise hobe na
  // result field er 0 index e -/=/. ase ki na?
  if(resultShow.value.length > 0){
    let firstValue = resultShow.value[0].match(/[-+.]/);
  let lastValue = resultShow.value[resultShow.value.length -1].match(/[-+./*%]/);
  // +/-/. surute thakle or 0 index value 0/0 er besi hole calculate korbe
  // but last je kno oparetor thakle calculate hobe na
  if((firstValue || resultShow.value[0] >= 0) && !lastValue){
    resultShow.value = eval(resultShow.value);
  }
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
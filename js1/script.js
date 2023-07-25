const calcTip= function(bill){
    return bill>=50 &&  bill<=300? bill*0.15: bill*0.2;//we are using ternary operator
  }
    const bills=[125, 555, 44];
  // create  array  containing tip for each bill


  const calcTips1=calcTip(bills[0]);
  console.log(calcTips1);
  const calcTips2=calcTip(bills[1]);
  console.log(calcTips2);
  const calcTips3=calcTip(bills[2]);
  console.log(calcTips3);
  //total 
console.log(bills[0]+calcTip(bills[0]));
console.log(bills[1]+calcTip(bills[1]));
console.log(bills[2]+calcTip(bills[2]));

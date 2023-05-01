function saturdayFun(fun = 'roller-skate'){
    return (`This Saturday, I want to ${fun}!`)
};

console.log(saturdayFun(fun = "bathe my dog"));

function mondayWork(work = "go to the office"){
    return (`This Monday, I will ${work}.`)
}
console.log(mondayWork(fun = 'work from the office'))

//outer
function wrapAdjective(flair = "*"){
   return function(result = "a hard worker"){
    return `You are ${flair}${result}${flair}!`
   };
}


const encouragingPromptFunction = wrapAdjective("*");
console.log(encouragingPromptFunction());
console.log(wrapAdjective("%")("a dedicated programmer"));

function calcu(operator){
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var finalnum;
    switch(operator){
        case "sum":
            finalnum = num1+num2;
            break;
        case "subtraction":
            finalnum = num1-num2;
            break;
        case "product":
            finalnum = num1*num2;
            break;
        case "quotient":
            finalnum = num1/num2;
            break;
        case "modular":
            finalnum = num1%num2;
            break;
    }
    if(Number.isNaN(num1) || Number.isNaN(num2)){
        document.getElementById('results').innerHTML="The input/s were invalid numbers.";
    }else{
        document.getElementById('results').innerHTML="The "+operator+" of "+num1+" and "+num2+" is "+finalnum;
    }
}
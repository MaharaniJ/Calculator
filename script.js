const container=document.createElement("div");
container.class="center";                        //Container

const calchead=document.createElement("h1");
calchead.id="DOMcalculator";
calchead.innerText="DOM Calculator";            //Calculator heading
document.body.append(container);                //add Container to body

const calculator=document.createElement("div");   //Calc Container
calculator.id="calculator";

container.append(calchead);                     //append header ==> Container
container.append(calculator);                   //append calculator ==> Container

//calcuated results - displayed in this input box
var input = document.createElement('input');
input.type        = "text";
input.id          = "result";
input.disabled    = true;              // input disabled to avoid enter characters
input.placeholder = "0";               // intialized value 0 will be dislayed
input.setAttribute("id","output");
calculator.append(input);

//Operators
const btnLayout=document.createElement("div");
btnLayout.id="btnLayout";
const operator1=document.createElement("button");   
operator1.setAttribute('id','clear');
operator1.setAttribute('class','operator') ;
operator1.setAttribute('onclick',"clr()");
operator1.addEventListener('onclick',runEvent);

operator1.innerText="AC";                          //All Clear at once to 0
btnLayout.append(operator1);  

const operator2=document.createElement("button");
operator2.setAttribute('id','del');
operator2.setAttribute('class','operator') ;
operator2.setAttribute('onclick',"del()");
operator2.addEventListener('onclick',runEvent);
operator2.innerText="C";
btnLayout.append(operator2);   

const operator3=document.createElement("button");
operator3.setAttribute('id','%');
operator3.setAttribute('class','operator') ;
operator3.setAttribute('onclick',"display('%')");
operator3.addEventListener('onclick',runEvent);
operator3.innerText="%";
btnLayout.append(operator3);   

const operator4=document.createElement("button");
operator4.setAttribute('id','/');
operator4.setAttribute('class','operator') ;
operator4.setAttribute('onclick',"display('/')");
operator4.addEventListener('onclick',runEvent);
operator4.innerHTML=`&#247`;                       //division symbol
btnLayout.append(operator4);

const number7=document.createElement("button");
number7.setAttribute('id','7');
number7.setAttribute('class','number') ;
number7.setAttribute('onclick',"display('7')");
number7.addEventListener('onclick',runEvent);
number7.innerText="7";
btnLayout.append(number7);

const number8=document.createElement("button");
number8.setAttribute('id','8');
number8.setAttribute('class','number') ;
number8.setAttribute('onclick',"display('8')");
number8.addEventListener('onclick',runEvent);
number8.innerText="8";
btnLayout.append(number8);

const number9=document.createElement("button");
number9.setAttribute('id','9');
number9.setAttribute('class','number') ;
number9.setAttribute('onclick',"display('9')");
number9.addEventListener('onclick',runEvent);
number9.innerText="9";
btnLayout.append(number9);

const operator5=document.createElement("button");
operator5.setAttribute('id','*');
operator5.setAttribute('class','number') ;
operator5.setAttribute('onclick',"display('*')");
operator5.addEventListener('onclick',runEvent);
operator5.innerText="*";
btnLayout.append(operator5);

const number4=document.createElement("button");
number4.setAttribute('id','4');
number4.setAttribute('class','number') ;
number4.setAttribute('onclick',"display('4')");
number4.addEventListener('onclick',runEvent);
number4.innerText="4";
btnLayout.append(number4);

const number5=document.createElement("button");
number5.setAttribute('id','5');
number5.setAttribute('class','number') ;
number5.setAttribute('onclick',"display('5')");
number5.addEventListener('onclick',runEvent);
number5.innerText="5";
btnLayout.append(number5);

const number6=document.createElement("button");
number6.setAttribute('id','6');
number6.setAttribute('class','number') ;
number6.setAttribute('onclick',"display('6')");
number6.addEventListener('onclick',runEvent);
number6.innerText="6";
btnLayout.append(number6);


const operator6=document.createElement("button");
operator6.setAttribute('id','subtract');
operator6.setAttribute('class','operator') ;
operator6.setAttribute('onclick',"display('-')");
operator6.addEventListener('onclick',runEvent);
operator6.innerText="-";
btnLayout.append(operator6);

const number1=document.createElement("button");
number1.setAttribute('id','1');
number1.setAttribute('class','number') ;
number1.setAttribute('onclick',"display('1')");
number1.addEventListener('onclick',runEvent);
number1.innerText="1";
btnLayout.append(number1);

const number2=document.createElement("button");
number2.setAttribute('id','2');
number2.setAttribute('class','number') ;
number2.setAttribute('onclick',"display('2')");
number2.addEventListener('onclick',runEvent);
number2.innerText="2";
btnLayout.append(number2);

const number3=document.createElement("button");
number3.setAttribute('id','3');
number3.setAttribute('class','number');
number3.setAttribute('onclick',"display('3')");
number3.addEventListener('onclick',runEvent);
number3.innerText="3";
btnLayout.append(number3);


const operator7=document.createElement("button");
operator7.setAttribute('id','add');
operator7.setAttribute('class','operator') ;
operator7.setAttribute('onclick',"display('+')");
operator7.addEventListener('onclick',runEvent);
operator7.innerText="+";
btnLayout.append(operator7);

const empty1=document.createElement("button");
empty1.setAttribute('id','empty');
empty1.setAttribute('class','empty') ;
empty1.innerText="";
btnLayout.append(empty1);

const number0=document.createElement("button");
number0.setAttribute('id','0');
number0.setAttribute('class','number') ;
number0.setAttribute('onclick',"display('0')");
number0.addEventListener('onclick',runEvent);
number0.innerText="0";
btnLayout.append(number0);

const empty2=document.createElement("button");
empty2.setAttribute('id','empty');
empty2.setAttribute('class','empty') ;
empty2.innerText="";
btnLayout.append(empty2);

const operator8=document.createElement("button");
operator8.setAttribute('id','=');
operator8.id = "equal";
operator8.setAttribute('class','operator') ;
operator8.setAttribute('onclick',"calculate()");
operator8.addEventListener('onclick',runEvent);
operator8.innerText="=";
btnLayout.append(operator8);
calculator.append(btnLayout);

function runEvent(e){
    console.log(onclick);
    }

let output = document.getElementById('output');

function display(num){
    output.value += num;
}

function clr(){
    output.value ="";
}

function del(){
    output.value = output.value.slice(0,-1);
}

function calculate(){
    try{
        output.value = eval(output.value);
    }
    catch{
     alert("Only numbers are allowed");
    }
}


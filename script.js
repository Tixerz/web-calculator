//27 is the max string size in order to show in entry box
let full_str="";
let main_str = document.getElementsByClassName('entry_box')[0]; // its just what we wanna show in the entry box

let btn1 = document.getElementsByClassName('Button')[0];
let btn2 = document.getElementsByClassName('Button')[1];
let btn3 = document.getElementsByClassName('Button')[2];
let btn4 = document.getElementsByClassName('Button')[3];
let btn5 = document.getElementsByClassName('Button')[4];
let btn6 = document.getElementsByClassName('Button')[5];
let btn7 = document.getElementsByClassName('Button')[6];
let btn8 = document.getElementsByClassName('Button')[7];
let btn9 = document.getElementsByClassName('Button')[8];
let btn0 = document.getElementsByClassName('Button')[9];


function count1(){console.log(1);
    full_str+="1";
    if(main_str.textContent.length<=26){
        main_str.textContent+="1";
    }else{
        main_str.textContent=main_str.textContent.substring(1);
        main_str.textContent+="1";
    }
}
function count2(){console.log(2);
    full_str+="2";
    if(main_str.textContent.length<=26){
        main_str.textContent+="2";
    }else{
        main_str.textContent[0]="";
        main_str.textContent+="2";
    }
}

function count3(){console.log(3);
    full_str+="3";
    if(main_str.textContent.length<=26){
        main_str.textContent+="3";
    }else{
        main_str.textContent=main_str.textContent.substring(1);
        main_str.textContent+="3";
    }
}

function count4(){console.log(4);
    full_str+="4";
    if(main_str.textContent.length<=26){
        main_str.textContent+="4";
    }else{
        main_str.textContent=main_str.textContent.substring(1);
        main_str.textContent+="4";
    }
}

function count5(){console.log(5);
    full_str+="5";
    if(main_str.textContent.length<=26){
        main_str.textContent+="5";
    }else{
        main_str.textContent=main_str.textContent.substring(1);
        main_str.textContent+="5";
    }
}

function count6(){console.log(6);
    full_str+="6";
    if(main_str.textContent.length<=26){
        main_str.textContent+="6";
    }else{
        main_str.textContent=main_str.textContent.substring(1);
        main_str.textContent+="6";
    }
}

function count7(){console.log(7);
    full_str+="7";
    if(main_str.textContent.length<=26){
        main_str.textContent+="7";
    }else{
        main_str.textContent=main_str.textContent.substring(1);
        main_str.textContent+="7";
    }
}

function count8(){console.log(8);
    full_str+="8";
    if(main_str.textContent.length<=26){
        main_str.textContent+="8";
    }else{
        main_str.textContent=main_str.textContent.substring(1);
        main_str.textContent+="8";
    }
}

function count9(){console.log(9);
    full_str+="9";
    if(main_str.textContent.length<=26){
        main_str.textContent+="9";
    }else{
        main_str.textContent=main_str.textContent.substring(1);
        main_str.textContent+="9";
    }
}

function count0(){console.log(0);
    full_str+="0";
    console.log(main_str.textContent.length)
    if(main_str.textContent.length<=26){
        main_str.textContent+="0";
    }else{
        main_str.textContent=main_str.textContent.substring(1);
        main_str.textContent+="0";
    }
}

function print_sum(){console.log('+');
    if(main_str.textContent[main_str.textContent.length-1]!='+' && main_str.textContent[main_str.textContent.length-1]!='-'&& main_str.textContent[main_str.textContent.length-1]!='×' && main_str.textContent[main_str.textContent.length-1]!='÷'  && main_str.textContent[main_str.textContent.length-1]!='.'){
        full_str+='+';
        if(main_str.textContent.length<=26){
            main_str.textContent+="+";
        }else{
            main_str.textContent=main_str.textContent.substring(1);
            main_str.textContent+="+";
        }   
    }


}
function print_min(){console.log('-');
    if(main_str.textContent[main_str.textContent.length-1]!='+' && main_str.textContent[main_str.textContent.length-1]!='-' && main_str.textContent[main_str.textContent.length-1]!='.'){
        full_str+='-'
        if(main_str.textContent.length<=26){
            main_str.textContent+="-";
        }else{
            main_str.textContent=main_str.textContent.substring(1);
            main_str.textContent+="-";
        }   
    }

}
function print_div(){console.log('÷');
    if(main_str.textContent[main_str.textContent.length-1]!='+' && main_str.textContent[main_str.textContent.length-1]!='-'&& main_str.textContent[main_str.textContent.length-1]!='×' && main_str.textContent[main_str.textContent.length-1]!='÷'  && main_str.textContent[main_str.textContent.length-1]!='.'){
        full_str+='/'
        if(main_str.textContent.length<=26){
            main_str.textContent+="÷";
        }else{
            main_str.textContent=main_str.textContent.substring(1);
            main_str.textContent+="÷";
        }   
    }
}
function print_multi(){console.log('×');
    if(main_str.textContent[main_str.textContent.length-1]!='+' && main_str.textContent[main_str.textContent.length-1]!='-'&& main_str.textContent[main_str.textContent.length-1]!='×' && main_str.textContent[main_str.textContent.length-1]!='÷' && main_str.textContent[main_str.textContent.length-1]!='.'){
        full_str+='*'
        if(main_str.textContent.length<=26){
            main_str.textContent+="×";
        }else{
            main_str.textContent=main_str.textContent.substring(1);
            main_str.textContent+="×";
        }   
    }
}
function C_clear(){
    full_str = "";
    main_str.textContent="";
}


function equal(){
    full_str = eval(full_str);
    main_str.textContent = full_str;
}

function mem(){
    if(main_str.textContent[main_str.textContent.length-1]!='+' && main_str.textContent[main_str.textContent.length-1]!='-'&& main_str.textContent[main_str.textContent.length-1]!='×' && main_str.textContent[main_str.textContent.length-1]!='÷' && main_str.textContent[main_str.textContent.length-1]!='.' ){
        full_str+='.';
        if(main_str.textContent.length<=26){
            main_str.textContent+=".";
        }else{
            main_str.textContent=main_str.textContent.substring(1);
            main_str.textContent+=".";
        }   
    }

}
btn1.addEventListener('click' , count1);
btn2.addEventListener('click' , count2);
btn3.addEventListener('click' , count3);
btn4.addEventListener('click' , count4);
btn5.addEventListener('click' , count5);
btn6.addEventListener('click' , count6);
btn7.addEventListener('click' , count7);
btn8.addEventListener('click' , count8);
btn9.addEventListener('click' , count9);
btn0.addEventListener('click' , count0);




let sum_btn = document.getElementsByClassName('sum_button')[0];
sum_btn.addEventListener('click' , print_sum);

let min_btn = document.getElementsByClassName('min_button')[0];
min_btn.addEventListener('click' , print_min);

let div_btn = document.getElementsByClassName('div_button')[0];
div_btn.addEventListener('click' , print_div);

let multi_btn = document.getElementsByClassName('multipy_button')[0];
multi_btn.addEventListener('click' , print_multi);

let clear_btn = document.getElementsByClassName('clear_button')[0];
clear_btn.addEventListener('click' , C_clear)

let equal_btn = document.getElementsByClassName("equal_button")[0];
equal_btn.addEventListener('click' , equal);

let mem_btn = document.getElementsByClassName('mem_button')[0];
mem_btn.addEventListener('click' , mem);
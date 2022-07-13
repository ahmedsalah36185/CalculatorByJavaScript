// vars for num
var btn1 = document.getElementById("num1"),
    btn2 = document.getElementById("num2"),
    btn3 = document.getElementById("num3"),
    btn4 = document.getElementById("num4"),
    btn5 = document.getElementById("num5"),
    btn6 = document.getElementById("num6"),
    btn7 = document.getElementById("num7"),
    btn8 = document.getElementById("num8"),
    btn9 = document.getElementById("num9"),
    btn0 = document.getElementById("num0");

// vars for operators

var p_btn = document.getElementById("num_+"),
    m_btn = document.getElementById("num_-"),
    f_btn = document.getElementById("num_*"),
    a_btn = document.getElementById("num_/"),
    y_btn = document.getElementById("num_=");

// vars for result
var get_result = document.getElementById("result_in");
var clear_it = document.getElementById("clear");

clear_it.onclick =function(){
    get_result.textContent ='';

    p_btn.classList.remove("enable");
    m_btn.classList.remove("enable");
    f_btn.classList.remove("enable");
    a_btn.classList.remove("enable");
    y_btn.classList.remove("enable");


    localStorage.removeItem("firstdata");

}

btn1.onclick = function(){
    get_result.textContent = get_result.textContent +'1';
}
btn2.onclick = function(){
    get_result.textContent = get_result.textContent +'2';
}
btn3.onclick = function(){
    get_result.textContent = get_result.textContent +'3';
}
btn4.onclick = function(){
    get_result.textContent = get_result.textContent +'4';
}
btn5.onclick = function(){
    get_result.textContent = get_result.textContent +'5';
}
btn6.onclick = function(){
    get_result.textContent = get_result.textContent +'6';
}
btn7.onclick = function(){
    get_result.textContent = get_result.textContent +'7';
}
btn8.onclick = function(){
    get_result.textContent = get_result.textContent +'8';
}
btn9.onclick = function(){
    get_result.textContent = get_result.textContent +'9';
}
btn0.onclick = function(){
    get_result.textContent = get_result.textContent +'0';
}

// operator can save value to local storage 

p_btn.onclick = function(){

    this.classList.add("enable")

    var data = get_result.textContent;
    var saving_data = localStorage.setItem("firstdata",data);


    get_result.textContent= '';
}
m_btn.onclick=function(){

    this.classList.add("enable");

    var data = get_result.textContent;
    var saving_data = localStorage.setItem("firstdata",data);


    get_result.textContent= '';

}
f_btn.onclick =function(){

    this.classList.add("enable");

    var data = get_result.textContent;
    var saving_data = localStorage.setItem("firstdata",data);


    get_result.textContent= '';
}
a_btn.onclick =function(){

    this.classList.add("enable");

    var data = get_result.textContent;
    var saving_data = localStorage.setItem("firstdata",data);


    get_result.textContent= '';
}
y_btn.onclick =function(){

    check();


    if(localStorage.getItem("firstdata")==null){
        get_result.innerHTML="";
    }


    localStorage.removeItem("firstdata");
    p_btn.classList.remove("enable");
    m_btn.classList.remove("enable");
    f_btn.classList.remove("enable");
    a_btn.classList.remove("enable");
    y_btn.classList.remove("enable");

}
function check(){
    if(p_btn.classList.contains("enable")){
        var get_data1 =parseInt (localStorage.getItem("firstdata"));
        var get_data2 =parseInt (get_result.textContent);
        var do_job =  get_data1 + get_data2;
        get_result.textContent = do_job;
    }
    if(m_btn.classList.contains("enable")){
        var get_data1 =parseInt (localStorage.getItem("firstdata"));
        var get_data2 =parseInt (get_result.textContent);
        var do_job =  get_data1 - get_data2;
        get_result.textContent = do_job;
    }
    if(f_btn.classList.contains("enable")){
        var get_data1 =parseInt (localStorage.getItem("firstdata"));
        var get_data2 =parseInt (get_result.textContent);
        var do_job =  get_data1 * get_data2;
        get_result.textContent = do_job;
    }
    if(a_btn.classList.contains("enable")){
        var get_data1 =parseInt (localStorage.getItem("firstdata"));
        var get_data2 =parseInt (get_result.textContent);
        var do_job =  get_data1 / get_data2;
        get_result.textContent = do_job;
    }
}
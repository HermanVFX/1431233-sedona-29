var open_form_btn = document.querySelector(".open-button");
var form = document.querySelector(".form");

var plus_par = document.querySelector(".plus1");
var minus_par = document.querySelector(".minus1");

var plus_chil = document.querySelector(".plus2");
var minus_chil = document.querySelector(".minus2");

var par = form.querySelector(".name1_in");
var chil = form.querySelector(".name2_in");

var data_1 = form.querySelector(".data1_in");
var data_2 = form.querySelector(".data2_in");

var find_btn = document.querySelector(".send-button");

find_btn.addEventListener("click", function(evt) {
    if (!data_1.value || !data_2.value || !par.value || !chil.value) {
        evt.preventDefault();
        form.classList.remove("form-error");
        form.offsetWidth = form.offsetWidth;
        form.classList.add("form-error");
    } 
  });

open_form_btn.addEventListener("click", function(evt) {
    form.classList.remove("form-visible");
    form.classList.remove("form-error");
    form.classList.toggle("form-non-visible");
});



minus_par.addEventListener("click",function(evt) {
    if (par.value > 0 && par.value <= 9){
        par.value --;
    }
});

plus_par.addEventListener("click",function(evt) {
    if (par.value >= 0 && par.value < 9){
        par.value ++;
    }
});

minus_chil.addEventListener("click",function(evt) {
    if (chil.value > 0 && chil.value <= 9){
        chil.value --;
    }
});

plus_chil.addEventListener("click",function(evt) {
    if (chil.value >= 0 && chil.value < 9){
        chil.value ++;
    }
});




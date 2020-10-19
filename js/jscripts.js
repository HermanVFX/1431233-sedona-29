var open_form_btn = document.querySelector(".open-button");
var form = document.querySelector(".form");

var plus_par = document.querySelector(".plus1");
var minus_par = document.querySelector(".minus1");

var plus_chil = document.querySelector(".plus2");
var minus_chil = document.querySelector(".minus2");

var par = form.querySelector(".name1_in");
var chil = form.querySelector(".name2_in");

open_form_btn.addEventListener("click", function(evt) {
    form.classList.remove("form-visible");
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
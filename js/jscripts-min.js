var open_form_btn=document.querySelector(".open-button"),form=document.querySelector(".form"),plus_par=document.querySelector(".plus1"),minus_par=document.querySelector(".minus1"),plus_chil=document.querySelector(".plus2"),minus_chil=document.querySelector(".minus2"),par=form.querySelector(".name1_in"),chil=form.querySelector(".name2_in"),data_1=form.querySelector(".data1_in"),data_2=form.querySelector(".data2_in"),find_btn=document.querySelector(".send-button");find_btn.addEventListener("click",function(e){data_1.value&&data_2.value&&par.value&&chil.value||(e.preventDefault(),form.classList.remove("form-error"),form.offsetWidth=form.offsetWidth,form.classList.add("form-error"))}),open_form_btn.addEventListener("click",function(e){form.classList.remove("form-visible"),form.classList.remove("form-error"),form.classList.toggle("form-non-visible")}),minus_par.addEventListener("click",function(e){par.value>0&&par.value<=9&&par.value--}),plus_par.addEventListener("click",function(e){par.value>=0&&par.value<9&&par.value++}),minus_chil.addEventListener("click",function(e){chil.value>0&&chil.value<=9&&chil.value--}),plus_chil.addEventListener("click",function(e){chil.value>=0&&chil.value<9&&chil.value++});
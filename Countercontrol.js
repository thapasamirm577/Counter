const btnLwr = document.getElementById("btn-lwr");
const btnAdd = document.getElementById("btn-add");
const counting = document.getElementById("counting");
let currentValue = 0;

btnLwr.addEventListener("click", function(){
    currentValue -= 1;
    counting.innerHTML = currentValue;
    if(currentValue < 0){
        counting.classList.remove("showgreen");
        counting.classList.add("showred");
    }else{
        counting.classList.add("showgreen");
        counting.classList.remove("showred");
    }
})

btnAdd.addEventListener("click", function(){
    currentValue += 1;
    counting.innerHTML = currentValue;
    if(currentValue >= 0){
        counting.classList.add("showgreen");
    }else{
        counting.classList.remove("showgreen");
        counting.classList.add("showred");
    }
})

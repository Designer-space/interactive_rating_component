const front = document.querySelector('.front');
const back = document.querySelector('.back');
const rating = back.querySelector('.ratings');
const submitBtn = document.getElementById("submitBtn");
const radio = document.querySelectorAll('[type="radio"]');

radio.forEach(e =>{
    e.addEventListener('click', ()=>{
        rating.textContent = e.value;
    })
})

submitBtn.addEventListener('click', ()=>{
    if(rating.textContent === ""){
        alert("select rating before submitting");
    } else{
        front.classList.add("hidden");
        back.classList.remove("hidden");
    }
})
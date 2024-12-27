const signupButton = document.getElementById('signup');
const signinButton = document.getElementById('signin');
const main = document.getElementById('main');

signupButton.addEventListener('click', () => {
    main.classList.add("right-panel-active");
});

signinButton.addEventListener('click', () => {
    main.classList.remove("right-panel-active");
});



// console.log(email)

document.querySelector('.btn-signin').addEventListener('click',()=>{
    let email=document.querySelector('.email_class').value
    let password=document.querySelector('.pass_class').value
    if(email=rhitam && password=abcd){
        location.href="./homepage.html"
    }
})
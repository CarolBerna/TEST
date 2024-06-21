document.addEventListener('DOMContentLoaded', function (){
const menubtn = document.getElementById('mobile);
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');


menubtn.addEventListener('click', function (){
  
   nav.classList.toggle('active');
   menubtn.classList.toggle('active');

// Add event listener for opening menu
if (menubtn.classList.contains('active')) {
    bar.classList.remove('fa-bars');
    bar.classList.add('fa-times');
    });
} 
else{ 
  
   bar.classList.remove('fa-times');
   bar.classList.add('fa-bars');
}
});


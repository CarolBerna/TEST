document.addEventListener('DOMContentLoaded', function (){
<<<<<<< HEAD
    const menubtn = document.getElementById('mobile');
    const bar = document.getElementById('bar');
    const close = document.getElementById('close');
    const nav = document.getElementById('navbar');
    
    
    menubtn.addEventListener('click', function (){
        nav.classList.toggle('Active');
        menubtn.classList.toggle('Active');
     
     // Add event listener for opening menu
     if (menubtn.classList.contains('Active')) {
         bar.classList.remove('fa-bars');
         bar.classList.add('fa-times');
         }
        else{ 
        bar.classList.remove('fa-times');
        bar.classList.add('fa-bars');
     }
    });

=======
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
>>>>>>> eaba014561c3d1abe314647bae0f1c29decba33b

});
    
    


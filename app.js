    const menu = document.querySelector('#mobile-menu');
    const menuLinks = document.querySelector('.navbar__menu');

    





    const mobileMenu = () => {

        menu.classList.toggle('is-active');
        menuLinks.classList.toggle('active');
    }

    menu.addEventListener('click',mobileMenu);

    

    var imgs = document.querySelectorAll('.slider img');
    

    var dots = document.querySelectorAll('.dot');
    var currentImg = 0; // index of the first image 
    const interval = 3000; // duration(speed) of the slide



    function changeSlide(n) {
    for (var i = 0; i < imgs.length; i++) { // reset
      imgs[i].style.opacity = 0;
      dots[i].className = dots[i].className.replace(' active', '');
    }
  
    currentImg = n;
  
    imgs[currentImg].style.opacity = 1;
    dots[currentImg].className += ' active';
  }
/*
  const form =  document.querySelector('form');

  function sendEmail(){
    Email.send({
        Host:"smtp.gmail.com",
        Username:"username",
        Password:"password",
        To:'admin@zhujia.com.au',
        From:document.getElementById("email").value,
        Subject:"New contact Form",
        Body:"Name:"+document.getElementById("name").value +
        "<br>Email:"+document.getElementById("email").value +
        "<br>Mobile:"+document.getElementById("phone").value +
        "<br>Message:"+document.getElementById("message").value
    }).then 
    message=>alert("Message Sent");
  }
*/

  
  
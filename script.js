const  menuicon = document.querySelector(".menu-icon");
const  navbar = document.querySelector(".navbar");
const  overplay = document.querySelector(".overplayr");


menuicon.addEventListener("click", ()=>{
     menuicon.classList.toggle("active-menuicon");
     navbar.classList.toggle("active-navbar");
     overplay.classList.toggle("active-overplay");
})

function changeImage(){
     const images = [
          'url("Image\ 1\ .jpg")',
          'url("Image\ 2\ .jpg")',
          'url("Image\ 3\ .jpg")',
          'url("Image\ 4\ .jpg")',
          'url("Image\ 5\ .jpg")',
          'url("Image\ 6\ .jpg")',
          'url("Image\ 7\ .jpg")',
          'url("Image\ 8\ .jpg")',

          
          

     ]
     const homeimagelist = document.querySelectorAll(".image-container");
     homeimagelist.forEach(homeImage =>{
     const changebging = images[Math.floor(Math.random() * images.length )];
     homeImage.Style.backgroundimage = changebging;


     })
}
setInterval(changeImage, 2100);

const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove" , (e)=>{
     cursor.style.left= e.pageX + 'px' ;
     cursor.style.top= e.pageY + 'px' ;
})


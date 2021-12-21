/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/


/**
 * Define Global Variables
 * 
*/
const fragment = document.createDocumentFragment();
const allSections=document.querySelectorAll('section');
const navbarList=document.getElementById('navbar__list');
const toTopBtn = document.getElementById("toTop");
let navbarChildList='';
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// Build menu 
// build the nav
//To get a data attribute through the dataset object ref :https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes
allSections.forEach(function(sec){
    //create list element && anchor Element 
    const listElement=document.createElement('li');
    listElement.classList.add(sec.id);
    const anchorElement=document.createElement('a');
    //add all attribute to anchor and inner text by inner html or text content property 
    anchorElement.innerHTML=sec.dataset.nav;
    anchorElement.href=`#${sec.id}`;
    anchorElement.classList.add('menu__link');
    // add smooth scrolling to section // Scroll to anchor ID using scrollTO event
    anchorElement.addEventListener('click',(e)=>{
        e.preventDefault();
        sec.scrollIntoView({behavior: "smooth"})
       
    });
    listElement.appendChild(anchorElement);  
    // add list to fragment 
    fragment.appendChild(listElement);
 });
 //append all list in nav  can use appendChild also
    navbarList.append(fragment);


// Add class 'active' to section when near top of viewport
window.addEventListener("scroll", () => {
    const listElement=document.querySelectorAll('nav ul li');
   // let elements = document.querySelectorAll('li, a');
   let current='';
allSections.forEach(function(sec){
    //get element position relative to viewport ref :https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect   
    let rect= sec.getBoundingClientRect();   
    if( rect.top <= 150 &&(  rect.bottom >= 150))
    {
        sec.classList.add('your-active-class');
        current=sec.getAttribute('id');        
    }
    else
    {
        sec.classList.remove('your-active-class');        

    }
   // add class menu__link__active to li items
    listElement.forEach((li) => {
        li.classList.remove("menu__link__active");
        if (li.classList.contains(current)) {
          li.classList.add("menu__link__active");
        }
      });   

});
});

//scroll to top by btn click and appear btn when scroll from top 45 pixels
window.addEventListener("scroll", () => {
    if (document.body.scrollTop > 45 || document.documentElement.scrollTop > 45) {
        toTopBtn.style.display = "block";
      } else {
        toTopBtn.style.display = "none";
      }
});
toTopBtn.addEventListener('click', ()=>{
    window.scrollTo({top: 0, behavior: 'smooth'});  //Scroll Smooth
  });


/**
 * End Main Functions
 * Begin Events
 * 
*/


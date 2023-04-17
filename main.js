/*page content*/

const homePageContent =`
<h1> <Welcome  </h1>
<p id="my-id">Lorem ipsum dolor sit amet consectetur adipisicing elit. At, nisi autem suscipit, earum sed saepe nam, architecto nihil laudantium illo quasi. Ex cumque natus ullam saepe omnis voluptatum sed ipsum!</p>
     <p class="my-class"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque ab enim, laborum, veritatis illum fugit doloremque deleniti eligendi nemo ipsa unde vero molestias sequi et fugiat maxime quam maiores. Esse?</p>
     <p class="my-second">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit minima asperiores harum maiores, adipisci vitae hic deleniti accusamus repellendus, est natus. Perspiciatis, ipsum deserunt non fuga odit magnam blanditiis eius.</p>`;
    
    const aboutPageContent=`
    <h1> About me </h1>
    <p> here you can write about me </p>
    `;

     
    const hobbiesPageContent=`
    <h1> My Hobbies </h1>
    <p> What i Like</p>
    `;
 
    const contactPageContent=`
    <h1> Contact</h1>
    <p> here you can contact me </p>
    `;
   
   /*functions*/
   //Grab elements

   const mainContent=document.querySelector("#main-content");
   const navLinks=document.querySelectorAll("nav a");

    //Add event listeners to all elements in navlinks
   //Get all nav links and all event listeners to them
   navLinks.forEach ( link => {
    link.addEventListener("click", event => {
    event.preventDefault(); //presvent page reload
    const page = link.dataset.page;//get the string from data page attribute
    setActiveNavLink(link);//move the "active" class
    updatePageContent(page);//render new page  
        });
    });
//way 1
   //Set the active class on the page we are currently on
/*function setActiveNavLink(link)

{
    for (nav of navLinks)
    {
        nav.classList.remove("active");

    }
    link.classList.add("active");
}*/

//way 2
   //Set the active class on the page we are currently on
  function setActiveNavLink(link)
   {
   navLinks.forEach(link => link.classList.remove("active"));
      link.classList.add("active");
   }

  //update page content
  function updatePageContent(page)
  {
    switch(page)
    {
     case "home" : 
        mainContent.innerHTML = homePageContent;
        break; 
     case "about" :
        mainContent.innerHTML = aboutPageContent;
        break;
     case "Hobbies":
        mainContent.innerHTML = hobbiesPageContent;
        break;
     case "Contacts":
        mainContent.innerHTML = contactPageContent;
        break;
    default:
         mainContent.innerHTML=homePageContent;
         break;
    }
  }
    //since we have an empty div and need some default content
    //we run this function once withoout a property to get the default case of the switch
  updatePageContent();
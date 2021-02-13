const tabNumber = 1;

console.log("index")



const homepage = (() => {

    //Tagging content div
    const contentDiv = document.querySelector("#content")

    //Creating structural elements
    const header = document.createElement("header");
    const headerH1 = document.createElement("h1");
    const nav = document.createElement("nav");
    const homeLink = document.createElement("li");
    const menuLink = document.createElement("li");
    const contactLink = document.createElement("li");
    const section = document.createElement("section");
    const sectionH1 = document.createElement("h1");
    const sectionP = document.createElement("p");
    const footer = document.createElement("footer");
    const footerP = document.createElement("p");

    //Creating content

    const headerText = document.createTextNode("Awesome Restaurant");
    const homeLinkText = document.createTextNode("Home")
    const menuLinkText = document.createTextNode("Menu")
    const contactLinkText = document.createTextNode("Contact");
    const sectionH1Text = document.createTextNode("About Us");
    const sectionPText = document.createTextNode("Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quos aliquid nisi quis doloremque distinctio porro officiis, quo dolor, fugiat culpa vel quia sint facere, eligendi rerum tempore quae molestiae voluptatem molestias voluptatum cumque libero. Debitis ipsa est quo recusandae laboriosam autem? Possimus itaque iste vero consequatur nostrum odit dolor!")

    const footerPText = document.createTextNode("Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam, magnam.");

    //Adding text content and classes to elements
    headerH1.appendChild(headerText)
    header.appendChild(headerH1);

    homeLink.appendChild(homeLinkText);
    homeLink.classList.add("nav-link")
    menuLink.appendChild(menuLinkText);
    menuLink.classList.add("nav-link");
    contactLink.appendChild(contactLinkText);
    contactLink.classList.add("nav-link");


    nav.appendChild(homeLink)
    nav.appendChild(menuLink)
    nav.appendChild(contactLink)

    sectionH1.appendChild(sectionH1Text)
    sectionP.appendChild(sectionPText);

    section.appendChild(sectionH1)
    section.appendChild(sectionP);
    section.classList.add("about");
    section.classList.add("main");


    footerP.appendChild(footerPText);
    footer.appendChild(footerP);

    contentDiv.appendChild(header)
    contentDiv.appendChild(nav)
    contentDiv.appendChild(section)
    contentDiv.appendChild(footer)

    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach(link => link.addEventListener("click", tabChangeFunction))

function tabChangeFunction (){ 
    console.log("inside change tab function")
    }

    console.log(navLinks)


    return {contentDiv}
})()

export {homepage, tabNumber}

//Continue work on tab change function
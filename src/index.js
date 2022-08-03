import { createHome } from "./home.js";
import { createMenu } from "./menu.js";
import { createContact } from "./contact.js";

//this is just another way to do the tab-switching logic besides event listeners
// window.onload = function() {
//     createHome; //how do we get this to work?
//     const menuTab = document.getElementById('menutab');
//     menuTab.onclick = createMenu;
//     const contactTab = document.getElementById('contacttab');
//     contactTab.onclick = createContact;
//     const homeTab = document.getElementById('hometab');
//     homeTab.onclick = createHome;
// }

//event listeners for each tab
const homeTab = document.getElementById('hometab');
const contactTab = document.getElementById('contacttab');
const menuTab = document.getElementById('menutab');
createHome(); //running this w/ function invocation is necessary for default behavior on page-load
homeTab.addEventListener('click', createHome); //run the function itself instead of placing in anon
contactTab.addEventListener('click', createContact);
menuTab.addEventListener('click', createMenu);
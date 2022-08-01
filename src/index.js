//import tab modules up here
import { createHome as home } from "./home.js";
import { createMenu as menu } from "./menu.js";
import { createContact as contact } from "./contact.js"
//import './home';
const homeTab = document.getElementById('hometab');
const contactTab = document.getElementById('contacttab');
const menuTab = document.getElementById('menutab');
const content = document.getElementById('content');

// function createPage() {
//     home;
// }
//createPage();
//should have event listeners for each tab that wipes out the current contents

homeTab.addEventListener('click', () => {
    content.innerHTML = '';
    home;
});
contactTab.addEventListener('click', () => {
    content.innerHTML = '';
    contact;
});
menuTab.addEventListener('click', () => {
    content.innerHTML = '';
    menu;
});
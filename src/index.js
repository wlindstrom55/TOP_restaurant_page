//import tab modules up here
import { createHome as home } from "./home";
import { createMenu as menu } from "./menu";
//import './home';
const homeTab = document.getElementById('hometab');
const contactTab = document.getElementById('contacttab');
const menuTab = document.getElementById('menuTab');
//const content = document.getElementById('content');

//tab-switching logic will go here in index.js as well.
function createPage() {
    //content.append(home);
    home;
    menu;
}
createPage();
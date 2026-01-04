import "./styles.css";
import { about } from "./about";
import { home } from "./home";
import { menu } from "./menu";
const container=document.querySelector("#content");
const homeButton=document.querySelector("#home");
const menuButton=document.querySelector("#menu");
const aboutButton=document.querySelector("#about");
function add(element){
    while(container.childElementCount){
        container.removeChild(container.firstChild);
    }
    container.appendChild(element);
}
homeButton.addEventListener("click",(event)=>{
    add(home);
});
menuButton.addEventListener("click",(event)=>{
    add(menu);
});
aboutButton.addEventListener("click",(event)=>{
    add(about);
});
const about=document.createElement("div");
const heading=document.createElement("h1");
heading.textContent="About";
const para=document.createElement("p");
para.textContent="This page is about restaurants.";
about.appendChild(heading);
about.appendChild(para);
export {about};
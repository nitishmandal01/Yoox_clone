import { navbar } from "./components/navbar.js"; 

let navbar_div=document.getElementById("navbar");
navbar_div.innerHTML=navbar();


import { footer } from "./components/footer.js";

let footer_part = document.getElementById("footer-part")
footer_part.innerHTML  = footer()
console.log("hi")

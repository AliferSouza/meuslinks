
import buttonVoltar from "../component/buttonVoltar.js"
import buttonLink from"../component/buttonLink.js"

import compartilhar from"../component/compartilhar.js"

import { pegarUrlData } from "../lib/index.js"


export default function miniSite() {

  const data = pegarUrlData()
    




const linkHTML = document.querySelector("head")
const title = document.querySelector("title")
linkHTML.innerHTML += `<link rel="icon" type="image/svg+xml" href="${data.a.LogoImput}" />`
title.innerHTML = `${data.a.Nome}`




    return `

    
    <div class="componete-link"> 

   
    ${compartilhar(data.a)}
   
    <div class="container-link">

    ${localStorage.hasOwnProperty("dono") ? `${buttonVoltar()}`  : ''}         
    <img src="${data.a.LogoImput}" class="logo"  loading=lazy  class="mini-site-logo">          
    </div> 
     <span>${data.a.Nome}</span>

    <h1 style="color:" > </h1>
    <div class="container_Links">
    <h2>Seja Bem-vindo! </h2>
    <h2>Visite minhas paginas </h2>
       
   ${buttonLink(data.b)}

   <div>      
   <a class="link-minisite" href="https://alifersouza.github.io/links" target="_blank">Crie o seu mini site</a>
   <a class="link-minisite" href="https://bitly.com/" target="_blank"> Ecurtador de link</a>
   </div>

    </div>
 
    <div>
`;




}
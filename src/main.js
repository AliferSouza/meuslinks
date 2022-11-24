import home from"./page/home.js"
import gerarLinks from"./page/gerarLinks.js"
import minisite from "./page/minisite.js"
import areaAdm from "./page/areaAdm.js"
import {router, navigateTo}  from"./lib/index.js"

const URL = location.href.includes("?") 




//Auth
if (URL) {    
     router({minisite})  
} else if(localStorage.hasOwnProperty("dono")) { 
     navigateTo("/gerarLinks")
     router({gerarLinks, minisite, areaAdm})
} else{    
     navigateTo("/home")
     router({home})
}







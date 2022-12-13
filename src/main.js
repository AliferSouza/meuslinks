import home from"./page/home.js"
import gerarLinks from"./page/gerarLinks.js"
import minisite from "./page/minisite.js"
import areaAdm from "./page/areaAdm.js"
import {Router}  from"./lib/index.js"

const URL = location.href.includes("?") 

//Router fluxo
if (URL) {    
     Router({minisite})  
} else if(localStorage.hasOwnProperty("dono")) { 
     Router({gerarLinks})
} else{    
     Router({home})
}







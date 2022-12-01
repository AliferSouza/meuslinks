import buttonVoltar from "../component/buttonVoltar.js"
import { Select, addBanco, Router } from "../lib/index.js"
import select from "../lib/src/Select.js"
import gerarLinks from "./gerarLinks.js"

import btnDelite from "../component/btnDelite.js"

export default function areaAdm(prop) {
    const b = JSON.parse(localStorage.getItem("link"))
    const a = JSON.parse(localStorage.getItem("dono"))

    window.restaurar = () => {
        const pegarValor = select(".restaurar").value
        const objetoData = JSON.parse(pegarValor);
        addBanco("dono", objetoData.a)
        addBanco("link", objetoData.b)

        Router({ gerarLinks })

    }
   


    if (b == null) {

        return `
         ${buttonVoltar("#link")}            
            <h1 class="text-backup"> Delete os links e BACKUP</h1>
            <input class="restaurar" placeholder="Dados de backup"> 
            <button onclick="restaurar()">Restaurar<button> 
          
           `

    } else {
       
        return`    
                ${buttonVoltar(a)}
                  
                 <h1 class="text-backup"> Delete os links e BACKUP</h1>
                 ${btnDelite(b)}
                  

              

    `
}


}
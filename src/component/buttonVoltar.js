import home  from "../page/home.js"
import { Router, navigateTo } from "../lib/index.js"
export default function buttonVoltar(dadosUrl){

    window.routertMiniSite = () => { 
           navigateTo("/")
           Router({home})
    }

    return`
    <button style="color: branco" onclick="routertMiniSite()" class="navegarDeVoltaButton"><</button>
    `
  
}

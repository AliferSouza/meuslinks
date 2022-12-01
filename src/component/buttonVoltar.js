import gerarLinks  from "../page/gerarLinks.js"
import { Router, navigateTo } from "../lib/index.js"
export default function buttonVoltar(dadosUrl){

    window.routertMiniSite = () => { 
           navigateTo("/")
           Router({gerarLinks})
    }

    return`
    <button style="color: branco" onclick="routertMiniSite()" class="navegarDeVoltaButton"><</button>
    `
  
}
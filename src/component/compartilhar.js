import { compartilharURL } from "../lib/index.js"


export default function compartilhar(props){
    compartilharURL("LINK", "Compartilhe o link", window.location.href )
    return`

    <button onclick="compartilhar()" class="compartilhar">compartilhar➤</button>
 
    `
  
}
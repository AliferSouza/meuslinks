import { apiGerar } from "../apiQueryString/api.js"
import addBanco from "../lib/src/addBancoMiasIntens.js"
import minisite from "../page/minisite.js"
import areaadm from "../page/areaAdm.js"
import { Select, navigateTo, router } from "../lib/index.js"
import select from "../lib/src/Select.js"

export default function gerarLinks() {
    const a = JSON.parse(localStorage.getItem("dono"))
    const data = []    

    window.pegar = (e) => {          
     if(e.id ==="facebook"){ 
        e.style.opacity = "20%"
        select("#instagram").style.opacity = "100%"
        select("#whatsapp").style.opacity = "100%"
        select("#youtube").style.opacity = "100%"
     }
     if(e.id ==="instagram"){
        e.style.opacity = "20%"
        select("#facebook").style.opacity = "100%"
        select("#whatsapp").style.opacity = "100%"
        select("#youtube").style.opacity = "100%"
     }
     if(e.id ==="whatsapp"){
        e.style.opacity = "20%"
        select("#facebook").style.opacity = "100%"
        select("#instagram").style.opacity = "100%"
        select("#youtube").style.opacity = "100%"
     }
     if(e.id ==="youtube"){
        e.style.opacity = "20%"
        select("#facebook").style.opacity = "100%"
        select("#instagram").style.opacity = "100%"
        select("#whatsapp").style.opacity = "100%"
     }
     if(e.id ==="linkedin"){
        e.style.opacity = "20%"
        select("#facebook").style.opacity = "100%"
        select("#instagram").style.opacity = "100%"
        select("#whatsapp").style.opacity = "100%"     
        select("#youtube").style.opacity = "100%"
        select("#site").style.opacity = "100%"
     }
     if(e.id ==="site"){
        e.style.opacity = "20%"
        select("#facebook").style.opacity = "100%"
        select("#instagram").style.opacity = "100%"
        select("#whatsapp").style.opacity = "100%"     
        select("#youtube").style.opacity = "100%"
        select("#linkedin").style.opacity = "100%"
     }

    
        const pegarData = {
            ICONE: e.src,
            NOME_ICONE: e.id
        }
        data.push(pegarData)   
   
    }

    window.salvarLink = () => {
        console.log(data)
        const url = Select(".url").value
        const nomeBotao = Select(".botaonome").value      
        const colorButtons = Select(".input-color").value
        const dataIndexFinal = data[data.length - 1]  
        
        

        const valores = {
            URL: url,
            NOME_BOTAO: nomeBotao,            
            ...dataIndexFinal,
            COLOR_BUTTONS: colorButtons
        }

        console.log(a)

     

        addBanco("link", valores)
        
        navigateTo("#gerarLinks")
        router({ gerarLinks })
        window.onload = e =>  select(".buttonSite").innerHTML  = `<input type="button" value="miniSite" onclick="link()">` 

    }

    window.editar = () => {  
        navigateTo("#areaadm")
        router({ areaadm })

    }



    window.link = () => {
        const dados = apiGerar("dono", "link")
        navigateTo("#minisite" + dados)
        router({ minisite })

    }







    return `
    <div class="container_gerarlink">
    <div class="container" style="background:${a.COR}">
     <span class="title-link">Crie seus links</span>

     <form class="form-link">

         <input type="text" class="url input-link" placeholder="Digite sua URL de perfil" required>
         <input type="text" class="botaonome input-link" placeholder="Nome do botão" required>

      

             <fieldset class="radio-image escolhaIcone">
                 <label for="A">
                     <img src=".././img/facebook.png" id="facebook" onclick="pegar(this)"  name="group" class="escolha"  alt="facebook" height="45px">
                 </label>

                 <label for="B">
                     <img src=".././img/instagram.png" id="instagram" onclick="pegar(this)"  name="group" class="escolha" alt="instagram" height="45px">
                 </label>

                 <label for="C">
                     <img src=".././img/whatsapp.png" id="whatsapp" onclick="pegar(this)"  name="group"  class="escolha" alt="whatsapp" height="45px">
                 </label>
                 <label for="D">
                     <img src="../img/youtube.png" id="youtube" onclick="pegar(this)"  name="group" class="escolha" alt="youtube" height="45px">
                 </label>    
                 <label for="E">
                     <img src="../img/linkedin.png" id="linkedin" onclick="pegar(this)"  name="group" class="escolha" alt="youtube" height="45px">
                 </label>    
                 <label for="E">
                     <img src="../img/site.png" id="site" onclick="pegar(this)"  name="group" class="escolha" alt="youtube" height="45px">
                 </label>           
             </fieldset>


             <div class="color-input">
                <span>Escolha a cor dos botões</span>
                <input type="color" class="input-color" required>
             </div>


      

         <button class="button-link" style=" background:${a.COR}" onclick="salvarLink()">Salvar</button>

         ${localStorage.hasOwnProperty("link") ?
          `
          <div class="container-button-link-minisite">
                <button class="button-link-minisite"  style=" background:${a.COR}"  onclick="link()"> MiniSite </button>
                <button class="button-link-minisite"  style=" background:${a.COR}"  onclick="editar()">Enditar site</button>
                <button class="button-link-minisite"  style=" background:${a.COR}"  onclick="editar()">Enditar links</button>
         </div>
         `
           : `</br></br></br>`}
     
</form>

 </div>
</div>


    `

} 

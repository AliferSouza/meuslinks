import { addBanco, Router, Select, navigateTo } from "../lib/index.js"
import gerarLinks from "./gerarLinks.js"
import areaAdm from "./areaAdm.js"


export default function home() {
    const data = []

    window.salvarLoja = async (e) => {
        const NOME = Select(".input-name").value
        const LOGO = Select("[data-logo]").src
        const COR = Select(".input-color").value
        const dataIndexFinal = data[data.length - 1]

      

        if (!NOME || !LOGO || !COR || !dataIndexFinal) {
            alert("Todos os campos devem ser preenchidos")

        } else {
            const miniSite = {
                NOME,
                LOGO,
                COR,
                BANNER: dataIndexFinal

            }
            addBanco("dono", miniSite)        
            Router({gerarLinks})
     
        }
    }

  


    window.pegar = async (e) => {

       
      const um =  Select("#um")
      const dois =  Select("#dois")
      const tres =  Select("#tres")
      const quatro =  Select("#quatro")
      const cinco =  Select("#cinco")
      const seis =  Select("#seis")
        
        if(e.id === "um"){ 
                
             e.style.opacity = "20%"         
             dois.style.opacity = "100%" 
             tres.style.opacity = "100%" 
             quatro.style.opacity = "100%" 
             cinco.style.opacity = "100%" 
             seis.style.opacity = "100%" 
            }
           
        if(e.id === "dois"){ 
            e.style.opacity = "20%"         
            um.style.opacity = "100%" 
            tres.style.opacity = "100%" 
            quatro.style.opacity = "100%" 
            cinco.style.opacity = "100%" 
            seis.style.opacity = "100%" 
              }
        if(e.id === "tres"){ 
            e.style.opacity = "20%"         
            dois.style.opacity = "100%" 
            um.style.opacity = "100%" 
            quatro.style.opacity = "100%" 
            cinco.style.opacity = "100%" 
            seis.style.opacity = "100%" 
           
         }
        if(e.id === "quatro"){ 
            e.style.opacity = "20%"         
            dois.style.opacity = "100%" 
            tres.style.opacity = "100%" 
            um.style.opacity = "100%" 
            cinco.style.opacity = "100%" 
            seis.style.opacity = "100%" 
             
        }
        if(e.id === "cinco"){ 
            e.style.opacity = "20%"         
            dois.style.opacity = "100%" 
            tres.style.opacity = "100%" 
            um.style.opacity = "100%" 
            quatro.style.opacity = "100%" 
            seis.style.opacity = "100%"  
        }
        if(e.id === "seis"){ 
            e.style.opacity = "20%"         
            dois.style.opacity = "100%" 
            tres.style.opacity = "100%" 
            um.style.opacity = "100%" 
            cinco.style.opacity = "100%" 
            quatro.style.opacity = "100%" 
          }
     
        

        data.push(e.src)

    }

    window.backup = () => {        
          Router({areaAdm}) 
}

    return `

        <div class="container">
      <span class="title">Crie seu mini MINI-SITE</span>
   
      <div class="form" id="formulariohome">

          <input type="text" class="input-name input" placeholder="Digite o seu nome" required>

                     
              <input type="text" onkeyup="document.querySelector('[data-logo]').src = this.value" data-logo-input  class="input-name input" placeholder="URL logo" required>
              <img style="border-radius: 15px; border: 2px solid #3498db " data-logo width="100">
             
      
          <h4> Escolha o Banner</h4>
          <fieldset class="radio-image escolhaIcone">
              <label for="A">
                  <img src="../banner/1.jpg" id="um" onclick="pegar(this)"  class="escolhaa"
                      height="45px">
              </label>

              <label for="B">
                  <img src="../banner/2.jpg" id="dois" onclick="pegar(this)"  class="escolhaa"
                      height="45px">
              </label>

              <label for="C">
                  <img src="../banner/3.jpg" id="tres" onclick="pegar(this)" class="escolhaa"
                      height="45px">
              </label>
              <label for="D">
                  <img src="../banner/4.jpg" id="quatro" onclick="pegar(this)"  class="escolhaa"
                      height="45px">
              </label>
              <label for="E">
                  <img src="../banner/5.jpg" id="cinco" onclick="pegar(this)" class="escolhaa"
                      height="45px">
              </label>
              <label for="F">
                  <img src="../banner/6.jpg" id="seis" onclick="pegar(this)"  class="escolhaa"
                      height="45px">
              </label>

          </fieldset>

          <div class="color-input">
              <span>Escolha a cor do seu MINISITE</span>
              <input type="color" class="input-color" required>
          </div>

          <button type="button" class="button-home" onclick="salvarLoja(this)">Salvar<button>
        <button type="button" class="button-backup" onclick="backup()">RESTAURAR<button>

      </div>
  </div>
 

`

}

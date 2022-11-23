import {serverlessFuctions} from"../lib/index.js"



export default function teste(){

   window.teste = async (e) => {  
    const olamundo = await serverlessFuctions("../../serverFuctions/olamundo.json", "olamundo")
    const ola = await serverlessFuctions("../../serverFuctions/compSer.json", "compSer")
    olamundo()
    ola()

   }

   window.teste2 = async (e) => {  
    const dato = await  serverlessFuctions( "../../serverFuctions/ola.json", e)
    dato()
   }

    return`
    <button  value="olamundo" onclick="teste(value)">TESTE</button>
    <button  data-select value="ola" onclick="teste2(value)">TESTE2</button>
    <div style="background: #000; padding: 20px; position: relative; top: 10px; color: #fff" data-select-compo>
    <div>
    `
}
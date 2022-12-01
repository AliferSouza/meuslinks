


export default function Router(Pagina){ 
    const dataPaginaName = Object.keys(Pagina)[0]   
    console.log(dataPaginaName)           
   
    window.document.querySelector("#app").innerHTML =  Pagina[dataPaginaName]()

    
 }





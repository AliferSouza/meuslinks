
import navigateTo from"./navigateTo.js"
import Render from "./Render.js"

export default function Router(Paginas){  
       //const pathname = window.document.location.pathname.replace(/^.*\//g, '')     
       //const hash = window.location.hash.replace(/([?][A-z]*)([=]).*/, "")
      // const filterHash = hash.replace("#", "")
      // const valor =  Object.keys(Paginas)[0] 
      // console.log(Paginas)
       //console.log(pathname)
       const pathname = window.document.location.pathname.replace("/", '')    
       Paginas[pathname] ? Render(Paginas[pathname]) : Render(Paginas[valor])   


       
       window.document.addEventListener("DOMContentLoaded", () => {

           document.body.addEventListener("click", e => {

               if(e.target.matches("[ali-link]")){
                 e.preventDefault()
                 navigateTo(e.target.href)
                }
           })
       })

    
 }

     
 window.addEventListener("popstate", Router)



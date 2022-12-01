

export default function btnDelite(props) {
    let admlink = ""
    
    window.deletelink = (e) => {
        props.splice(e, 1)
        localStorage.setItem("link", JSON.stringify(props))
        e.innerHTML = "DELETADO"
    
    }

    props.forEach((element, key) => {   
            admlink += `    
            <div class="container-bottons">                 
                <button onclick="deletelink(this)" id="${key}" class="admLink" style="background:${element.COLOR_BUTTONS}; color: #ffffff">${element.NOME_BOTAO}</button>
                <h1  class="h1adm">&#x2715</h1>
           </div>
          
            `

        });

        return admlink
    }


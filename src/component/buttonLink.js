export default function Links(links) {
    const dados = links 

    
    let cardLink = "";
    dados.forEach((link) => {
   
        cardLink += `  
        <img class="icone-link-site"src="${link.ICONE}">   
        <a href="${link.URL}" class="link" style="background:${link.COLOR_BUTTONS}" target="_blank"> 
           <h1>${link.NOME_BOTAO  ? link.NOME_BOTAO : link.NOME_ICONE}</h1>   
       </a>      
     
          
     
        `;
    })
    return cardLink

}
import { serverlessComponet} from "../lib/index.js"

const data = await serverlessComponet("../../serverFuctions/compServelLink.json", "link")   

export default function pageCompSe(){


    
return  `
<div>${data}</div>
`




}
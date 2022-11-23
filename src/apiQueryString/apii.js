
async function getInfo(props) {
    let url = 'teste.json';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error){
        console.log(error)
    }
}
export default getInfo;
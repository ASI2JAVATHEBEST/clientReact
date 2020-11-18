async function requestHttp(method,url,body){
    return new Promise((resolve, reject)=>{
        try{
            
            var xml = new XMLHttpRequest()
            xml.onload = function(){
                resolve(this.responseText)
            }
            xml.open(method,url)
            xml.send(body)
        }catch(e){
            reject(e)
        }
    })
};



// async function requestHttp(method,url,body){
//     return await axios.get(url)
// };

module.exports = requestHttp
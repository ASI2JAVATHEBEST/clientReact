async function requestHttp(method,url,body){
    return new Promise((resolve, reject)=>{
        try{
            
            var xml = new XMLHttpRequest()
            xml.onload = function(){
                try{
                    resolve(JSON.parse(this.responseText))
                }catch(e){
                    resolve(this.responseText)
                }
            }
            xml.open(method,url)
            xml.send(JSON.stringify(body))
        }catch(e){
            reject(e)
        }
    })
};



// async function requestHttp(method,url,body){
//     return await axios.get(url)
// };

module.exports = requestHttp
async function requestHttp(method,url,body){
    return new Promise((resolve, reject)=>{
        try{
            if(url.split("/")[0] == "user"){
                url = "http://localhost:8084/"+url
            }
            if(url.split("/")[0] == "card"){
                url = "http://localhost:8082/"+url
            }
            if(url.split("/")[0] == "store"){
                url = "http://localhost:8083/"+url
            }
            console.log(url);
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
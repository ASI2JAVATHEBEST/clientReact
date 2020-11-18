async function requestHttp(method,url,body){
    return new Promise((resolve, reject)=>{
        try{
            if(url.split("/")[0] == "user"){
                url = "http://localhost:8084/"+url.substring(5)
            }
            if(url.split("/")[0] == "card"){
                url = "http://localhost:8082/"+url.substring(5)
            }
            if(url.split("/")[0] == "store"){
                url = "http://localhost:8083/"+url.substring(6)
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
			xml.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
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
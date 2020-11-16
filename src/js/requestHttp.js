async function requestHttp(method,url,body){
    return new Promise((resolve, reject)=>{
        try{

            if(url=="api/card/cards"){
                resolve([
                    {
                        name:"nom",
                        description:"description",
                        family:"famille",
                        affinity:"affinité",
                        energy:"Energie",
                        hp:"Vie",
                        defence:1,
                        attack:5,
                        price:30.0,
                    },
                    {
                        name:"nom2",
                        description:"description",
                        family:"famille",
                        affinity:"affinité",
                        energy:"Energie",
                        hp:"Vie",
                        defence:2,
                        attack:5,
                        price:30.0,
                    },
                    {
                        name:"nom3",
                        description:"description",
                        family:"famille",
                        affinity:"affinité",
                        energy:"Energie",
                        hp:"Vie",
                        defence:3,
                        attack:5,
                        price:30.0,
                    }
                    
                ])
                return 
            }


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
async function loadUser(idUser){
    var user = await requestHttp("GET","user/user/"+idUser)
    var cardsData = await Promise.all(user.cardList.map(cardID=>{
        return await requestHttp("GET","cards/card/"+cardID)
    }))
    return {id:user.id, name:user.login,money:user.account,cards:cardsData}
}
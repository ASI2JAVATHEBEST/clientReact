async function loadUser(idUser){
    var user = await requestHttp("GET","user/user/"+idUser)
    var cardsData = await Promise.all(await requestHttp("GET","user/cards_list/"+idUser).map(cardID=>{
        return await requestHttp("GET","cards/card/"+cardID)
    }))
    return {id:user.id, name:user.login,money:user.account,cards:cardsData}
}
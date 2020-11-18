import requestHttp from './requestHttp.js'

async function loadUser(idUser){
    var user = await requestHttp("GET","user/user/"+idUser)
    var cardsData = await Promise.all((await requestHttp("GET","card/cards_list/"+idUser)).map(async cardID=>{
        var cardData = await requestHttp("GET","card/card/"+cardID)
		cardData.cardReference = await requestHttp("GET", "card/cardReference/" + cardData.cardReferenceId)
		return cardData
    }))
    return {id:user.id, name:user.login,money:user.account,cards:cardsData}
}

export default loadUser
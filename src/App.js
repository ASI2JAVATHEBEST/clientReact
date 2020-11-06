import React, { Component } from 'react'
import BarreNavigation from './components/BarreNavigation.jsx'
import Home from './components/home.jsx'
import Store from './components/store.jsx'
import Login from './components/login.jsx'
import requestHttp from './js/requestHttp.js'

class App extends Component {
  state = {
    // state is initialized by a props
    user: {name:"Antoine",money:4000},
    // user: null,
    onglets: ["home","sell","buy","login"],
    ongletSelected :   "home",
    allCards: [],
    userCards: []
  }

  changeOnglet = (onglet) => {
    // this.setState allows us to update the state value
    if(!this.state.onglets.some(o=> o==onglet)){
      console.error("onglet inconnu");
      return 
    }
    this.setState({"ongletSelected": onglet})
    console.log(this.state.ongletSelected);
  }
  
  componentDidMount(){
    console.log("mounted");
    (async ()=>{
      this.state.allCards = await requestHttp("GET","api/card/cards")
      if(this.state.user){
        this.state.userCards = await requestHttp("GET","api/card/cards")
      }
    })()
  }

  render() {
    var ongletSelected = this.state.ongletSelected
    console.log("render",this.state.ongletSelected);
    var body
    switch(ongletSelected){
      case "buy":
        body = <Store store={ongletSelected} cards={this.state.allCards} username={this.state.user.name}></Store>
        break
      case "sell":
        body = <Store store={ongletSelected} cards={this.state.userCards} username={this.state.user.name}></Store>
        break
      case "home":
        body = <Home onClickOnglet={this.changeOnglet}></Home>
        break
      case "login":
        body = <Login store={ongletSelected}></Login>
        break
      default:
        body = (<div>404</div>)
    }
    return (
      <div className='App'>
        <BarreNavigation title={ongletSelected} user={this.state.user} ></BarreNavigation>
        {body}
      </div>
    )
  }
}
export default App
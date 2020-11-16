import React, { Component } from 'react'
import BarreNavigation from './components/BarreNavigation.jsx'
import Home from './components/home.jsx'
import Buy from './components/buy.jsx'
import Sell from './components/sell.jsx'
import Login from './components/login.jsx'
import requestHttp from './js/requestHttp.js'


import { connect } from 'react-redux'
import {updateUser} from "./actions"



class InternalApp extends Component {
  state = {
    // state is initialized by a props
    
    
    onglets: ["home","sell","buy","login"],
    ongletSelected :   "home",
    allCards: [],
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
      if(this.props.user){
        this.props.user.cards = await requestHttp("GET","api/card/cards")
      }
    })()
  }

  render() {
    var ongletSelected = this.state.ongletSelected
    console.log("render",this.state.ongletSelected);
    var body
    switch(ongletSelected){
      case "buy":
        body = <Buy store={ongletSelected} cards={this.state.allCards} username={this.props.user.name}></Buy>
        break
      case "sell":
        body = <Sell store={ongletSelected}></Sell>
        break
      case "home":
        body = <Home onClickOnglet={this.changeOnglet}></Home>
        break
      case "login":
        body = <Login ></Login>
        break
      default:
        body = (<div>404</div>)
    }
    return (
      
        
        <div className='App'>
          <BarreNavigation title={ongletSelected} onClickOnglet={this.changeOnglet}></BarreNavigation>
          {body}
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user.user,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    updateUser: (user) => {
      dispatch(updateUser(user))
    },
  }
}

const App = connect(mapStateToProps, mapDispatchToProps)(InternalApp)

export default App
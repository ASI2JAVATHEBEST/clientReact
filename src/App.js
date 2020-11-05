import React, { Component } from 'react'
import BarreNavigation from './components/BarreNavigation.jsx'
import Home from './components/home.jsx'
import Sell from './components/sell.jsx'

class App extends Component {
  state = {
    // state is initialized by a props
    user: {name:"Antoine",money:4000},
    onglets: ["home","sell"],
    ongletSelected :   "home"
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

  render() {
    console.log("render",this.state.ongletSelected);
    return (
      <div className='App'>
        <BarreNavigation title={this.state.ongletSelected} user={this.state.user} ></BarreNavigation>
        {this.state.ongletSelected=="sell" ? <Sell></Sell> : <Home onClickOnglet={this.changeOnglet}></Home>}
        {this.state.ongletSelected}
      </div>
    )
  }
}
export default App
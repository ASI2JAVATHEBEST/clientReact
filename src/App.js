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
      return 
    }
    this.state.onglet = onglet
  }

  render() {
    return (
      <div className='App'>
        <BarreNavigation title="HomePage" user={this.state.user} onClickOnglet={changeOnglet}></BarreNavigation>
        {this.state.ongletSelected=="sell" ? <Sell></Sell> : <Home></Home>}
      </div>
    )
  }
}
export default App
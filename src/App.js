import React, { Component } from 'react'
import BarreNavigation from './components/BarreNavigation.jsx'
import Home from './components/page/home.jsx'


class App extends Component {
  state = {
    // state is initialized by a props
    user: {name:"Antoine",money:4000},
  }

  handleChangeTitle = (e) => {
    // this.setState allows us to update the state value
    this.setState({ title: e.target.value })
  }

  render() {
    return (
      <div className='App'>
        <BarreNavigation title="HomePage" user={this.state.user}></BarreNavigation>
        <Home></Home>
      </div>
    )
  }
}
export default App
import React, { Component } from 'react'
import {Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import requestHttp from './../js/requestHttp.js'

class ButtonSell extends Component {
    state = {
        // state is initialized by a props
       
      }
      
      clickButton= async ()=>{
          try{
              await requestHttp("POST","store/sell/"+this.props.username+"/"+this.props.card)
          }catch(e){
              console.error(e);
          }
      }
      render() {
        return (
            <Button variant="danger" onClick={this.clickButton}>Sell</Button>
        )
    }
}

export default ButtonSell
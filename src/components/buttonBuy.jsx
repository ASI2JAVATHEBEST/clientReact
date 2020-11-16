import React, { Component } from 'react'
import {Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import requestHttp from './../js/requestHttp.js'

class ButtonBuy extends Component {
    state = {
     
      }
      
      clickButton= async ()=>{
        try{
            await requestHttp("POST","store/buy/"+this.props.username+"/"+this.props.card)
        }catch(e){
            console.error(e);
        }
    }
      render() {
        return (
            <Button variant="success" onClick={this.clickButton}>Buy</Button>
        )
    }
}

export default ButtonBuy
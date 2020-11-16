import React, { Component } from 'react'
import {Container, Row, Col, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import TableCards from "./TableCards.jsx"
import CardComponent from "./Card.jsx"
import requestHttp from './../js/requestHttp.js'

import { connect } from 'react-redux'
import {updateUser} from "./../actions"

class InternalSell extends Component {
   state = {
        selectedCardName:""
   }
    clickCard= (nameCard)=>{
        
        this.setState({selectedCardName : nameCard})
    }
    clickSellButton= async ()=>{
        try{
            var selectedCard = this.props.user.cards.find(c=> c.name == this.state.selectedCardName)
            await requestHttp("POST","store/sell/"+this.props.user.name+"/"+this.selectedCardName)
            
            //========TEST 
            this.props.user.money += selectedCard.price
            var idx = this.props.user.cards.findIndex(c=>c.name == this.state.selectedCardName)
            this.props.user.cards.splice(idx,1)
            this.props.updateUser(this.props.user)
        }catch(e){
            console.error(e);
        }
    }
      
      render() {
          var selectedCard = this.props.user.cards.find(c=> c.name == this.state.selectedCardName)
        return (
          <Container>
            <Row>
                <Col cols="8">
                    <TableCards cards={this.props.user.cards} clickCard={this.clickCard}></TableCards>
                </Col>
                <Col cols="4">
                  <CardComponent card={selectedCard}></CardComponent>
                  <Button variant="danger" onClick={this.clickSellButton}>Sell</Button>
                  
                </Col>
            </Row>
          </Container>
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
        console.log("updateUser",user);
      dispatch(updateUser(user))
    },
  }
}
  
  
const Sell = connect(mapStateToProps, mapDispatchToProps)(InternalSell)

export default Sell
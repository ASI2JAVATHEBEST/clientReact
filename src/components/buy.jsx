import React, { Component } from 'react'
import {Container, Row, Col, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import TableCards from "./TableCards.jsx"
import CardComponent from "./Card.jsx"
import requestHttp from './../js/requestHttp.js'

import { connect } from 'react-redux'
import {updateUser} from "../actions"

class InternalBuy extends Component {
    state = {
        // state is initialized by a props
		    selectedCardName:null
    }
    clickCard= (nameCard)=>{
      this.setState({selectedCardName : nameCard})
    }
    clickBuyButton= async ()=>{
      try{
          if (this.props.user.cards.some(c=>c.name == this.state.selectedCardName)){
            console.log("carte deja achetée");
            return
          }
          await requestHttp("POST","store/buy/"+this.props.user.username+"/"+this.state.selectedCardName)
          //========TEST 
          var selectedCard = this.props.cards.find(c => c.name == this.state.selectedCardName)
          this.props.user.money -= selectedCard.price
          this.props.user.cards.push(selectedCard)
          this.props.updateUser(this.props.user)
        
        }catch(e){
          console.error(e);
      }
    }
    render() {
		  var selectedCard = this.props.cards.find(c => c.name == this.state.selectedCardName)
      return (
        <Container>
          <Row>
              <Col cols="8">
                  <TableCards cards={this.props.cards} clickCard={this.clickCard}></TableCards>
              </Col>
              <Col cols="4">
                <CardComponent card={selectedCard}></CardComponent>

                <Button variant="success" onClick={this.clickBuyButton}>Buy</Button>
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
      dispatch(updateUser(user))
    },
  }
}

const Buy = connect(mapStateToProps, mapDispatchToProps)(InternalBuy)

export default Buy
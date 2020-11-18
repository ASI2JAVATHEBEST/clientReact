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
            await requestHttp("POST","store/sell/",{
              user_id: this.props.user.id,
              card_id: selectedCard.cardReference.id

            })
            var user = await requestHttp("GET","user/user/"+this.props.user.id)
            this.props.updateUser({id:user.id, name:user.login,money:user.account,cards:user.cardList})
            
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
      var res = updateUser(user)
      console.log("updateUser",res);
      dispatch(res)
    },
  }
}
  
  
const Sell = connect(mapStateToProps, mapDispatchToProps)(InternalSell)

export default Sell
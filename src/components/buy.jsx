import React, { Component } from 'react'
import {Container, Row, Col, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import TableCards from "./TableCards.jsx"
import CardComponent from "./Card.jsx"
import requestHttp from './../js/requestHttp.js'
import loadUser from './../js/loadUser.js'
import { connect } from 'react-redux'
import {updateUser} from "../actions"

class InternalBuy extends Component {
    state = {
        // state is initialized by a props
		    selectedCardName:null,
			allCards: []
    }
    clickCard= (idCard)=>{
      this.setState({selectedCardName : idCard})
    }
    clickBuyButton= async ()=>{
      try{
          var selectedCard = this.state.allCards.find(c=> c.id == this.state.selectedCardName)
          await requestHttp("POST","store/buy/",{
            user_id: this.props.user.id,
            card_id: selectedCard.id
          })
          this.props.updateUser(await loadUser(this.props.user.id))
		  this.componentDidMount()
        }catch(e){
          console.error(e);
      }
    }
    componentDidMount(){
	  console.log("mounted");
	  (async ()=>{
	    this.setState({ allCards: await Promise.all((await requestHttp("GET","card/cards_to_sell")).map(async cardID=>{
		  var cardData = await requestHttp("GET","card/card/"+cardID)
		  // cardData.cardReference = await requestHttp("GET", "card/cardReference/" + cardData.cardReferenceId)
		  return cardData
		})
		)})
	  })()
    }
    render() {
	  var selectedCard = this.state.allCards.find(c => c.id == this.state.selectedCardName)
      return (
        <Container>
          <Row>
              <Col cols="8">
                  <TableCards cards={this.state.allCards} clickCard={this.clickCard}></TableCards>
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
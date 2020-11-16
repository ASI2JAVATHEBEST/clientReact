import React, { Component } from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import TableCards from "./TableCards.jsx"
import CardComponent from "./Card.jsx"
import ButtonSell from "./buttonSell.jsx"
import ButtonBuy from "./buttonBuy.jsx"

class Store extends Component {
    state = {
        // state is initialized by a props
        username:"",
		selectedCardName:null
      }
      clickCard= (nameCard)=>{
		this.setState({selectedCardName : nameCard})
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

                  {this.props.store=="sell" ? <ButtonSell card={selectedCard?selectedCard.name:""} username={this.props.username}></ButtonSell> : <ButtonBuy card={selectedCard?selectedCard.name:""} username={this.props.username}></ButtonBuy>}
                </Col>
            </Row>
          </Container>
        )
    }
}

export default Store
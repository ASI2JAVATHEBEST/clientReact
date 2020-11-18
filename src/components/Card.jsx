import React, { Component } from 'react'
import {Card,ListGroup, ListGroupItem} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import RowCard from "./rowCard.jsx"

class CardComponent extends Component {
    
      
    render() {
        var card = this.props.card
        if(card){
            return (
                <Card>
                    <Card.Img variant="top" src={card.cardReference.imgUrl}/>
                    <Card.Body>
                        <Card.Title>{card.cardReference.name}</Card.Title>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>Family: {card.cardReference.family}{card.cardReference.description}</ListGroupItem>
                            <ListGroupItem>Affinity: {card.cardReference.affinity}</ListGroupItem>
                            <ListGroupItem>Energy: {card.energy}</ListGroupItem>
                            <ListGroupItem>HP: {card.hp}</ListGroupItem>
                            <ListGroupItem>Defence: {card.defence}</ListGroupItem>
                            <ListGroupItem>Attack: {card.hp}</ListGroupItem>
                            <ListGroupItem>Price: {card.price}</ListGroupItem>
                        </ListGroup>
                            
                    </Card.Body>
                </Card>
            )
        }else{
            return (<div>no card selected</div>)
        }
    }
}

export default CardComponent
import React, { Component } from 'react'
import {Card} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import RowCard from "./rowCard.jsx"

class Card extends Component {
    state = {
        // state is initialized by a props
        card:{
            name:"nom",
            description:"description",
            family:"famille",
            affinity:"affinité",
            energy:"Energie",
            hp:"Vie",
            defence:5,
            attack:5,
            price:30.0,
        },
    }
    
      
      render() {
        return (
            <Card>
                <Card.Body>
                    <Card.Title>{this.state.card.name}</Card.Title>
                    <Card.Text>
                        Description: {this.state.card.description}
                        Family: {this.state.card.family}
                        Affinity: {this.state.card.affinity}
                        Energy: {this.state.card.energy}
                        HP: {this.state.card.hp}
                        Defence: {this.state.card.defence}
                        Attack: {this.state.card.hp}
                        Price: {this.state.card.price}

                    </Card.Text>
                </Card.Body>
            </Card>
        )
    }
}

export default TableCards
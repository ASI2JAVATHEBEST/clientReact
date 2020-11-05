import React, { Component } from 'react'
import {Card} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import RowCard from "./rowCard.jsx"

class TableCards extends Component {
    state = {
        // state is initialized by a props
        cards:{
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
                    <Card.Title>{card.name}</Card.Title>
                    
                </Card.Body>
            </Card>
        )
    }
}

export default TableCards
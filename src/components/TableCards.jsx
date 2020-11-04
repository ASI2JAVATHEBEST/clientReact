import React, { Component } from 'react'
import {Table} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import RowCard from "./rowCard.jsx"

class TableCards extends Component {
    state = {
        // state is initialized by a props
        cards:[
            {
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
            {
                name:"nom2",
                description:"description",
                family:"famille",
                affinity:"affinité",
                energy:"Energie",
                hp:"Vie",
                defence:5,
                attack:5,
                price:30.0,
            },
            {
                name:"nom3",
                description:"description",
                family:"famille",
                affinity:"affinité",
                energy:"Energie",
                hp:"Vie",
                defence:5,
                attack:5,
                price:30.0,
            }
        ]
      }
    
      
      render() {
        return (
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Family</th>
                    <th>Affinity</th>
                    <th>Energy</th>
                    <th>HP</th>
                    <th>Defence</th>
                    <th>Attack</th>
                    <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.cards.map(c => <RowCard key={c.name} card={c}></RowCard>)}
                </tbody>
            </Table>
        )
    }
}

export default TableCards
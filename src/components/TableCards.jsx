import React, { Component } from 'react'
import {Table} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import RowCard from "./rowCard.jsx"

class TableCards extends Component {
    state = {
        // state is initialized by a props
        
      }
    
      clickRow= (name)=>{
          console.log("TableCard",name);
          this.props.clickCard(name)
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
                    {this.props.cards.map(c => <RowCard key={c.name} card={c} onRowClick={this.clickRow}></RowCard>)}
                </tbody>
            </Table>
        )
    }
}

export default TableCards
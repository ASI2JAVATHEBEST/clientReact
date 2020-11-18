import React, { Component } from 'react'

class RowCard extends Component {
    state = {
        // state is initialized by a props
      }
      click= ()=>{
        this.props.onRowClick(this.props.card.name)
      }
      
      render() {
        return (
            <tr onClick={this.click}>
                <td>{this.props.card.cardReference.name}</td>
                <td>{this.props.card.cardReference.description}</td>
                <td>{this.props.card.cardReference.family}</td>
                <td>{this.props.card.cardReference.affinity}</td>
                <td>{this.props.card.energy}</td>
                <td>{this.props.card.hp}</td>
                <td>{this.props.card.defence}</td>
                <td>{this.props.card.attack}</td>
                <td>{this.props.card.price}</td>
            </tr>
                
        )
    }
}

export default RowCard
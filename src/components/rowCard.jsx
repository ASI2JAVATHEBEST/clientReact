import React, { Component } from 'react'

class RowCard extends Component {
    state = {
        // state is initialized by a props
      }
    
      
      render() {
        return (
            <tr>
                <td>{this.props.card.name}</td>
                <td>{this.props.card.description}</td>
                <td>{this.props.card.family}</td>
                <td>{this.props.card.affinity}</td>
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
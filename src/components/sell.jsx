import React, { Component } from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import TableCards from "./TableCards.jsx"

class Sell extends Component {
    state = {
        // state is initialized by a props
        
      }
    
      
      render() {
        return (
          <Container>
            <Row>
                <Col cols="8">
                    <TableCards></TableCards>
                </Col>
                <Col cols="4">Merde</Col>
            </Row>
          </Container>
        )
    }
}

export default Sell
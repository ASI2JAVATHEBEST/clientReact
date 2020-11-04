import React, { Component } from 'react'
import {Container, Col,Row} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './../css/BarreNavigation.css'

class BarreNavigation extends Component {
    state = {
        // state is initialized by a props
        title: this.props.title,
        user:this.props.user
      }
    
      
      render() {
        return (
          <div className='barreNavigation'>
              <Container>
                  <Row>
                      <Col cols="2">{this.props.user.money}</Col>
                      <Col cols="8">{this.state.title}</Col>
                      <Col cols="2">{this.props.user.name}</Col>

                  </Row>
              </Container>
          </div>
        )
    }
}

export default BarreNavigation
import React, { Component } from 'react'
import {Card, Container, Row, Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

class Home extends Component {
    state = {
        // state is initialized by a props
        
      }
    
      onClickBuy = (event) => {
        console.log(event);
        this.props.onClickOnglet("buy")
      }
      onClickSell = (event) => {
        console.log(event);
        this.props.onClickOnglet("sell")
      }
      onClickPlay = (event) => {
        console.log(event);
        window.open("localhost:3000")
      }
      render() {
        return (
          <Container>
            <Row>
                <Col cols="4">
                    <Card style={{ width: '18rem' }} id="buy" onClick={this.onClickBuy}>
                        <Card.Body>
                            <Card.Title>Buy</Card.Title>
                            <Card.Text>
                                Acheter une carte
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col cols="4">
                    <Card style={{ width: '18rem' }} id="sell" onClick={this.onClickSell}>
                        <Card.Body>
                            <Card.Title>Sell</Card.Title>
                            <Card.Text>
                                Vendre une carte
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col cols="4">
                    <Card style={{ width: '18rem' }} id="play" onClick={this.onClickPlay}>
                        <Card.Body>
                            <Card.Title>Play</Card.Title>
                            <Card.Text>
                                not implemented
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
          </Container>
        )
    }
}

export default Home
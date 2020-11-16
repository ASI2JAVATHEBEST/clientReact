import React, { Component } from 'react'
import {Form, Button, Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

class Login extends Component {
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
        this.props.onClickOnglet("play")
      }
      render() {
        return (
            <Container>
            
                <h1>Log In</h1>
                <Form>
                    <Form.Group controlId="formBasicinput">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Name" />
                    </Form.Group>
                    <Form.Group controlId="formBasicinput">
                        <Form.Label>Surname</Form.Label>
                        <Form.Control type="text" placeholder="Surname" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Re Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                    Log In
                    </Button>
                </Form>
                <h1>Sign In</h1>
                <Form>
                    
                    <Form.Group controlId="formBasicinput">
                        <Form.Label>Surname</Form.Label>
                        <Form.Control type="text" placeholder="Surname" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    
                    <Button variant="primary" type="submit">
                    Sign In
                    </Button>
                </Form>
            </Container>
        )
    }
}

export default Login
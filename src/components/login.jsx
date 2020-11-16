import React, { Component } from 'react'
import {Form, Button, Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import requestHttp from './../js/requestHttp.js'

class Login extends Component {
    state = {
        login:{
            username:"",
            password:""
        },
        signin:{
            name:"",
            surname:"",
            password:"",
            repassword:""
        }
    }
    
    clickLogin = async ()=>{
        try{
            await requestHttp("POST","user/login/",this.state.login)
        }catch(e){
            console.error(e);
        }
    }
    clickSignIn = async ()=>{
        if(this.state.signin.password != this.state.signin.repassword){
            return 
        }
        try{
            var data = Object.assign({},this.state.signin)
            delete data.repassword
            await requestHttp("POST","user/sigin/", this.data)
        }catch(e){
            console.error(e);
        }
    }
      render() {
        return (
            <Container>
            
                <h1>Sign In</h1>
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
                    <Button variant="primary" type="button" onClick={this.clickSignIn}>
                    Sign In
                    </Button>
                </Form>
                <h1>LogIn</h1>
                <Form>
                    
                    <Form.Group controlId="formBasicinput">
                        <Form.Label>Surname</Form.Label>
                        <Form.Control type="text" placeholder="Surname" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    
                    <Button variant="primary" type="button" onClick={this.clickLogin}>
                    LogIn
                    </Button>
                </Form>
            </Container>
        )
    }
}

export default Login
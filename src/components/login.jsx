import React, { Component } from 'react'
import {Form, Button, Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import requestHttp from './../js/requestHttp.js'

import { connect } from 'react-redux'
import {updateUser} from "./../actions"

class InternalLogin extends Component {
    state = {
        login:{
            username:"",
            password:""
        },
        signin:{
            username:"",
            surname:"",
            password:"",
            repassword:""
        }
    }
    
    clickLogin = async ()=>{
        try{
            await requestHttp("POST","user/login/",this.state.login)
            console.log(this.state);
            this.props.updateUser({name:this.state.login.username,money:4000,cards:await requestHttp("GET","api/card/cards")})
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
            this.props.updateUser({name:this.state.signin.username,money:4000,cards:await requestHttp("GET","api/card/cards")})
        }catch(e){
            console.error(e);
        }
    }
    handleChange= (type,key,event)=>{
        var data = this.state[type]
        data[key] = event.target.value
        this.setState({[type]:data})
    }
      render() {
        return (
            <Container>
            
                <h1>Sign In</h1>
                <Form>
                    <Form.Group controlId="formBasicinput">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Name" onChange={(event)=>{this.handleChange("login","name",event)}}/>
                    </Form.Group>
                    <Form.Group controlId="formBasicinput">
                        <Form.Label>Surname</Form.Label>
                        <Form.Control type="text" placeholder="Surname" onChange={(event)=>{this.handleChange("login","username",event)}}/>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={(event)=>{this.handleChange("login","password",event)}}/>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Re Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={(event)=>{this.handleChange("login","repassword",event)}}/>
                    </Form.Group>
                    <Button variant="primary" type="button" onClick={this.clickSignIn}>
                    Sign In
                    </Button>
                </Form>
                <h1>LogIn</h1>
                <Form>
                    
                    <Form.Group controlId="formBasicinput">
                        <Form.Label>Surname</Form.Label>
                        <Form.Control type="text" placeholder="Surname" value={this.state.login.username} onChange={(event)=>{this.handleChange("login","username",event)}} />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" value={this.state.login.password} onChange={(event)=>{this.handleChange("login","password",event)}} />
                    </Form.Group>
                    
                    <Button variant="primary" type="button" onClick={this.clickLogin}>
                    LogIn
                    </Button>
                </Form>
            </Container>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        user: state.user.user,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateUser: (user) => {
            var res = updateUser(user)
            console.log("updateUser",res);
            dispatch(res)
          },
  }
}
  
const Login = connect(mapStateToProps, mapDispatchToProps)(InternalLogin)

export default Login
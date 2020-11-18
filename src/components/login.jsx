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
            login:"",
            pwd:"",
            repwd:"",
            account:400,
            lastName:"",
            surName:"",
            email:""
        }
    }
    
    clickLogin = async ()=>{
        try{
            var idUser = await requestHttp("GET","user/auth?login="+this.state.login.username+"&pwd="+this.state.login.password)
            if(idUser){
                var user = await requestHttp("GET","user/user/"+idUser)
                this.props.updateUser({id:user.id, name:user.login,money:user.account,cards:user.cardList})
            }
            console.log(this.state);
        }catch(e){
            console.error(e);
        }
    }
    clickSignIn = async ()=>{
        if(this.state.signin.pwd != this.state.signin.repwd){
            console.error("mdp différent")
            return 
        }
        try{
            var data = Object.assign({},this.state.signin)
            delete data.repwd
            var id = await requestHttp("POST","user/user/", data)
            if(id){
                var user = await requestHttp("GET","user/user/"+id)
                this.props.updateUser({id:user.id, name:user.login,money:user.account,cards:user.cardList})
            }
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
                        <Form.Label>Login</Form.Label>
                        <Form.Control type="text" placeholder="Login" onChange={(event)=>{this.handleChange("signin","login",event)}}/>
                    </Form.Group>
                    <Form.Group controlId="formBasicinput">
                        <Form.Label>LastName</Form.Label>
                        <Form.Control type="text" placeholder="Surname" onChange={(event)=>{this.handleChange("signin","lastName",event)}}/>
                    </Form.Group>
                    <Form.Group controlId="formBasicinput">
                        <Form.Label>Surname</Form.Label>
                        <Form.Control type="text" placeholder="Surname" onChange={(event)=>{this.handleChange("signin","surName",event)}}/>
                    </Form.Group>
                    <Form.Group controlId="formBasicinput">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="mail" placeholder="Email" onChange={(event)=>{this.handleChange("signin","email",event)}}/>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={(event)=>{this.handleChange("signin","pwd",event)}}/>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Re Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={(event)=>{this.handleChange("signin","repwd",event)}}/>
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
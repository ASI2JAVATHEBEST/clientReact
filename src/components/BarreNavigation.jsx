import React, { Component } from 'react'
import {Container, Col,Row} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './../css/BarreNavigation.css'

import { connect } from 'react-redux'
import {updateUser} from "./../actions"

class InternalBarreNavigation extends Component {
    state = {
        // state is initialized by a props
        title: this.props.title,
        user:this.props.user
      }
      goHome = () => {
          console.log("home");
        this.props.onClickOnglet("home")
      }
      goLogin = () => {
        this.props.onClickOnglet("login")
      }
      
      render() {
        if(this.props.user){
            return (
                <div className='barreNavigation'>
                    <Container>
                        <Row>
                            <Col cols="2">{this.props.user.money}</Col>
                            <Col cols="8" onClick={this.goHome} >{this.props.title}</Col>
                            <Col cols="2">{this.props.user.name}</Col>
    
                        </Row>
                    </Container>
                </div>
            )
        }
        else{
            return (
                <div className='barreNavigation'>
                    <Container>
                        <Row>
                            <Col cols="2"></Col>
                            <Col cols="8" onClick={this.goHome}>{this.props.title}</Col>
                            <Col cols="2" onClick={this.goLogin}>Se connecter</Col>
    
                        </Row>
                    </Container>
                </div>
            )
        }
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
  
  
const BarreNavigation = connect(mapStateToProps, mapDispatchToProps)(InternalBarreNavigation)

export default BarreNavigation
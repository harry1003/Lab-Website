import "axios"
import React, { Component } from "react"
import { Button, Form, FormGroup, Label, Input, FormText, Col } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Login.css'
import axios from "axios"

const url = "http://localhost:3001/user/login"

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            userName: "",
            password: "",
            errorMsg: "",
        }
    }
    resetState = () => {
        this.setState({
            userName: "",
            password: "",
            errorMsg: ""
        })
    }

    handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value
        });
    }

    login = async () => {
        if (!this.state.userName || !this.state.password) return
        var data = {
            userName: this.state.userName,
            password: this.state.password
        }

        console.log(data)
        axios.post(url, data)
        .then(
            (res) => console.log(res)
        )
        .catch(
            (error) => console.log(error)
        )
    }

    render() {
        // AuthHelper.checkIfLogin().then(isLogin => {
        //     if (isLogin){
        //         this.props.history.push("/");
        //     }
        // })
        
        return (
            <div className="login-container">
                <h3 className="title">Welcome to login!</h3>
                <Form className="form">
                    <Col>
                        <FormGroup>
                            <Label className="subtitle" for="userName">Username: </Label>
                            <Input value={this.state.userName} type="text" name="userName" id="userName" placeholder="Username..." onChange={e => this.handleInput(e)} />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label className="subtitle" for="password">Password: </Label>
                            <Input value={this.state.password} type="password" name="password" id="password" placeholder="Password..." onChange={e => this.handleInput(e)} />
                            <FormText color="danger">
                                {this.state.errorMsg}
                            </FormText>
                        </FormGroup>
                    </Col>
                    <div className="login-btn">
                        <Button onClick={(e) => this.login(e)}>
                            Login    
                        </Button>
                    </div>
                </Form>
            </div>
        )
    }
}

export default Login;
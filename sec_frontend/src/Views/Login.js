import React, { Component } from "react";
import { Form, Button, Container, Col, Card, ButtonGroup } from "react-bootstrap";

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            form: {
                LoginName: "",
                Password: ""
            }
        }
        this.post = this.post.bind(this)
    }
    render() {
        return (
            <Container>
                <Col md={{ span: 6, offset: 3 }}>
                    <Card>
                        <Form id="loginForm">
                            <Form.Group controlId="formBasicUser">
                                <Form.Label>User name</Form.Label>
                                <Form.Control 
                                placeholder="Enter User name" 
                                name='LoginName'
                                onChange={this.handleChange.bind(this)}
                                value={this.state.form.LoginName}
                                />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control 
                                type="password" 
                                placeholder="Password" 
                                name="Password"
                                onChange={this.handleChange.bind(this)}
                                value={this.state.form.Password}
                                />
                            </Form.Group>
                            <ButtonGroup>
                                <Button 
                                    variant="primary" 
                                    type="submit"
                                    id="Login" 
                                    onClick={(e) => {
                                        e.preventDefault();
                                        this.post('http://localhost:3001/login',this.state.form )
                                    }}
                                >
                                    Submit
                                </Button>
                            </ButtonGroup>
                        </Form>
                    </Card>
                </Col>
            </Container>
        )

    }
    handleChange(event){
        let fieldName = event.target.name;
        let fieldVal = event.target.value;
        this.setState({
            form: {...this.state.form, [fieldName]: fieldVal}
        })
    }
    post(path, data){
        fetch(path, {
            method: 'POST',
            mode: "cors",
            headers: {
                "Content-Type": "application/json"
            },
            cache: 'default',
            body: JSON.stringify({...data})
        }).then((data) => {
            return data.json();
        }).then((myJson)=>{
        })
    }
}
export default Login;

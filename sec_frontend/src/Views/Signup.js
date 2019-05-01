import React, { Component } from "react";
import { Form, Button, Container, Col, Card, ButtonGroup } from "react-bootstrap";

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            form: {
                LoginName: "",
                Password: "",
                FirstName: "",
                LastName: "",
                Email: ""
            }
        }
        this.post = this.post.bind(this)
    }
    render() {
        return (
            <Container>
                <Col md={{ span: 6, offset: 3 }}>
                    <Card>
                        <Form id="createForm">
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>User Name</Form.Label>
                                    <Form.Control 
                                    placeholder="Enter User Name" 
                                    name='LoginName'
                                    onChange={this.handleChange.bind(this)}
                                    value={this.state.form.LoginName}
                                    />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control 
                                    type="password" 
                                    placeholder="Password" 
                                    name="Password"
                                    onChange={this.handleChange.bind(this)}
                                    value={this.state.form.Password}
                                    />
                                </Form.Group>
                            </Form.Row>
                            <Form.Group controlId="formEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control 
                                type="email" 
                                placeholder="Email@email.com" 
                                name="Email"
                                onChange={this.handleChange.bind(this)}
                                value={this.state.form.Email}
                                />
                            </Form.Group>

                            <Form.Group controlId="formGridAddress1">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control 
                                placeholder="John"
                                name="FirstName"
                                onChange={this.handleChange.bind(this)}
                                value={this.state.form.FirstName}
                                />
                            </Form.Group>

                            <Form.Group controlId="formGridAddress2">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control 
                                placeholder="Doe" 
                                name="LastName"
                                onChange={this.handleChange.bind(this)}
                                value={this.state.form.LastName}
                                />
                            </Form.Group>
                            <ButtonGroup>
                                <Button 
                                    variant="primary" 
                                    type="submit"
                                    id="Login" 
                                    onClick={(e) => {
                                        e.preventDefault();
                                        this.post('http://localhost:3001/createUser',this.state.form )
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
            console.log(myJson);
        })
    }
}
export default Signup;

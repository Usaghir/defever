
import React, { Component } from "react";
import {Navbar, Container, Col} from 'react-bootstrap';

class ChatPage extends Component {
    render() {
        let year = new Date().getFullYear();
        return (
            
        <Navbar fixed="bottom" bg="dark" variant="dark">
        <Container>
            <Col lg={12} className = "text-center text-muted">
        <div> {year}, All right reserved by Defever </div>
            </Col>
        </Container>
            
            </Navbar>
        );
    }
}

export default ChatPage;
import React, { Component } from "react";
import {Navbar, Container, Col} from 'react-bootstrap';
import ChatBox from './ChatBox';

class ChatFooter extends Component {
    render() {
        let year = new Date().getFullYear();
        return (
            <div>
                <ChatBox/>
        <Navbar fixed="bottom" bg="dark" variant="dark">
        <Container>
            <Col lg={12} className = "text-center text-muted">
        <div> {year}, All right reserved by Defever </div>
            </Col>
        </Container>
            
            </Navbar>
            </div>
        );
    }
}

export default ChatFooter;

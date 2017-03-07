import React, { Component } from 'react';
import {Container, Row, Col} from 'react-grid-system';
class RsvpOne extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col sm={4}>Mar.</Col>
                    <Col sm={1}><div>7</div><div>Tuesday</div></Col>
                    
                </Row>
            </Container>
        );
    }
}

export default RsvpOne;
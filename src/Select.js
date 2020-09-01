import React, {Component} from 'react';
import {Col, Container, Row} from 'reactstrap';
import { Button, ButtonGroup } from 'reactstrap';

class Select extends Component {


    handleClickYes = (e) =>{
        this.props.handleClickYes()
    }
    handleClickNo = (e) =>{
        this.props.handleClickNo()
    }

    render() {
        return (
            <div>
{/*                <Container>
                    <Row>
                        <button onClick={this.handleClickNo}>Hayır</button>  <button style={{marginLeft:"20px"}} onClick={this.handleClickYes}>Evet</button>
                    </Row>
                </Container>*/}


                    <ButtonGroup>
                        <Button className="Button" onClick={this.handleClickNo}>Hayır</Button>
                        <Button className="Button" onClick={this.handleClickYes}>Evet</Button>
                    </ButtonGroup>


            </div>
        );
    }
}

export default Select;
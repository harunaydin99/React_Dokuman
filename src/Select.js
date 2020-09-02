import React, {Component} from 'react';
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
                        <Button className="selectButton" onClick={this.handleClickNo}>Hayır</Button>
                        <Button style={{marginLeft:"7px"}} className="selectButton" onClick={this.handleClickYes}>Evet</Button>
                    </ButtonGroup>


            </div>
        );
    }
}

export default Select;
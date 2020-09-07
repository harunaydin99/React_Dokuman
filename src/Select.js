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
                    <ButtonGroup>
                        <Button className="selectButton" onClick={this.handleClickNo}>Hayır</Button>
                        <Button style={{marginLeft:"7px"}} className="selectButton" onClick={this.handleClickYes}>Evet</Button>
                    </ButtonGroup>
            </div>
        );
    }
}

export default Select;
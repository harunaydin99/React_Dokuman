import React, {Component} from 'react';
import {Button, ButtonGroup} from "react-bootstrap";

class Text extends Component {
    state = {
        deger: 0
    }
    handleClick = (e) =>{
        this.props.handleClick()
    }

    render() {
        return (
            <div>

                <div>
                    <ButtonGroup>
                        <Button className="textButton" onClick={this.handleClick}>Tamam</Button>
                    </ButtonGroup>
                </div>
            </div>
        );
    }
}

export default Text;
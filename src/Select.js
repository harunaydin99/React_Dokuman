import React, {Component} from 'react';

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
                <button onClick={this.handleClickYes}>Evet</button><button style={{marginLeft:"20px"}} onClick={this.handleClickNo}>Hayır</button>

            </div>
        );
    }
}

export default Select;
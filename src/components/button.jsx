import React, { Component } from 'react';

class Button extends Component {

    // Returns red button if the content is not a number
    isOperationSymbol = () => {
        if (Number.isInteger(this.props.content) || this.props.content === ".") {
            return "btn btn-primary btn-lg m-2";
        }
        else if (this.props.content === "CLR") {
            return "btn btn-secondary btn-lg m-2";
        }
        else {
            return "btn btn-danger btn-lg m-2";
        }
    }

    onClick = () => {
        const btnId = this.props.content;
        if (btnId === "CLR") {
            this.props.onClickCLR();
        }
        else {

            this.props.onClickNumbers(btnId);
        }
    }

    render() {


        return (

            <button type="button"
                onClick={this.onClick}
                className={this.isOperationSymbol()}
            >
                {this.props.content}
            </button>
        );
    }
}


export default Button;
import React, { Component } from 'react';

class Button extends Component {


    isOperationSymbol() {
        // console.log(typeof this.props.content);
        if (Number.isInteger(this.props.content)) {
            return "btn btn-primary btn-lg m-2";
        }
        else {
            return "btn btn-danger btn-lg m-2";
        }
    }

    render() {
        return <button type="button" className={this.isOperationSymbol()}>{this.props.content}</button>;
    }
}


export default Button;
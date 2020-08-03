import React, { Component } from 'react';

class Screen extends Component {

    isFirstNumber = (props) => {
        if (this.props.content.mode === 0) {
            return this.props.content.firstNum
        }
        else {
            return this.props.content.secondNum
        }
    }
    render() {
        return (
            <div>
                <div className="row align-items-center">
                    <div className="offset-sm-2 offset-md-4 offset-lg-4 border border-secondary 
                    rounded-lg screen-bg col-sm-7 col-md-5 col-lg-3 pb-3 mb-3">{this.isFirstNumber(this.props)}</div>
                    <div className="h3 align-bottom col-0 pb-3 mb-3 pl-2 ml-2">{this.props.content.operationSym}</div>
                </div>
            </div>
        );
    }
}

export default Screen;
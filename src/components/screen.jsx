import React, { Component } from 'react';

class Screen extends Component {

    render() {
        return (
            <div>
                <div className="row align-items-center screenText">
                    <h3 className="offset-sm-2 offset-md-4 offset-lg-4 border border-secondary 
                    rounded-lg screen-bg col-sm-7 col-md-5 col-lg-3 pb-3 mb-3">{this.props.content.stringToParse}</h3>
                </div>
            </div>
        );
    }
}

export default Screen;
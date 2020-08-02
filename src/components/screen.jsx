import React, { Component } from 'react';

class Screen extends Component {


    render() {
        return (
            <div>
                <div className="row align-items-center">
                    <div className="offset-sm-2 offset-md-4 offset-lg-4 border border-secondary 
                    rounded-lg screen-bg col-sm-7 col-md-5 col-lg-3 pb-3 mb-3">20</div>
                    <div className="h3 align-bottom col-0 pb-3 mb-3 pl-2 ml-2">+</div>
                </div>
            </div>
        );
    }
}

export default Screen;
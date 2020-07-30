import React, { Component } from 'react';
import Button from './button';
import './buttons.css'
class Buttons extends Component {
    state = {}
    render() {
        return (
            <div className="offset-sm-2 offset-md-4 offset-lg-4 border border-secondary 
            rounded-lg button-bg col-xs-2 col-sm-7 col-md-5 col-lg-3">
                {/* <div className="row align-items-center"> */}
                <div className="align-items-center">
                    <div className="layer-1">
                        <Button content={1} />
                        <Button content={2} />
                        <Button content={3} />
                        <Button content="+" />
                    </div>
                    <div className="layer-2 ">
                        <Button content={4} />
                        <Button content={5} />
                        <Button content={6} />
                        <Button content="-" />
                    </div>
                    <div className="layer-3 ">
                        <Button content={7} />
                        <Button content={8} />
                        <Button content={9} />
                        <Button content="*" />
                    </div>
                    <div className="layer-4 ">
                        <Button content={0} />
                        <Button content="." />
                        <Button content="=" />
                        <Button content="÷" />
                    </div>
                    {/* </div> */}
                </div>
            </div >
        );
    }
}

export default Buttons;
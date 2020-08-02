import React, { Component } from 'react';
import Button from './button';
import './buttons.css'
class Buttons extends Component {


    render() {
        return (
            <div className="offset-sm-2 offset-md-4 offset-lg-4 border border-secondary 
            rounded-lg button-bg col-xs-2 col-sm-7 col-md-5 col-lg-3">
                <div className="layer-1">
                    {this.props.buttonProps.layer1.map(btnProps => (
                        <Button
                            key={btnProps.id}
                            content={btnProps.id}
                        />
                    ))}
                </div>
                <div className="layer-2 ">
                    {this.props.buttonProps.layer2.map(btnProps => (
                        <Button
                            key={btnProps.id}
                            content={btnProps.id}
                        />
                    ))}
                </div>
                <div className="layer-3 ">
                    {this.props.buttonProps.layer3.map(btnProps => (
                        <Button
                            key={btnProps.id}
                            content={btnProps.id}
                        />
                    ))}
                </div>
                <div className="layer-4 ">
                    {this.props.buttonProps.layer4.map(btnProps => (
                        <Button
                            key={btnProps.id}
                            content={btnProps.id}
                        />
                    ))}
                </div>
            </div >
        );
    }
}

export default Buttons;
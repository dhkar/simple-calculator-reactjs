import React, { Component } from 'react';
import Buttons from './buttons';
import Screen from './screen';

class Calc extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonProps: {
                layer1: [
                    { id: 1, type: "number" },
                    { id: 2, type: "number" },
                    { id: 3, type: "number" },
                    { id: "+", type: "misc" }
                ]
                ,
                layer2: [
                    { id: 4, type: "number" },
                    { id: 5, type: "number" },
                    { id: 6, type: "number" },
                    { id: "-", type: "misc" }
                ]
                ,
                layer3: [
                    { id: 7, type: "number" },
                    { id: 8, type: "number" },
                    { id: 9, type: "number" },
                    { id: "*", type: "misc" }
                ]
                ,
                layer4: [
                    { id: 0, type: "number" },
                    { id: ".", type: "misc" },
                    { id: "=", type: "misc" },
                    { id: "÷", type: "misc" }
                ]
            }
        }
    }

    // handleClickNumber = () => {
    //     let x = this.state.timesClicked;

    //     x = x + 1;
    //     this.setState({ timesClicked: x });
    //     console.log(this.state.timesClicked);
    // }



    render() {

        const breaklines = ['', '', ''];

        return (
            <React.Fragment>
                <h1 className="m-2" style={{ textAlign: "center" }}>Simple Calculator Apps By Dhika</h1>
                <p style={{ whiteSpace: "pre-line" }}>{breaklines.join('\n')}</p>
                <div className="container">
                    <Screen />
                </div>
                <div className="container">
                    <Buttons
                        buttonProps={this.state.buttonProps}

                    />
                </div>
            </React.Fragment>


        );
    }
}

export default Calc;

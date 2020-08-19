import React, { Component } from 'react';
import Buttons from './buttons';
import Button from './button';

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
            },

            screenProps: {
                stringToParse: "0",
                mode: 0
            },



        }
    }

    handleClickButton = (btnId) => {
        if (this.state.screenProps.stringToParse.length < 15) {
            let latest_string = this.state.screenProps.stringToParse;

            // Initialize String For Screen Purposes
            if (latest_string === "0") {
                latest_string = ""
            }

            // Update screen value if it is not an equal sign
            let newNum = btnId.toString();
            let updatedNum = latest_string + newNum;
            if (btnId !== "=") {
                this.setState({
                    screenProps: {
                        stringToParse: updatedNum
                    }
                });
            }

            // Do calculation if equal sign clicked
            if (btnId === "=") {
                let result = this.getResult(this.state.screenProps.stringToParse);
                console.log(result);
            }
        }

    }

    handleStringOperation = (buttonId) => {



    }

    getResult = (string) => {
        return string;
    }

    handleClrButton = () => {
        this.setState({
            screenProps: {
                stringToParse: "0",
                mode: 0
            }
        });
    }

    render() {

        const breaklines = ['', '', ''];

        return (
            <React.Fragment>
                <h1 className="m-2" style={{ textAlign: "center" }}>Simple Calculator Apps By Dhika</h1>
                <p style={{ whiteSpace: "pre-line" }}>{breaklines.join('\n')}</p>
                <div className="container">
                    <Screen content={this.state.screenProps} />
                </div>
                <div className="container">
                    <Buttons
                        buttonProps={this.state.buttonProps}
                        onClickNumber={this.handleClickButton}
                    />
                </div>
                <div className="container col-2">
                    <Button content="CLR" onClickCLR={this.handleClrButton} />
                </div>
            </React.Fragment>


        );
    }
}

export default Calc;

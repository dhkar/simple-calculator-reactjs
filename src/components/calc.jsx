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
            },

            screenProps: {
                firstNum: "0",
                secondNum: ""
            },

            mode: 0
        }
    }

    handleClickNumber = (btnId) => {

        // Detecting First Number, adds number to the screen until operation symbol clicked
        if (((this.state.mode === 0) && (Number.isInteger(btnId))) || (btnId === ".")) {
            var latest_firstNum;
            if (this.state.screenProps.firstNum === "0") {
                latest_firstNum = "";
            }
            else {
                latest_firstNum = this.state.screenProps.firstNum;
            }
            let newNum = btnId.toString();

            let updatedNum = latest_firstNum + newNum;
            this.setState({

                screenProps: {
                    firstNum: updatedNum,
                    secondNum: ""
                }

            });
        }


    }

    // handleRefreshScreen = () => {
    // change the state to :
    // screenProps: {
    //     firstNum : "",
    //     secondNum: ""
    // }
    // }


    render() {

        const breaklines = ['', '', ''];

        return (
            <React.Fragment>
                <h1 className="m-2" style={{ textAlign: "center" }}>Simple Calculator Apps By Dhika</h1>
                <p style={{ whiteSpace: "pre-line" }}>{breaklines.join('\n')}</p>
                <div className="container">
                    <Screen content={this.state.screenProps.firstNum} />
                </div>
                <div className="container">
                    <Buttons
                        buttonProps={this.state.buttonProps}
                        onClickNumber={this.handleClickNumber}
                    />
                </div>
            </React.Fragment>


        );
    }
}

export default Calc;

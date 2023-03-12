import React from "react";

class StatefulGreetingWithPrevState extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            introduction: "Hello!",
            buttonText: "Exit",
            count: 0,
        };
    }

    handleClick(){
        this.setState((prevState, prevProps) => {
            console.log('Previous State:', prevState)
            console.log('Previous Props:', prevProps)
            return {
                introduction: prevState.introduction === "Hello!" ? "Goodbye" : "Hello!",
                buttonText: prevState.buttonText === "Exit" ? "Enter" : "Exit"
            }

        })
    }

    // handleClick() {
    //     // I am asynchronous, excecuting in the background
    //     this.setState({
    //         introduction: this.state.introduction === "Hello!" ? "Goodbye!" : "Hello!",
    //         buttonText: this.state.buttonText === "Exit" ? "Enter" : "Exit",
    //     }, () => {
    //         console.log('new state', this.state.introduction);
    //         console.log('new state', this.state.buttonText);
    //     });
    //     // I will execute before setState completes
    //     console.log(this.state.introduction);
    //     console.log(this.state.buttonText);
    // }

    increment() {
        this.setState({
            count: this.state.count + 1
        })
        console.log(this.state.count)
    }

    incrementThree(){
        this.setState((prevState, prevProps) => {
            console.log('Previous State:', prevState)
            console.log('Previous Props:', prevProps)
            return {
                count: prevState.count +1
            }
        })
        // this.increment()
        // this.increment()
        // // only the last one counts/matters
        // this.increment()
    }

    render() {
        return (
            <div>
                <h1>
                    {this.state.introduction} {this.props.greeting}
                </h1>
                <button onClick={() => this.handleClick()}>
                    {this.state.buttonText}
                </button>
                <button onClick={() => this.incrementThree()}>
                    Increment three
                </button>
                <p>You've clicked {this.state.count} times</p>
            </div>
        );
    }
}

export default StatefulGreetingWithPrevState;
import React from "react";

class StatefulGreetingWithCallback extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            introduction: "Hello!",
            buttonText: "Exit",
        };
    }

    handleClick() {
        // I am asynchronous, excecuting in the background
        this.setState({
            introduction: "Goodbye!",
            buttonText: 'Enter'
        }, () => {
            console.log('new state', this.state.introduction);
            console.log('new state', this.state.buttonText);
        });
        // I will execute before setState completes
        console.log(this.state.introduction);
        console.log(this.state.buttonText);
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
            </div>
        );
    }
}

export default StatefulGreetingWithCallback;
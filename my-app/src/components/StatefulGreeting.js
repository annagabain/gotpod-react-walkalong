import React from "react";

class StatefulGreeting extends React.Component {
    render() {
        // return <h1>Hello from the stateful class component!</h1>
        return <h1>Hello {this.props.name}, {this.props.greeting}</h1>

    }

}

export default StatefulGreeting;
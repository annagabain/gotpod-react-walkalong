import React from "react";

let FunctionalGreetingWithProps = (props) => {
    console.log('props', props);
    return <h1>Hello {props.name}, I see you're {props.age} years old; {props.greeting}!</h1>;
}


export default FunctionalGreetingWithProps;
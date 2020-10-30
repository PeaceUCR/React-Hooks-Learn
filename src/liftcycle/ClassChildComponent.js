import React from 'react';

class ClassChildComponent extends React.Component {

    constructor(props) {
        super(props);
        console.log('Child constructor');
    }

    componentDidMount() {
        console.log('Child componentDidMount');
        // setTimeout(() => {
        //     this.setState({count: 1})
        // }, 2000)
    }

    componentWillUnmount() {
        console.log('Child componentWillUnmount');
    }

    componentDidUpdate() {
        console.log('Child componentDidUpdate');
    }

    render() {
        console.log('Child render');
        return <h1>Child Component</h1>;
    }
}

export default ClassChildComponent;

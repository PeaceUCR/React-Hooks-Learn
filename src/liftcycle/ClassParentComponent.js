import React from 'react';
import ClassChildComponent from './ClassChildComponent'

class ClassParentComponent extends React.Component {
    state = {
        count: 0
    }
    constructor(props) {
        super(props);
        console.log('Parent constructor');
    }

    componentDidMount() {
        console.log('Parent componentDidMount');
        setTimeout(() => {
            this.setState({count: 1})
        }, 2000)
    }

    componentWillUnmount() {
        console.log('Parent componentWillUnmount');
    }

    componentDidUpdate() {
        console.log('Parent componentDidUpdate');
    }

    render() {
        console.log('Parent render');
        return <div>
            <h1>Parent Component</h1>
            <ClassChildComponent count={this.state.count}/>
        </div>;
    }
}

export default ClassParentComponent;

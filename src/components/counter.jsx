import React, { Component } from 'react';
import Badge from 'react-bootstrap/Badge'

class Counter extends Component {
    
    //renderTags() {
      //  if (this.state.tags.length === 0) return <p>There are no Tags!</p>;

        //return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;
    //}

    render() {
        //console.log('props', this.props);

        return (
            <div>
                <div>
                    <h4>Counter #{this.props.counter.id}</h4>
                </div>

                <span className={this.getBadgeClasses()}>{this.formatValue()}</span>
                <button onClick={() => this.props.onIncrement(this.props.counter)}
                    className="btn btn-secondary btn-sm m-2">
                    Increment
                </button>
                <button onClick={() => this.props.onDelete(this.props.counter.id)}
                    className="btn btn-danger btn-sm m-2">
                    Delete
                </button>
            </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatValue() {
        const {value} = this.props.counter;
        return value === 0 ? 'Zero' : value;
    }
}
 
export default Counter;
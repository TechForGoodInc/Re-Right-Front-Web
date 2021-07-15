import React, { Component } from 'react';
import NavBar from '../components/navbar'
import Counters from '../components/counters';

// ExamplePage is an example of a "controlling component", while counters and counter are
// "controlled components" (all of their state and data is controlled / passed by ExamplePage)
class ExamplePage extends Component {
    state = { 
        counters: [
            {id: 1, value: 0},
            {id: 2, value: 1},
            {id: 3, value: 2},
            {id: 4, value: 3}
        ]
     }

    handleAddCounter = () => {
        const counters = this.state.counters.slice();
        const newCounterId = counters[counters.length - 1].id + 1;
        counters.push({id: newCounterId, value: newCounterId});
        console.log(newCounterId);
        this.setState({counters});

    }

    handleResetList = () => {
        // Resets all ORIGINAL counters to start state (deleted ones come back)
        const counters = [
            {id: 1, value: 0},
            {id: 2, value: 1},
            {id: 3, value: 2},
            {id: 4, value: 3}
        ]
        this.setState({counters})
    }

    handleResetCount = () => {
        // Resets all REMAINING counters to zero (deleted ones stay deleted)
        const counters = this.state.counters.map(c => {
            c.value = 0;
            return c;
        })
        this.setState({counters})
    }

    handleIncrement = counter => {
        console.log(counter);
        const counters = [...this.state.counters];
        const idx = counters.indexOf(counter);
        counters[idx] = {...counter};
        counters[idx].value++;
        this.setState({counters})
    }

    handleDelete = (counterId) => {
        console.log("onDelete Event Raised! :)", counterId)
        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({counters});
    }
    render() {
        return(
            <React.Fragment>
                <NavBar
                totalCounters={this.state.counters.filter(c => c.value > 0).length}/>
                <main className="container">
                    <Counters
                        // All data and functions needed by controlled components must be passed
                        // to them through "props"
                        counters={this.state.counters}
                        onAddCounter={this.handleAddCounter}
                        onResetCount={this.handleResetCount}
                        onResetList={this.handleResetList}
                        onIncrement={this.handleIncrement}
                        onDelete={this.handleDelete}/>
                </main>
            </React.Fragment>
            
        );
    }
}

export default ExamplePage;

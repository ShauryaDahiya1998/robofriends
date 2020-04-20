import React, { Component } from 'react';
import CardList from '../components/CardList';
// import {robots} from './robots';
import Searchbox from '../components/Searchbox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchField: '' 
        }
    }

    componentDidMount() {
        fetch('http://jsonplaceholder.typicode.com/users').then(response => {
            return response.json();
        })
        .then (users => {
            this.setState({robots: users});
        });
    }

    onSearchChange = (event) => {
        this.setState({searchField: event.target.value})
        
    }
    render() {
        const filterRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        })
        if(this.state.robots.length === 0) {
            return (<h1>Loading</h1>);
        } else  {
            return(
                <div className='tc'>
                    <h1>Robofriends</h1>
                    <Searchbox searchChange = {this.onSearchChange}/>
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots = {filterRobots}/>
                        </ErrorBoundary>
                    </Scroll>
                </div>
            )
        }
        
    }
    
}

export default App;
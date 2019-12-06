import React from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry'
import './App.css'

// app has 2 states (class - so that it can have a constructor and set states there)
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: ""
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users =>  this.setState({ robots: users }));
  }

  onSearchChange = event => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const { robots, searchField } = this.state
    const filteredRobots = robots.filter(robot => {
      return robot.name
        .toLowerCase()
        .includes(searchField.toLowerCase());
    });
    if (!robots.length) {
      return <h1>Loading</h1>
    } else {
      return (
        <div className="tc">
          <h1 className="f1">RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <ErrorBoundry>
              <CardList robots={filteredRobots} />
            </ErrorBoundry>
          </Scroll>
          
        </div>
      );
    }
  }
}

export default App;

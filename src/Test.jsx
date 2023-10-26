import React, { Component } from 'react';
import SearchInput from './components/SearchInput/SearchInput';

const data = [
    'Apple',
    'Banana',
    'Cherry',
    'Grapes',
    'Lemon',
    'Lime',
    'Orange',
    'Peach',
    'Pear',
    'Pineapple',
    'Strawberry',
    'Watermelon',
];

class App extends Component {
    handleSearch = (query, suggestions) => {
        console.log('Search query:', query);
        console.log('Suggestions:', suggestions);
        // You can process the search query and suggestions here
    };

    render() {

        return (
            <div className="App">
                <SearchInput data={data} onSearch={this.handleSearch} />
            </div>
        );
    }
}

export default App;
import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './SearchBar';

import youtube from '../apis/youtube';


class App extends React.Component {
	onTermSubmit = (term) => {
		youtube.get('/search', {
			params: {
				q: term
			}
		}).then((response) => {
			console.log(response.data.items)
			
		}).catch((err) => {
			console.log(err)
		})
	}

	render (){
		return (
			<div>
				<SearchBar onFormSubmit={this.onTermSubmit} />
			</div>)
	}
}





export default App;
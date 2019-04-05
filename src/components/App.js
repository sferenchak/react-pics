import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

export default class App extends React.Component {
	async onSearchSubmit(term) {
		const response = await axios.get('https://api.unsplash.com/search/photos', {
			params: { query: term },
			headers: {
				Authorization:
					'Client-ID c2ac3d13b36787ffbfc4d14cc7d474f3833879e8c1a9f9155daedb45baec31f7'
			}
		});

		console.log(response.data.results);
	}

	render() {
		return (
			<div className='ui container' style={{ marginTop: '10px' }}>
				<SearchBar onSubmit={this.onSearchSubmit} />
			</div>
		);
	}
}

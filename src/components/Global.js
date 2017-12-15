import React, { Component } from 'react';
import Gallery from './Gallery';

class Global extends Component{
	 constructor(props){
    super(props);
    this.state = {
      query: '',
      items: []
    }
  }

	search(){
		 const BASE_URL = 'https://www.googleapis.com/books/v1/volumes?q=';
		 fetch(`${BASE_URL}${this.state.query}`, {method: 'GET'})
		 .then(response => response.json())
		 .then(json => {
		 	let { items } = json;
		 	this.setState({ items })
		 });
	}
	render(){
		return(
			<div className="container">
			<h2>Google Book Explorer!</h2>
				<div className="search-form-syle">
			<input className="form-control" type="text" placeholder="Search for a book"
			 onChange={event => this.setState({query: event.target.value})}
			 onKeyPress={event => {
			 	if (event.key === 'Enter'){
			 		this.search();
			 	}
			 }} 
			 />

			<button className="btn btn-primary" onClick={()=> this.search()}>Search</button>
			</div>
		
						<Gallery items={this.state.items}/>
					
			
			</div>
			)
	}
}
export default Global;
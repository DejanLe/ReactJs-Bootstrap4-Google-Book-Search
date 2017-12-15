import React, { Component } from 'react';
 
class Gallery extends Component {
 
  render() {
    return (
      <div className="App">
         <div className="container">
        			<div className="row">
        {
        	this.props.items.map((item, index) => {
        		let {title, imageLinks, infoLink} = item.volumeInfo;
        		return(
        		
									<div className="col-md-3">
												<div className="card">
												 		<img className='card-img-top thumbnail' src={imageLinks !== undefined ? imageLinks.thumbnail : ''} alt="book image" /> 
													  <div className="card-body">
													    <h4 className="card-title"><a key={index} className="book" href={infoLink} target="_blank">{title}</a></h4>
													    
													  </div>
												</div> 	 
										</div>

		        		)
		        	})
        		}

					 	</div>	 
         </div>	
      </div>
    ) 
  }
}

export default Gallery;

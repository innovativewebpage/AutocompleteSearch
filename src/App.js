import React , { Component} from 'react';
import './App.css';
import Suggestions from './Components/Suggestions';
import Tabular from './Components/Tabular';
import Data from './data.json';

export default class App extends Component{
	
constructor(props){
	super(props)
	this.state = {
		data:Data.data,
		
		keyword:"",
		results:[],
		showsugg:false,
		
		showdetails:false
	}
}	

matchName = (name,keyword) => {	
	//console.log('name==',name);
	//console.log('keyword==',keyword);
	let keyLen = keyword.length;
	//console.log('keyLen',keyLen);
	
	keyword = keyword.toLowerCase();
	//console.log('keywordlowercase',keyword);
	
	name = name.toLowerCase().substring(0,keyLen)
	console.log('substring_name',name);
	
	
	return name === keyword && keyLen!==0
	
	/*let keyLen = keyword.length;
	keyword = keyword.toLowerCase()
	name = name.toLowerCase().substring(0,keyLen)
	return name === keyword && keyLen!==0*/
}



onSearch = value => {
	let results = this.state.data.filter(item => this.matchName(item.name,value))
	
	//console.log(results);
	
	this.setState({
	results:results
})

//console.log(results)
}



updateField = value => {
	this.setState({
		keyword:value,
		showsugg:true
	})
	
	this.onSearch(value)
}
	
    updateText = (name,id) => {
    let res = this.state.data.filter(item => item.name === name && item.Emp_id === id)
    this.setState({
      keyword : name,
      showsugg:false,
      results : res
    })
  }
  
  clear = () => {
    this.setState({
      keyword : "",
      showsugg:false,
      results : []
    })
  }
  
   handleClick = () => {
    this.setState({
      showdetails : true
    })
  }
  
	
	closeDetails = () => {
    this.setState({
      showdetails : false,
      results:[],
      keyword: "",
      showsugg : false
    })
  }
	
	
	render(){
		return(
			<div className = "App">
			{
				
		this.state.showdetails ? <Tabular results = {this.state.results} onclick = {this.closeDetails}/> :		
				
	<div className="autocomplet-container">
		<h1 className="main-head">Employee Details</h1>
				<br/>
				<br/>

				<div className="search-container">
					<div className="input">
					
<input className="search-bar" placeholder="Search..."
onChange={event => this.updateField(event.target.value) }
value = {this.state.keyword}

				/>
				

	{
        this.state.keyword.length > 0 ?
        <div className = "button">
        <button onClick = {() => this.clear()}className="clear">x</button>
         </div> : null
              }		
					</div>	
				</div>


  {
            this.state.showsugg && this.state.results.length > 0 ? 
            <div className = "suggestion-container">
              <Suggestions results = {this.state.results} update = {this.updateText}/>
              </div> : 
              this.state.keyword.length >0 && this.state.results.length === 0 ? 
              <div className = "no-results">
                <h1>No Results Found</h1><br/>
                <h4>Try Different Keywords</h4>
                </div> : null
     }
	 
	   {
            this.state.results.length === 1 && this.state.keyword.toLowerCase() === this.state.results[0].name.toLowerCase() ?
            <div className = "details">
                <button className = "detailsbutton" onClick = {() => this.handleClick()}>Get Details</button>
              </div> : null
          }
			</div>
		}	
	</div>
			
		)
	}
}


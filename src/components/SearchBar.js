import React from 'react';

// use class component because need to use state to handle user input

class SearchBar extends React.Component {

    state = { term :'' };

    //onInputChange(event) {   ############ uncontrolled because it doesnt update at any instant
    //    //event.target.value javascript event
    //    console.log(event.target.value);
    //    this.setState({ term: event.target.value });
    //}

    //onFormSubmit(event){  // is a function and this is undefined
    //    event.preventDefault();
    //    console.log(this.state.term);
    //}
  
    onFormSubmit = (event) => { // arrow function from babel
        event.preventDefault();
       // console.log(this.state.term);
        this.props.onSubmit(this.state.term);
    }

   // <input type="text" onChange={(event)=> console.log(event.target.value)}></input>  CAN USE THIS FOR SHORT so dont need function
     //if you do this.onInputChange() then it will run whenever it is rendered. if you just leave it it just calls it when input changed
    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field"> <label>Image Search</label>
                        
                        <input type="text" value={this.state.term} onChange={e => this.setState({ term: e.target.value })}></input> 
                    </div>
                </form>
            </div>
            )
        
    }

}

export default SearchBar;
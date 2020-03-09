import React, {Component} from 'react';

class Searchbooks extends Component {
    render(){
        return(
            <div className="searchBooks">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Name:
                      <input type="text" ref={(input) => this.input = input} />
                    </label>
                    <input type="submit" value="Submit" />
                    <input type="filter" value="Filter" />
                    <select id="price">
                    <option value="" disabled selected hidden>Price</option>
                    <option value="free">free</option>
                    <option value="highest">highest</option>
                    <option value="lowest">lowest</option>
                    </select>
                    <select id="type">Type
                    <option value="" disabled selected hidden>Type</option>
                    <option value="digital">digital</option>
                    <option value="print">print</option>
                    <option value="new">new</option>
                    <option value="used">used</option>
                    </select>
                    
                 
                    
                  </form>
             
            </div>
                )};
            }
          


export default Searchbooks;
    

import React, { Component} from 'react'
import Form from 'react-bootstrap/Form'

class BeerSearch extends Component {

  render(){
    return(
      <div>
        <Form>
          <input type="text" className="form-box-search" placeholder="Search" onChange={this.props.handleSearchInput}/>
        </Form>
      </div>
    )
  }
}

export default BeerSearch

import React, { Component } from 'react';
import ChildComponent from './childComponent';

class ParentComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isTextVisible: false,
        };
        this.handleButtonClick = this.handleButtonClick.bind(this);
      }
      handleButtonClick() {
        this.setState({isTextVisible: true,});
      } 
    render() { 
        return (
            <div>
                <button onClick={this.handleButtonClick}>
                        Show Child Component
                </button>
                {this.state.isTextVisible ? <p><ChildComponent/></p>:<p>Child Component is invisible</p>}
            </div>
        );
    }
}
 
export default ParentComponent;
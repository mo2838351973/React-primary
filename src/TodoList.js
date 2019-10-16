import React, { Component } from 'react';
import store from './store';
import { connect } from 'net';
class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
  }
  render() {
    return (
      <div>
        <div>
          <input type="text" value={this.props.inputValue} onChange={this.props.handleInputChange.bind(this)}/>
          <button>提交</button>
        </div>
        <ul>
          <li>Dell</li>
        </ul>
      </div>
    );
  }
  handleInputChange(e) {
      console.log(e.target.value)
  }
}
const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue
  };
}
const mapDispatchToProps = (dispatch) => {
  return {

  }
}
export default connect(mapStateToProps, null)(TodoList);

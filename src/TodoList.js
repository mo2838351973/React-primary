import React, { Component, Fragment, } from 'react';
//import logo from './logo.svg';
// import TodoItem from './TodoItem.js';
//import { red } from 'ansi-colors';
import './TodoList.css';
// import axios from 'axios';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';
import store from './store';
import { getInputChangeAction, getItemAddAction, getItemDeleteAction } from './store/actionCreators'
class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    store.subscribe(this.handleStoreChange);//订阅store的改变 
  }
  handleStoreChange() {
    this.setState(store.getState());
  }
  handleInputChange(e) {
    const action = getInputChangeAction(e.target.value);
    store.dispatch(action);
  }
  handleBtnClick() {
    const action = getItemAddAction();
    store.dispatch(action);
  }
  handleItemDelete(index) {
    const action = getItemDeleteAction(index);
    store.dispatch(action);
  }
  render() {
    return (
      <Fragment>
        <div style={{marginTop: '10px'}}>
          <div>
            <Input 
              placeholder="todo info" 
              value={this.state.inputValue} 
              style={{width: '300px', marginRight: '10px'}}
              onChange={this.handleInputChange}
            />
            <Button type="primary" onClick={this.handleBtnClick}>Primary</Button>
          </div>
          <List
            style={{width: '300px', marginTop: '10px'}}
            bordered
            dataSource={this.state.list}
            renderItem={(item, index) => <List.Item onClick={this.handleItemDelete.bind(this, index)}>{item}</List.Item>}
          />
        </div>
      </Fragment>
    );
  }
}

export default TodoList;

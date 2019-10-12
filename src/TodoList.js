import React, { Component } from 'react';
//import logo from './logo.svg';
// import TodoItem from './TodoItem.js';
//import { red } from 'ansi-colors';
import './TodoList.css';
import TodoListUI from './TodoListUI';
import store from './store';
import { getInputChangeAction, getItemAddAction, getItemDeleteAction, getInitList } from './store/actionCreators'
class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);
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
  //自悟：事件参数默认是e，要么用箭头函数，要么从第二个开始传值
  handleItemDelete(e, index) {
    console.log(index);
    const action = getItemDeleteAction(index);
    store.dispatch(action);
  }
  render() {
    return (
      <TodoListUI
        inputValue={this.state.inputValue}
        handleInputChange={this.handleInputChange}
        handleBtnClick={this.handleBtnClick}
        list={this.state.list}
        handleItemDelete={this.handleItemDelete}
      />
    );
  }
  componentDidMount() {
    let action = getInitList();
    store.dispatch(action);
  }
}

export default TodoList;

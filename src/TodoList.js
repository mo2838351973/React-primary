import React, { Component } from 'react';
//import logo from './logo.svg';
import TodoItem from './TodoItem.js'
class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [
        'Learn English',
        'Learn Chinese',
        'Learn Franch'
      ],
      iptValue:''
    }
    this.handleDelete = this.handleDelete.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.handleIptValue = this.handleIptValue.bind(this)
  }
  handleIptValue(e){
    this.setState({
      iptValue:e.target.value
    })
  }
  handleBtnClick(){
    this.setState({
      list:[...this.state.list,this.state.iptValue],
      iptValue:''
    })
  }
  handleItemClick(index){
    let list = [...this.state.list]
    list.splice(index,1)
    this.setState({
      list:list
    })
  }
  handleDelete(index){
    let list = [...this.state.list]
    list.splice(index,1)
    this.setState({
      list:list
    })
  }
  render() {
    return (
     <div>
       <div>
         <input type="text" value={this.state.iptValue} onChange={this.handleIptValue} />
         <button onClick={this.handleBtnClick}>Add</button>
       </div>
       <ul>
         {
           this.state.list.map((item,index)=>{
             return <TodoItem key={index} content={item} index={index} handleDelete={this.handleDelete}/>
           })
         }
       </ul>
     </div>
    );
  }
}

export default TodoList;

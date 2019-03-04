import React, { Component } from 'react';
//import logo from './logo.svg';

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
  render() {
    return (
     <div>
       <div>
         <input type="text" value={this.state.iptValue} onChange={this.handleIptValue.bind(this)} />
         <button onClick={this.handleBtnClick.bind(this)}>Add</button>
       </div>
       <ul>
         {
           this.state.list.map((item,index)=>{
             return <li key={index} onClick={this.handleItemClick.bind(this,index)}>{item}</li>
           })
         }
       </ul>
     </div>
    );
  }
}

export default TodoList;

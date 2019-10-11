import React from 'react';
import { Input, Button, List } from 'antd';
import 'antd/dist/antd.css';
//无状态组件 => { 就是一个函数。跟普通的UI组件（是个生命周期函数）相比性能比较高，当UI组件只有一个render函数,只负责组件渲染的时候很适合使用无状态组件}
const TodoListUI = (props) => {
  return (
    <div style={{marginTop: '10px'}}>
      <div>
        <Input 
          placeholder="todo info" 
          value={props.inputValue} 
          style={{width: '300px', marginRight: '10px'}}
          onChange={props.handleInputChange}
        />
        <Button type="primary" onClick={props.handleBtnClick}>Primary</Button>
      </div>
      <List
        style={{width: '300px', marginTop: '10px'}}
        bordered
        dataSource={props.list}
        renderItem={(item, index) => (<List.Item onClick={(item) => {props.handleItemDelete(this, index)}}>{item}</List.Item>)}
      />
    </div>
  )
}
//普通的UI组件
// class TodoListUI extends Component {
//   render() {
//     return (
//       <Fragment>
//         <div style={{marginTop: '10px'}}>
//           <div>
//             <Input 
//               placeholder="todo info" 
//               value={this.props.inputValue} 
//               style={{width: '300px', marginRight: '10px'}}
//               onChange={this.props.handleInputChange}
//             />
//             <Button type="primary" onClick={this.props.handleBtnClick}>Primary</Button>
//           </div>
//           <List
//             style={{width: '300px', marginTop: '10px'}}
//             bordered
//             dataSource={this.props.list}
//             renderItem={(item, index) => (<List.Item onClick={(item) => {this.props.handleItemDelete(this, index)}}>{item},,,,{index}</List.Item>)}
//           />
//         </div>
//       </Fragment>
//     )
//   }
// }
export default TodoListUI;
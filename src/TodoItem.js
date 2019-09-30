import React, {Component} from 'react';
import PropTypes from 'prop-types'

class TodoItem extends Component {
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    render(){
        let {content, test} = this.props;
        return (
            <li onClick={this.handleClick}>{test} - {content}</li>
        )
        //JSX语法（为了写起来更简洁） -> createElement  ->  虚拟DOM（JS对象） -> 真实DOM
        // return React.createElement('li', {}, 'item')
    }
    
    handleClick(){
        let {index,deleteItem} = this.props;
        deleteItem(index);
    }
    //一个组件要从父组件接收参数
    //如果这个组件第一次存在于父组件中，不会执行
    //如果这个组件之前已经存在与父组件中，才会执行
    componentWillReceiveProps() {
      console.log('child componentWillReceiveProps')
    }
    componentWillUnmount(){
        console.log('child componentWillUnmount')
    }
    shouldComponentUpdate(nextProps, nextState){
      if(nextProps.content === this.props.content){
        return false;
      } else {
        return true;
      }
    }
}
TodoItem.propTypes = {
    test: PropTypes.string.isRequired,
    content: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),//PropTypes.arrayOf(PropTypes.number, PropTypes.string)
    deleteItem: PropTypes.func,
    index: PropTypes.number
}
TodoItem.defaultProps = {
    test: 'hello word'
}
export default TodoItem;
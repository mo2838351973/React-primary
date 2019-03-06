import React from 'react'

class TodoItem extends React.Component {
    constructor(props){
        super(props)
        this.handleDelete = this.handleDelete.bind(this)
    }
    render(){
        let {content} = this.props
        return (
            <li onClick={this.handleDelete}>{content}</li>
        )
    }
    handleDelete(){
        let {index,handleDelete} = this.props;
        handleDelete(index)
    }
}
export default TodoItem;
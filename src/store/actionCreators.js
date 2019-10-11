import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_LIST_ACTION } from './actionTypes';
import axios from 'axios';

export const getInputChangeAction = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value
})
export const getItemAddAction = () => ({
  type: ADD_TODO_ITEM
})
export const getItemDeleteAction = (index) => ({
  type: DELETE_TODO_ITEM,
  index
})
export const initListAction = (data) => ({
  type: INIT_LIST_ACTION,
  data
})
//悟：获取ajax的代码不放在组件的生命周期函数里，不仅能避免使组件越来越大，而且会使自动化测试更简单
//redux-thunk的功劳：支持返回函数，且函数会自执行
export const getTodoList = () => {
  return (dispatch) => {
    axios.get('/list.json').then((res) => {
      console.log(res);
    }).catch((err) => {
      console.log(err)  
      let data = ['huanhuan','lele','longlong'];
      const action = initListAction(data);
      dispatch(action);
    })
  }
}
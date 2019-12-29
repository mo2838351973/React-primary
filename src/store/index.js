
import { createStore } from 'redux';
import reducer from './reducer';
// 根据reducer函数通过createStore()创建store
const store = createStore(reducer)

export default store;
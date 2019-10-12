import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { GET_INIT_LIST } from './actionTypes'
import { initListAction } from './actionCreators'
import axios from 'axios';

function* getInitList() {
  try{
    const res = yield axios.get('/list.json');
    const action = initListAction(res);
    yield put(action);
  } catch(e) {
    let data = ['huanhuan','lele','longlong'];
    const action = initListAction(data);
    yield put(action);
  }
  
}

//必须是gegerator函数
function* mySaga() {
  yield takeEvery(GET_INIT_LIST, getInitList);
}

export default mySaga;
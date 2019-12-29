import React from 'react';
import PropTypes from 'prop-types'   //类型检查
import { connect } from 'react-redux';
import { increaseAction } from './store/actionCreators';

class Counter extends React.Component {
  render() {
    const { value, onIncreaseClick } = this.props
    return (
      <div>
        <span>{value}</span>
        <button onClick={onIncreaseClick}> +1</button>
      </div>
    )
  }
}
//对Counter组件接受的props进行类型检查
Counter.propTypes = {
  value: PropTypes.number.isRequired,   //要求数字类型，没有提供会警告
  onIncreaseClick: PropTypes.func.isRequired //要求函数类型
}

const mapStateToProps = (state) => {
  return {
    value: state.count
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onIncreaseClick: () => dispatch(increaseAction)
  }
}
const VisibleCounter = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
export default VisibleCounter;
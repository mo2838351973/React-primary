import styled from 'styled-components';
import logoPic from '../../static/jianshu.jpeg';

export const HeaderWrapper = styled.div `
  height: 358px;
  border-bottom: 1px solid #eee;
`
export const Logo = styled.a.attrs({
  href: '/'
}) `
  position: absolute;
  top:0;
  left: 0;
  display: block;
  width: 100px;
  height: 56px;
  background:  url(${logoPic});
  background-size: contain;
`
export const Nav = styled.div `
  width: 960px;
  height: 100%;
  margin: 0 auto;
  background: green;
`
import React, { FC } from 'react';
import { NavBar, TabBar } from 'antd-mobile'
import {
  Route,
  Routes,
  MemoryRouter as Router,
} from 'react-router-dom'
// import styled from 'styled-components';

import Bottom from 'components/Bottom';
import './styles/App.less'



function App () {
  return (
    <Router initialEntries={['/home']}>
      <div className="app">
        <div className="top">
          <NavBar>配合路由使用</NavBar>
        </div>
        <div className="body">
          <Routes>
            <Route path='/tag' element={<Tags />}/>
            <Route path='/money' element={<Money />} />
            <Route path='/statistics' element={<Statistics />} />
            <Route path='/me' element={<NoMatch />}/>
          </Routes>
        </div>
        <div className="bottom">
          <Bottom />
        </div>
      </div>
    </Router>
  )
}

function NoMatch() {
  return (
    <div>页面不存在,你丫输错地址了吧！</div>
  );
}

function Statistics() {
  return (
    <div>统计页</div>
  );
}

function Tags() {
  return <div>标签页</div>
}

function Money() {
  return <div>记账页</div>
}
export default App;

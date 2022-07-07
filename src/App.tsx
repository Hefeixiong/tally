import React from 'react';
import { NavBar} from 'antd-mobile'
import {
  Route,
  Routes,
  MemoryRouter as Router,
} from 'react-router-dom'
import  './styles/App.scss'
import Bottom from 'components/Bottom';
import Money from './views/Money';
import Statistics from './views/Statistics';
import Tags from './views/Tags';
import NoMatch from './views/NoMatch';

function App () {
  return (
    <Router initialEntries={['/money']}>
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

export default App;

import React from 'react';
import { 
  HashRouter as Router,
  Routes,
  Route,
  Link,
  // Redirect
 } from 'react-router-dom';
import styled from 'styled-components';


const Wrapper = styled.div`
  height: 100hv;
  display: flex;
  flex-direction: column;
`;

const Main = styled.div`
  flex-grow: 1;
  overflow: auto;
`;

const Nav = styled.div`
  border: 1px solid  blue;
  > ul {
    dispaly: flex;
    > li {
      width: 33.333%;
      text-align: center;
      padding: 16px;
    }
  }
`;

function App() {
  return (
    <Router>
       <Wrapper>
         <Main>
          <Routes>
             <Route path="/tags" element={<Tags />} />
             <Route path="/money"  element={<Money/>} />
             <Route path="/statistics" element={<Statistics/>} />
             <Route path="*" element={<NoMatch/>} />
          </Routes>
         </Main>
         <Nav>
           <ul>
             <li>
               <Link to="/tags">标签页</Link>
             </li>
             <li>
               <Link to="/money">记账页</Link>
             </li>
             <li>
               <Link to="/statistics">统计页</Link>
             </li>
           </ul>
         </Nav>
       </Wrapper>
     </Router>
   );
}

function NoMatch() {
  return (
    <div>页面不存在,你丫输错地址了吧！</div>
  );
}

function Statistics() {
  return (
    <h2>统计页</h2>
  );
}

function Tags() {
  return <h2>标签页</h2>
}

function Money() {
  return <h2>记账页</h2>
}
export default App;

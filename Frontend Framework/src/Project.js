import React from 'react';
import './index.css';
import List from './List';
import './List.css'

import App from './App1';
import App2 from './App2';
import App3 from './App3';
import { Routes , Route} from 'react-router-dom'


function Project() {
  return (
  <>
  <List/>
<Routes>
  <Route path='/project1' element={<App/>}/>
  <Route path='/project2' element={<App2/>}/>
  <Route path='/project3' element={<App3/>}/>
</Routes>
</>
  );
}
export default Project ;
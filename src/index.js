import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import  {BrowserRouter} from "react-router-dom"
import User from './User'


ReactDOM.render(
   <>
      <BrowserRouter>
         <User />
      </BrowserRouter>
  </>
  ,
  document.getElementById('root')
);

//serviceWorker.unregister();
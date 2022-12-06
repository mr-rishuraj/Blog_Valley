import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import WriterBlogs from './components/Home/Writer/writerpage';
import Blog from './pages/Blog';
import Home from './pages/Home';


const App = () => {
  return (

    <div className="">
    <div className='container'>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/blog/:id' component={Blog} />
        <Route path='/blog/:id' component={Blog} />
        <Route path='/writer' component={WriterBlogs} />
        <Redirect to='/' />
      </Switch>
      {/* <WriterBlogs /> */}
    </div>
    </div>

  );
};


export default App;

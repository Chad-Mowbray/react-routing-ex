import './App.css';
import Blog from './components/Blog';
import Home from './components/Home';
import About from './components/About';
import BlogDetail from './components/BlogDetail';
import {BrowserRouter, Link, Switch, Route} from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <Link to="/">Home</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/about">About</Link>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/blog">
          <Blog />
        </Route>
        <Route path="/blog/:postId">
          <BlogDetail />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>

    </BrowserRouter>

  );
}

export default App;

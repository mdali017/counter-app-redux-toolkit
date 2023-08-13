import logo from './logo.svg';
import './App.css';
import CounterView from './features/counter/CounterView';
import PostsView from './features/posts/PostsView';

function App() {
  return (
    <div className="App">
      <h1>Counter App: Redux-Toolkit</h1>
      <CounterView></CounterView>
      <PostsView></PostsView>
    </div>
  );
}

export default App;

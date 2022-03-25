import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
class App extends Component {
  state = { 
    posts: [
      {
        id: 1,
        title: 'O Titulo 1',
        body: 'o corpo 1'
      },
      {
        id: 2,
        title: 'O Titulo 2',
        body: 'o corpo 2'
      },
      {
        id: 3,
        title: 'O Titulo 3',
        body: 'o corpo 3'
      },  
    ]
  };
  render(){
    const { posts } = this.state;
    return (  
          <div className="App">
            {posts.map(post => (
            <div key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            </div>
            ))}
          </div>
      );
    }
  }
export default App;

import { Component } from "react";
import './App.css';
//컴포넌트 생성 템플릿이라 생각하면 된다.

class Subject extends Component{
  render(){
    return(
      <header>
        <h1>WEB</h1>
        world wide web!
      </header>
    );
  }
  //모든 함수에는 function이 들어가야하나.
  //리액트에선 클래스 안에 있는 함수는 function 생략가능
  //태그는 하나만 가능(최상의)
}

class TOC extends Component{
  render(){
    return(
      <nav>
        <ul>
            <li><a href ="1.html">HTML</a></li>
            <li><a href ="2.html">HTML</a></li>
            <li><a href ="3.html">HTML</a></li>
        </ul>
    </nav>
    );
  }
}

class Content extends Component{
  render(){
    return(
      <article>
        <h2>HTML</h2>
        HTML is HyperText Markup Laguage.
      </article>
    );
  }
}

class App extends Component {
  render(){
  return (
      <div className="App">
        <Subject></Subject>
        <TOC></TOC>
        <Content></Content>
      </div>
    );
  }
}
export default App;

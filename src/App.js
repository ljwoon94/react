import { Component } from "react";
import './App.css';
//컴포넌트 생성 템플릿이라 생각하면 된다.

class Subject extends Component{
  render(){
    return(
      <header>
        <h1>{this.props.title}</h1>
        {this.props.sub}
        {/* props는 태그(attribute)를 대신한다.
            {}는 jsx
        */}
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
        <h2>{this.props.title}</h2>
        {this.props.doc}
      </article>
    );
  }
}

class App extends Component {
  render(){
  return (
      <div className="App">
        <Subject title="WEB" sub="word wide web"></Subject>
        {/* WEB과 word wide web 는 attribute 속성
            this.props.name을 사용하면 된다.
            jsx도 사용해야한다.
        */}
        <Subject title="React" sub="For UI"></Subject>
        <TOC></TOC>
        <Content title="HTML" doc="HTML is HyperText Markup Laguage."></Content>
      </div>
    );
  }
}
export default App;

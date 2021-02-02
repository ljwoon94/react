import React,{ Component } from "react";
import TOC from "./components/TOC";
import Content from "./components/Content";
import Subject from "./components/Subject";

// 컴포넌트 생성 템플릿이라 생각하면 된다.

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

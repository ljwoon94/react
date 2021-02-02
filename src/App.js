import React,{ Component } from "react";
import TOC from "./components/TOC";
import Content from "./components/Content";
import Subject from "./components/Subject";

// 컴포넌트 생성 템플릿이라 생각하면 된다.

class App extends Component {
  constructor(props){
    //constructor는 props를 사용하기 위해 필요
    super(props);
    // props 초기화
    //컴포넌트가 실행될때 render()보다 먼저 실행되 초기화를 담당
    this.state ={
      subject:{title:'WEB',sub:'World Wide Web!'}
    }
  }
  render(){
  return (
      <div className="App">
        <Subject 
          title={this.state.subject.title} 
          sub={this.state.subject.sub}>
        </Subject>
        {/* WEB과 word wide web 는 attribute 속성
            this.props.name을 사용하면 된다.
            jsx도 사용해야한다.
            props 외부 사용자가 중요한 정보
            state 내부 개발자가 중요한 정보
        */}
        {/* <Subject title="React" sub="For UI"></Subject> */}
        <TOC></TOC>
        <Content title="HTML" doc="HTML is HyperText Markup Laguage."></Content>
      </div>
    );
  }
}
export default App;

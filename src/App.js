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
      mode:'read',
      // 페이지가 어디 경로인지 확인용으로 mode를 만듦
      subject:{title:'WEB',sub:'World Wide Web!'},
      welcome:{title:'welcome', desc:'Hello,React!!'},
      contents:[
        {id:1, title:'HTML',desc:'HTML is for information ...'},
        {id:2, title:'CSS',desc:'CSS is for design ...'},
        {id:3, title:'JavaScript',desc:'JavaScript is for interactive ...'}
      ]
    }
  }
  render(){
    console.log('App render')
    let _title, _desc = null;
    if(this.state.mode ==='welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;

    }else if(this.state.mode ==='read'){
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
    }
    return (
      <div className="App">
        {/* <Subject 
          title={this.state.subject.title} 
          sub={this.state.subject.sub}>
        </Subject> */}
        <header>
          <h1><a href ="/" onClick={function(e){
            e.preventDefault();
            // a 태그를 막을때 사용
            this.setState({
              mode:'welcome'
            });
            // state 값을 바꿀땐 setState
          }.bind(this)}>{this.state.subject.title}</a></h1>
          {/* .bind(this)는 state값을 못찾는다고 오류가 뜰때 사용 */}
          {this.state.subject.sub}
        </header>
        {/* WEB과 word wide web 는 attribute 속성
            this.props.name을 사용하면 된다.
            jsx도 사용해야한다.
            props 외부 사용자가 중요한 정보
            state 내부 개발자가 중요한 정보
        */}
        {/* <Subject title="React" sub="For UI"></Subject> */}
        <TOC data= {this.state.contents}></TOC>
        <Content title={_title} desc={_desc}></Content>
      </div>
    );
  }
}
export default App;

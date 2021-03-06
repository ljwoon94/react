import React,{ Component } from "react";
import TOC from "./components/TOC";
import Control from "./components/Control";
import Subject from "./components/Subject";
import ReadContent from "./components/ReadContent";
import CreateContent from "./components/CreateContent";
import UpdateContent from "./components/UpdateContent";
// 컴포넌트 생성 템플릿이라 생각하면 된다.


class App extends Component {
  constructor(props){
    //constructor는 props를 사용하기 위해 필요
    super(props);
    // props 초기화
    //컴포넌트가 실행될때 render()보다 먼저 실행되 초기화를 담당
    this.max_content_id = 3;
    //데이터를 추가할때 사용하는 변수 state에 넣을 필요가ㅏ 없다.
    this.state = {
      mode:'welcome',
      // 페이지가 어디 경로인지 확인용으로 mode를 만듦
      selected_content_id:2,
      subject:{title:'WEB', sub:'World Wide Web!'},
      welcome:{title:'Welcome', desc:'Hello, React!!'},
      contents:[
        {id:1, title:'HTML', desc:'HTML is for information'},
        {id:2, title:'CSS', desc:'CSS is for design'},
        {id:3, title:'JavaScript', desc:'JavaScript is for interactive'}
      ]
    }
  }
  getReadContent(){
    var i = 0;
      while(i < this.state.contents.length){
        var data = this.state.contents[i];
        if(data.id === this.state.selected_content_id) {
          return data;
          break;
        }
        i = i + 1;
      }
  }
  getContent(){
    var _title, _desc, _article = null;
    if(this.state.mode ===  'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>
    } else if(this.state.mode === 'read'){
      var _content = this.getReadContent();
      _article = <ReadContent title={_content.title} desc={_content.desc}></ReadContent>
    } else  if(this.state.mode === 'create'){
      _article = <CreateContent onSubmit={function(_title, _desc){
        // add content to this.state.contents
        this.max_content_id = this.max_content_id+1;
        // this.state.contents.push(
        //   {id:this.max_content_id, title:_title, desc:_desc}
        // );
        // var _contents = this.state.contents.concat(
        //     {id:this.max_content_id, title:_title, desc:_desc}
        //   );
        //push랑 concat의 차이
        //push는 배열 원본을 바꾸는거면 concat은 배열원본을 그대로 두고 추가하는것이다.
        var _contents = Array.from(this.state.contents);
        _contents.push({id:this.max_content_id, title:_title, desc:_desc});
        this.setState({
          contents:_contents,
          mode:'read',
          selected_content_id:this.max_content_id
        });
      }.bind(this)}></CreateContent>
    } else  if(this.state.mode === 'update'){
      _content = this.getReadContent();
      _article = <UpdateContent data={_content} onSubmit={
        function(_id, _title, _desc){
          var _contents = Array.from(this.state.contents);
          var i = 0;
          while(i < _contents.length){
            if(_contents[i].id === _id) {
              _contents[i] = {id:_id, title:_title, desc:_desc};
              break;
            }
            i = i + 1;
          }
          this.setState({
            contents:_contents,
            mode:'read'
          });
        }.bind(this)}></UpdateContent>
    }
    return _article;
  }
  render() {
    console.log('App render');
    return (
      <div className="App">
        <Subject 
          title={this.state.subject.title} 
          sub={this.state.subject.sub}
          onChangePage={function(){
            this.setState({mode:'welcome'});
          }.bind(this)}
          // onChangePage 컴포넌트안에 클릭을 했을시 함수를 호출하는 이벤트
        >
        </Subject>
        {/* <header>
          <h1><a href ="/" onClick={function(e){
            e.preventDefault();
            // a 태그를 막을때 사용
            this.setState({
              mode:'welcome'
            });
            // state 값을 바꿀땐 setState
          }.bind(this)}>{this.state.subject.title}</a></h1>
              .bind(this)는 state값을 못찾는다고 오류가 뜰때 사용
              함수.bind(변수)는 함수와 변수를 묶어줌. 함수에서 this를 사용해
              변수를 찾지 못할때 사용하면 굿
          
          </div>{this.state.subject.sub}
        </header> */}
        {/* WEB과 word wide web 는 attribute 속성
            this.props.name을 사용하면 된다.
            jsx도 사용해야한다.
            props 외부 사용자가 중요한 정보
            state 내부 개발자가 중요한 정보
        */}
        {/* <Subject title="React" sub="For UI"></Subject> */}
        <TOC 
          onChangePage={function(id){
            this.setState({
              mode:'read',
              selected_content_id:Number(id)
            });
          }.bind(this)} 
          data={this.state.contents}
        ></TOC>
        <Control onChangeMode={function(_mode){
          if(_mode === 'delete'){
            if(window.confirm('really?')){
              var _contents = Array.from(this.state.contents);
              var i = 0;
              while(i < _contents.length){
                if(_contents[i].id === this.state.selected_content_id){
                  _contents.splice(i,1);
                  break;
                }
                i = i + 1;
              }
              this.setState({
                mode:'welcome',
                contents:_contents
              });
              alert('deleted!');
            }
          } else {
            this.setState({
              mode:_mode
            });
          }
          
        }.bind(this)}></Control>
        {this.getContent()}
      </div>
    );
  }
}

export default App;

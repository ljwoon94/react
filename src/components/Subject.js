import React, { Component } from "react";



class Subject extends Component{
    render(){
      return(
        <header>
          <h1><a href ="/">{this.props.title}</a></h1>
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

export default Subject;
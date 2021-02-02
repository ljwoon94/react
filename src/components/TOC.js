import React,{Component} from 'react';



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

export default TOC;
// export default TOC;는 TOC 클래스를 다른 클래스에 사용가능하게 한다.
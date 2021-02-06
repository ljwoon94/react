import React,{Component} from 'react';



class TOC extends Component{
    shouldComponentUpdate(newProps, newState){
        console.log(newProps.data ,this.props.data);
        if(this.props.data === newProps.data){
            return false;
        }
        return true;
        // render()함수보다 먼저 실행된다
        // false면 render()가 실행되지 않는다.
        // 2개의 매게변수가 필요하다.
        // this.props.data 이전값
        // newProps.data 바뀐값
        // 이전값과 바뀐값이 다르면 render가 실행된다.
        // concat일때만 가능 push로 하면 이전값과 바뀐값이 같아진다.

    }
    render(){
        let lists =[];
        let data = this.props.data;
        let i =0;
        while(i<data.length){
            lists.push(
                <li key={data[i].id}>
                    <a
                        href ={"/content/"+data[i].id}
                        data-id={data[i].id}
                        onClick={function(e){
                            e.preventDefault();
                            this.props.onChangePage(e.target.dataset.id);
                        }.bind(this)}
                    >{data[i].title}</a>
                </li>);
            // <li key={data[i].id}도 반드시 입력
            i=i+1;
        }
        return(
        <nav>
          <ul>
              {lists}
          </ul>
        </nav>
        );
    }
}

export default TOC;
// export default TOC;는 TOC 클래스를 다른 클래스에 사용가능하게 한다.
import React,{Component} from 'react';



class TOC extends Component{
    render(){
        let lists =[];
        let data = this.props.data;
        let i =0;
        while(i<data.length){
            lists.push(
                <li key={data[i].id}>
                    <a
                        href ={"/content/"+data[i].id}
                        // data-id={data[i].id}
                        onClick={function(id, e){
                            e.preventDefault();
                            this.props.onChangePage(e.target.dataset.id);
                        }.bind(this,data[i].id)}
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
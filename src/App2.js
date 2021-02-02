class Header extends Component{
  render(){
    return(
      <header>
        <h1>{this.props.title}</h1>
        {this.props.desc}
      </header>
    );
  }
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

class Content extends Componenet{
  render(){
    return(
      <article>
        <h2>HTML</h2>
        HTML is HyperText Markup Laguage.
      </article>  
    );
  }
}

class App2 extends Component{
  render(){
    return(
      <div>
        <Header title="WEB" desc="world wide web"></Header>
        <TOC></TOC>
        <Content title="HTML" desc="HTML is HyperText Markup Laguage."></Content>
      </div>
    );
  }
}
export default App2
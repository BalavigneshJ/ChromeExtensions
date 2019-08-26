/*global chrome*/
import React from 'react' ;
import SiteGroup from './sitegroup' ;


class App extends React.Component {

  constructor(props) {
    super(props) ;
    this.state = {tree : [] }
  }

  componentDidMount(){
    let tree  ;
    let base = this ;
    chrome.bookmarks.getTree(function(item){
      tree = item[0].children ;
      base.setState({tree : tree});
    }); 
  }

  render() {

    return (
    <div>
    {
       this.state.tree.map((site , i) => {
          return(<SiteGroup key={i} site={site} className={"mainGroup"+i}/>)
       })
    }
    </div>
  );

  }
}


export default App;

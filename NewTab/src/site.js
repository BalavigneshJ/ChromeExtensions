import React from 'react' ;
import SiteGroup from './sitegroup' ;

function Site(props) {
 

  if(props.child.children){
    return(<SiteGroup site={props.child} />);
  }else{
    return (
      <div>
        <div className="site">
          <div className="title">{props.child.title}</div>
          <a href={props.child.url}> {props.child.url} </a>
        </div>
      </div>
    );
  }
}

export default Site;

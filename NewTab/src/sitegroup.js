import React from 'react' ;
import Site from './site' ;

function SiteGroup(props) {


  return(
  	<div className={props.className ? props.className : "siteGroup"}>
      	<div className="siteTitle">{props.site.title}</div>
      	{	
      		props.site.children.map((child ,j) => {
          		return(
          			<Site key= {j} child = {child} />
          		)
      		})
      	}
  	</div>
  );

}

export default SiteGroup;

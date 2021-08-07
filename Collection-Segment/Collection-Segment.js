import React from 'react'
import { withRouter} from 'react-router-dom';

 function CollectionSegment({id,title,url,history,match,linkUrl}) {
    return (
              <div onClick={()=>history.push(`${match.url}${linkUrl}`)}>
                <h1>{title}</h1>
                <div className="card" key={id}>
                <div className="image" style={{  
                backgroundImage: `url(${url})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
                }}></div>
                <button className="card-button">Shop Now</button>
            </div>
            </div>
    )
}

export default withRouter(CollectionSegment)



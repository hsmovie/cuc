import React from 'react';
import { Button, Icon, Label } from 'semantic-ui-react';
import _ from 'lodash';
const Rsvp = ({index, rsvp, handleDelete }) => {
//     const CardExampleGroups = () => (
        
//     <div className="card-wrapper">
//         <div className="card-content">
//             <div className="card-header">
//                 <b>아침세션</b>
//             </div>
            
//             <div className="card-date">
//                 2017/02/24 Monday
//             </div>
            
//             <div className="card-footer">
//                  <Button basic color="teal">Go!</Button>
//                  <Label color="pink">
//                      <Icon name="users"/> 23+
//                  </Label>
//             </div>
//         </div>
//     </div>
// );

// const renderPosts = () => {
//     const {handleDelete} = this;
//     return _.map(this.props.rsvps, (rsvp, key) => {
//       return (
//           <li key={key}>
//             <p>{rsvp.title}</p>
//             <p>{rsvp.body}</p>
//             <button onClick={() => handleDelete(key)}>DELETE</button>
//             <hr/>
//           </li>
//       );
//     });
//   }
if(rsvp === null){
    return <div></div>
}else{
    return (
        <div key={rsvp.toString()}>
            <p>{rsvp.title}</p>
            <p>{rsvp.body}</p>
            <button onClick={handleDelete}>DELETE</button>
            <hr/>
        </div>
    );
}
    
};

export default Rsvp;
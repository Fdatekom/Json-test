import React from 'react';

function isLoader (Component) {
   return class  extends React.Component {
      
        render (){
             return ( <div>
                 { this.props.isLoad ? <Component {...this.props} /> : <div> Загрузка </div> }
             </div>)
        }
    }
}
export default isLoader;
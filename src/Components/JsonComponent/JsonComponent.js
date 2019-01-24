import React, { Component } from 'react';
import withLoader from '..//hoc/isLoader.js';

 class JsonComponent extends Component {
    constructor(props){
        super(props)
        this.state ={
            count: 1
        }
    }

    render (){
        return ( <div>
            {this.props.items.map((item, idx)=> <div key={idx} id={item.id}> email: {item.email}  <br />  name: {item.name} <br /> text: {item.body}  <br /> <br/> </div> )}
            <button onClick={this.props.onSend}>Watch more</button> <br />
            <button onClick={this.props.onRemove}>Del All</button> <br />

        </div>)
    }

 
}
export default  withLoader(JsonComponent)
import React, { Component } from 'react';

export default class JsonComponent extends Component {
    constructor(props){
        super(props)
        this.state ={
            count: 1
        }
    }
    
    render (){
        console.log(this.props.items)
        return ( <div>
            {this.props.items.map((item, idx)=> <div key={idx} id={item.id}> email: {item.email}  <br />  name: {item.name} </div> )}
            <button onClick={this.props.onSend}>Watch more</button> <br />
            <button onClick={this.props.onRemove}>Del All</button> <br />

        </div>)
    }


}
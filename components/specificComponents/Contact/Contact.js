import React, { Component } from "react";

export default class Contact extends Component {
    constructor(props) {
        super(props);
    }

    render() { 
        return (
            <div>                
                Contact: {this.props.blok.title}
                 <div 
                  dangerouslySetInnerHTML={{ __html: this.props.blok.mapEmbed }} 
                />
            </div>    
        );
    }
}



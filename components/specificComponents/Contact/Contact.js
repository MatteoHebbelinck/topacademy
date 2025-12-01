import React, { Component } from "react";
import css from "./Contact.module.scss";
import Headermenu from "../../genericComponents/Headermenu/Headermenu";
import Hero from "../../genericComponents/Hero/Hero";
import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import { RichTextToHTML } from "../../../functions/storyBlokRichTextRenderer";
import List from "../../genericComponents/List/List";

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



import React from "react";
import { storyblokEditable } from "@storyblok/react";

export default function Colorcode({ blok }) {
  return (
    <div {...storyblokEditable(blok)}>
      {blok.title}
    </div>
  );
}

import React from "react";
import { storyblokEditable } from "@storyblok/react";
import css from "./ImageWithText.module.scss";

export default function ImageWithText({ blok }) {
    const image = blok.image?.filename;

    return (
        <div {...storyblokEditable(blok)} className={css["imagewithtext"]}>
            {image && (
                <img
                    src={blok.image.filename}
                    alt={blok.image.alt || ""}
                    className={css["imagewithtext__image"]}
                />
            )}
        </div>
    );
}

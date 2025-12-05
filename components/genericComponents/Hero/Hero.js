import { storyblokEditable } from "@storyblok/react";
import React from "react";
import css from "./Hero.module.scss";
import PropTypes from "prop-types";
import { RichTextToHTML } from "../../../functions/storyBlokRichTextRenderer";

export default function Hero({ blok }) {

  const titleString =
    typeof blok.title === "string" ? blok.title : undefined;

  const taglineString =
    typeof blok.tagline === "string" ? blok.tagline : undefined;

  const backgroundImage = blok.image?.filename
    ? `url(${blok.image.filename})`
    : "none";

  return (
    <section
      {...storyblokEditable(blok)}
      className={css.hero}
      style={{
        backgroundImage,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >

      {/* GLASS PANEL */}
      <div className={css.glassPanel}>
        {blok.supertitle && (
          <p className={css.supertitle}>{blok.supertitle}</p>
        )}

        <h1 className={css.title}>
          {titleString || RichTextToHTML({ document: blok.title })}
        </h1>

        <p className={css.subtitle}>
          {taglineString}
        </p>
      </div>

    </section>
  );
}

Hero.propTypes = {
  blok: PropTypes.object,
};

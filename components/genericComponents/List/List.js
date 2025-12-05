import React from "react";
import Link from "next/link";
import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import css from "./List.module.scss";

export default function List({ blok }) {
  return (
    <section
      {...storyblokEditable(blok)}
      className={css["list"]}
    >
      {/* Titel */}
      {blok.title && (
        <h2 className={css["list__title"]}>{blok.title}</h2>
      )}

      {/* Afbeelding */}
      {blok.image?.filename && (
        <img
          src={blok.image.filename}
          alt={blok.image.alt || blok.title || "list image"}
          className={css["list__image"]}
        />
      )}

      {/* Description Richtext */}
      {blok.description && (
        <div className={css["list__description"]}>
          <StoryblokComponent blok={blok.description} />
        </div>
      )}

      {/* Elements lijst */}
      <ul className={css["list__items"]}>
        {blok.elements?.map((story) => {
          const content = story.content || story;
          const href = `/${story.full_slug || story.slug || ""}`;

          return (
            <li
              key={story.uuid || story._uid}
              className={css["list__item"]}
            >
              <Link href={href}>
                <a className={css["list__link"]}>
                  {content.title || story.name}
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

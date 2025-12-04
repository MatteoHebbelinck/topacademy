import React from "react";
import css from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={css.footer}>
      <p>© {new Date().getFullYear()} Creating Value With Fries</p>
    </footer>
  );
}

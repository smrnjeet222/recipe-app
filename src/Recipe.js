import React from "react";
import style from "./recipe.module.css";
import { v4 as uuid } from "uuid";

export default function Recipe({ title, cal, img, ingrs, url }) {
  return (
    <div className={style.recipe}>
      <h1>
        <a
          className={style.title}
          href={url}
          rel="noopener noreferrer"
          target="_blank"
        >
          {title}
        </a>
      </h1>
      <div className={style.cont}>
        <ol className={style.ingr}>
          {ingrs.map((ingr) => (
            <li key={uuid()}>{ingr.text}</li>
          ))}
        </ol>
        <img className={style.image} src={img} alt={`${title}-img`} />
      </div>
      <h4>Calories: {parseInt(cal)}</h4>
    </div>
  );
}

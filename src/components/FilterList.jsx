import React from "react";
import ItemFilterList from "./ItemFilterList";

export default function FilterList({ props }) {
  const { list, locationPath, filterName } = props;

  //console.log(list)

  return (
    <ul>
      {list.map((el, i) => {
        return (
          <ItemFilterList
            props={{ item: el, locationPath, filterName }}
            key={i}
          />
        );
      })}
    </ul>
  );
}

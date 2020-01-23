import React from "react";

const Item = props => (
  <li
    onClick={() => props.changeStatus(props.id)}
    style={props.active ? { fontWeight: "bold" } : { color: "grey" }}
  >
    {props.name}
  </li>
);

export default Item;

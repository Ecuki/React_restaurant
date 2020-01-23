import React from "react";
import Item from "./Item.js";
const ListItems = props => {
  const items = props.items.map(item => (
    <Item
      key={item.id}
      id={item.id}
      name={item.content}
      active={item.active}
      changeStatus={props.changeStatus}
    />
  ));
  return (
    <>
      <h1>Twoje zamowienie: </h1>
      <ul>{items}</ul>
    </>
  );
};
export default ListItems;

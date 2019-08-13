// - `<Item />` is a component that takes in the `todo` data and displays the task to the screen.

import React from "react";

const Item = props => {
  return (
    <div
      // className below is for syling the item to mark it out depending on whether or not its complete/purchased
      className={`item${props.item.completed ? ' completed' : ''}`}
      onClick={() => props.toggleItem(props.item.id)}
    >
      <p>{props.item.task}</p>
    </div>
  );
};

export default Item;

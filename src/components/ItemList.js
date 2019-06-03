import React from "react";
import ItemCard from "./ItemCard";
import "./ItemList.css";

const ItemList = props => {
  const renderedList = props.items.map(item => {
    return (
      <ItemCard
        //key={video.id.videoId}
        item={item}
        //onVideoSelect={onVideoSelect}
      />
    );
  });

  return <div className="image-list">{renderedList}</div>;
};

export default ItemList;

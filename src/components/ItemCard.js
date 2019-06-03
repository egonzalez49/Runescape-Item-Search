import React from "react";
import Octicon, { Tag, Check, X } from "@githubprimer/octicons-react";
import { Media } from "reactstrap";

const ItemCard = props => {
  return (
    <div>
      <Media className="item">
        <Media left middle href="#">
          <Media src={props.item.icon_large} alt="Item Icon" />
        </Media>
        <Media body>
          <Media heading>{props.item.name}</Media>
          {props.item.description}
          <div>
            <Octicon icon={Tag} /> {props.item.current.price} GP
          </div>
          <div>
            <Octicon
              className="mr-1"
              icon={props.item.members === "true" ? Check : X}
            />
            {"Members"}
          </div>
        </Media>
      </Media>
    </div>
  );
};

export default ItemCard;

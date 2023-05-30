import React from "react";

//Get the shoe card data from props
// shoeId?
const ShoeCard = ({ shoeId }) => {
  return (
    <div data-testid={`shoe-card-wrapper-${shoeId.id}`}>
      <div>
        <img data-testid="shoe-card-image" src={shoeId.image} alt={shoeId.name} width='100%' />
      </div>
      <div>
        <div data-testid="shoe-name">{shoeId.name}</div>
        <div data-testid="shoe-category">{shoeId.category}</div>
      </div>
    </div>
  );
};

export default ShoeCard;

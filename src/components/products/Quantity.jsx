import React, { useState, useEffect } from "react";

const Quantity = ({ product, onQuantityChange, readOnly = false }) => {
  const [quantity, setQuantity] = useState(0);

  function getCart() {
    const cartStr = localStorage.getItem("cartQuantities");
    if (!cartStr) return {};
    try {
      return JSON.parse(cartStr);
    } catch (error) {
      toast.error("Invalid JSON in localStorage");
      return {};
    }
  }

  function updateCart(product) {
    const cart = getCart();

    if (product.quantity > 0) {
      cart[product.productId] = product;
    } else {
      delete cart[product.productId];
    }

    localStorage.setItem("cartQuantities", JSON.stringify(cart));
    if (onQuantityChange) {
      onQuantityChange();
    }
  }

  const handleIncrease = () => {
    const newQty = quantity + 1;
    setQuantity(newQty);
    updateCart({ ...product, quantity: newQty });
  };

  const handleDecrease = () => {
    const newQty = quantity - 1;
    setQuantity(newQty);
    updateCart({ ...product, quantity: newQty });
  }; 

  const handleAdd = () => {

    setQuantity(1);
    updateCart({ ...product, quantity: 1 });
   
  };

  useEffect(() => {
    const cart = getCart();
    if (cart[product.productId]) {
      setQuantity(cart[product.productId].quantity);
    }
  }, [product]);

  return (
    <div>
      {quantity === 0 ? (
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            handleAdd();
          }}
          className="border cursor-pointer text-[rgb(12,131,31)] border-[rgb(12,131,31)] py-0.5 px-3 rounded-lg"
        >
          ADD
        </button>
      ) : readOnly ? (
        <div className="text-md font-semibold text-center w-10">{quantity}</div>
      ) : (
        <div className="bg-[rgb(12,131,31)] text-white rounded-lg flex gap-2 py-1 px-3">
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              handleDecrease();
            }}
            className="cursor-pointer"
          >
            -
          </button>
          <span className="font-semibold text-md">{quantity}</span>
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              handleIncrease();
            }}
            className="cursor-pointer"
          >
            +
          </button>
        </div>
      )}
    </div>
  );
};

export default Quantity;

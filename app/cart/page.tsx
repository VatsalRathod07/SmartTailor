import React from 'react';

const CartSection = ({ cart }) => {
  return (
    <section className="bg-gray-200 py-5 sm:py-10 px-2 sm:px-5">
      <div className="max-w-7xl mx-auto bg-white p-6">
        <h2 className="text-xl font-semibold mb-4">Shopping Cart</h2>
        <div className="grid grid-cols-1 gap-5">
          {cart.map((item) => (
            <div key={item.id} className="flex items-center border-b-[1px] border-LightGray p-2">
              <img
                src={item.image} // Use the product image from the cart item
                alt={item.name} // Use the product name from the cart item
                className="w-20 h-20 rounded-md mr-4 object-cover"
              />
              <div>
                <p className="text-lg font-medium">{item.name}</p> {/* Use the product name from the cart item */}
                <p className="text-sm text-SlateGray">{item.description}</p> {/* Use the product description from the cart item */}
              </div>
              <div className="ml-auto font-medium">{item.price}</div> {/* Use the product price from the cart item */}
            </div>
          ))}
        </div>
        
        <div className="mt-4 flex justify-end">
          <button className="bg-Charcoal text-white py-2 px-4">
            Checkout
          </button>
        </div>
      </div>
    </section>
  );
};

export default CartSection;
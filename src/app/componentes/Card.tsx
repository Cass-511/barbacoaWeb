// componentes/Card.tsx
import React from "react";

const Card = () => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 text-center">
      <h3 className="text-xl font-bold text-red-800 mb-2">100% Tradicional</h3>
      <p className="text-gray-600">
        Nuestra barbacoa es cocinada a fuego lento con leña, como dicta la tradición mexicana.
      </p>
    </div>
  );
};

export default Card;

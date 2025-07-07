// componentes/Tabla.tsx
import React from "react";

const Tabla = () => {
  return (
    <div className="overflow-x-auto mt-6">
      <table className="min-w-full bg-white border border-gray-300 text-left">
        <thead className="bg-red-800 text-white">
          <tr>
            <th className="py-2 px-4 border">Platillo</th>
            <th className="py-2 px-4 border">Precio</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-2 px-4 border">Taco de Barbacoa</td>
            <td className="py-2 px-4 border">$30</td>
          </tr>
          <tr>
            <td className="py-2 px-4 border">Consomé</td>
            <td className="py-2 px-4 border">$30</td>
          </tr>
          <tr>
            <td className="py-2 px-4 border">Platillo de Barbacoa</td>
            <td className="py-2 px-4 border">$170</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Tabla;

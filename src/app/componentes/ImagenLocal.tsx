import React from "react";

const ImagenLocal = () => {
  return (
    <section className="py-10 px-6 bg-white text-center">
      <h2 className="text-3xl font-bold text-red-800 mb-4">Nuestro Local</h2>
      <p className="text-gray-700 mb-6">
        Así luce el lugar donde preparamos y servimos la mejor barbacoa de chivo.
      </p>

      <div className="max-w-4xl mx-auto rounded-xl overflow-hidden shadow-lg">
        <img
          src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/b1/ee/44/smoked-n-low-bbq-pet.jpg?w=600&h=400&s=1"
          alt="Local de barbacoa"
          className="w-full h-auto object-cover"
        />
      </div>
    </section>
  );
};

export default ImagenLocal;

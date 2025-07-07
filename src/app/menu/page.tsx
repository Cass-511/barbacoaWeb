import React from "react";
import Navbar from "../componentes/Navbar";

interface Platillo {
  nombre: string;
  descripcion: string;
  precio: string;
  imagen: string;
}

const platillos: Platillo[] = [
  {
    nombre: "Taco de Barbacoa",
    descripcion: "Tortilla de maíz con jugosa barbacoa de chivo, cebolla, cilantro y salsa casera.",
    precio: "$30 c/u",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpDn7ZDzAAxvy6MK_ZXK4_YzqsYnlF0DlLnw&s",
  },
  {
    nombre: "Consomé de Chivo",
    descripcion: "Caldito tradicional con patitas y un toque de limón. Ideal para acompañar.",
    precio: "$30",
    imagen: "https://cocina-casera.com/mx/wp-content/uploads/2019/03/birria-estilo-guerrero.jpg",
  },
  {
    nombre: "Platillo de Barbacoa",
    descripcion: "250g de barbacoa acompañada de tortillas, salsa, rábano, cebolla y limón.",
    precio: "$170",
    imagen: "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/OTNM24GRCVDTJHEMSNYFMOGF34.jpg",
  },
  {
    nombre: "Quesabirria",
    descripcion: "Taco dorado con queso derretido y barbacoa estilo birria, con consomé para sumergir.",
    precio: "$40 c/u",
    imagen: "https://img.cdn4dd.com/cdn-cgi/image/fit=cover,width=600,height=400,format=auto,quality=80/https://doordash-static.s3.amazonaws.com/media/store/header/b1eb9761-4096-4dbb-9d84-9eda29830860.jpg",
  },
  {
    nombre: "Cazuela de Barbacoa",
    descripcion: "cazuela de Barbacoa, salsa y cebolla.",
    precio: "$50",
    imagen: "https://preview.redd.it/birria-de-chivo-estilo-jalisco-en-mexicali-b-c-v0-hx9kvnncnqtd1.jpeg?width=1080&crop=smart&auto=webp&s=5f0f7e0164557d0b1e6151d8344075f53bc72197",
  },
  {
    nombre: "Barbacoa por Kilo",
    descripcion: "Perfecta para reuniones. Incluye consomé, tortillas, salsa y chiles en vinagre.",
    precio: "$660 / kg",
    imagen: "https://b2846093.smushcdn.com/2846093/wp-content/uploads/2021/10/Barbacoa-de-Chivo-Acapulco.jpg?lossy=2&strip=1&webp=1",
  },
];

const Menu: React.FC = () => {
  return (
    <>
      <Navbar />

      <section className="bg-white py-10 px-6">
        <h2 className="text-3xl font-bold text-center text-red-800 mb-8">Nuestro Menú</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {platillos.map((platillo, index) => (
            <div
              key={index}
              className="border rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
            >
              <div className="w-full h-52 overflow-hidden">
                <img
                  src={platillo.imagen}
                  alt={platillo.nombre}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold text-red-700">{platillo.nombre}</h3>
                <p className="text-sm text-gray-600 mt-1">{platillo.descripcion}</p>
                <p className="mt-2 text-red-800 font-bold">{platillo.precio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Menu;

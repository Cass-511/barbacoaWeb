import React from "react";
import Navbar from "../componentes/Navbar";
import { FaWhatsapp, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Contacto = () => {
  return (
    <>
      <Navbar />

      <section className="bg-white py-10 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-red-800 mb-4">Contáctanos</h2>
          <p className="text-gray-700 mb-6">
            ¡Estamos para servirte! Puedes hacer pedidos, consultar disponibilidad o dejarnos un mensaje.
          </p>

          <div className="space-y-4 text-left text-gray-800">
            <div className="flex items-center space-x-3">
              <FaWhatsapp className="text-green-500" />
              <span>
                WhatsApp:{" "}
                <a
                  href="https://wa.me/5215555555555"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 underline"
                >
                  744 272 ****
                </a>
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <FaPhoneAlt className="text-blue-600" />
              <span>Teléfono: 744 309 ****</span>
            </div>
            <div className="flex items-center space-x-3">
              <FaEnvelope className="text-red-600" />
              <span>Correo: BarbacoaCambray@gmail.com</span>
            </div>
          </div>

          {/* Formulario opcional */}
          <form className="mt-8 text-left space-y-4">
            <input
              type="text"
              placeholder="Tu nombre"
              className="w-full border px-4 py-2 rounded-lg"
            />
            <input
              type="email"
              placeholder="Tu correo"
              className="w-full border px-4 py-2 rounded-lg"
            />
            <textarea
              placeholder="Escribe tu mensaje"
              className="w-full border px-4 py-2 rounded-lg h-32"
            />
            <button
              type="submit"
              className="bg-red-800 text-white px-6 py-2 rounded-full hover:bg-red-700 transition"
            >
              Enviar mensaje
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contacto;

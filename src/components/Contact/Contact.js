"use client";

import { motion } from "framer-motion";
import Reveal from "@/utils/Reveal";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./Contact.module.css";
import { TbMessage } from "react-icons/tb";
import { IoMdSend } from "react-icons/io";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Mensaje enviado!");
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <Reveal direction="down">
      <motion.div className={styles.contact}>
        <div className={styles.contactImage}>
          <div className={styles.contactForm}>
            <span>
              Enviame un mensaje! <TbMessage size={40} color="#4891E0" />
            </span>
            <form onSubmit={handleSubmit}>
              <input
                id="fullName"
                type="text"
                name="fullName"
                placeholder="Nombre Completo"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Correo Electronico"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                id="phone"
                type="tel"
                name="phone"
                placeholder="Numero de Telefono"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <textarea
                id="message"
                name="message"
                placeholder="Hola John Doe..."
                value={formData.message}
                onChange={handleChange}
                required
              />
              <motion.button whileHover={{ scale: 1.1 }} type="submit">
                <IoMdSend size={30} />
              </motion.button>
            </form>
          </div>
        </div>
        <ToastContainer
          position="bottom-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss={false}
          draggable={false}
          pauseOnHover={false}
          theme="colored"
        />
      </motion.div>
    </Reveal>
  );
}

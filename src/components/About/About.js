"use client";

import { motion } from "framer-motion";
import Reveal from "@/utils/Reveal";
import styles from "./About.module.css";

export default function About() {
  return (
    <div className={styles.about}>
      <img
        className={styles.profileBanner}
        src="/profile-banner.jpg"
        alt="profile-banner"
      />
      <Reveal direction="up">
        <motion.img
          className={styles.profilePicture}
          src="/profile-picture.jpg"
          alt="profile-picture"
        />
      </Reveal>
      <div className={styles.profileInfo}>
        <Reveal direction="right">
          <motion.div>
            <h1>John Doe</h1>
            <span>San Rafael, Mendoza</span>
          </motion.div>
        </Reveal>
        <Reveal direction="left">
          <motion.p>
            Soy John Doe, un programador apasionado que vive en San Rafael,
            Mendoza. Me especializo en desarrollo web y de aplicaciones móviles,
            creando soluciones innovadoras y eficientes.
          </motion.p>
        </Reveal>
      </div>
    </div>
  );
}

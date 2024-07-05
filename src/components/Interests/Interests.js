"use client";

import { motion } from "framer-motion";
import Reveal from "@/utils/Reveal";
import styles from "./Interests.module.css";
import { FcBusinessman } from "react-icons/fc";
import { GoDotFill } from "react-icons/go";

const interests = [
  {
    name: "Desarrollo Web",
    image: "/images/webdevelopment.jpg",
  },
  {
    name: "Inteligencia Artificial",
    image: "/images/ai.jpg",
  },
  {
    name: "Ciberseguridad",
    image: "/images/cybersecurity.jpg",
  },
  {
    name: "Desarrollo Mobile",
    image: "/images/mobile.jpg",
  },
];

const hobbies = [
  {
    name: "Trekking",
    image: "/images/trekking.jpg",
  },
  {
    name: "Fotografia",
    image: "/images/photography.jpg",
  },
  {
    name: "Cocina",
    image: "/images/cooking.jpg",
  },
  {
    name: "Lectura",
    image: "/images/reading.jpg",
  },
];

const friends = ["John Doe", "John Doe", "John Doe", "John Doe", "John Doe"];
const likes = [
  {
    name: "Nike",
    image: "/icons/nike.png",
  },
  {
    name: "Adidas",
    image: "/icons/adidas.png",
  },
  {
    name: "Nvidia",
    image: "/icons/nvidia.png",
  },
  {
    name: "Coca-Cola",
    image: "/icons/cocacola.png",
  },
  {
    name: "EA",
    image: "/icons/ea.png",
  },
];

export default function Interests() {
  return (
    <div className={styles.interests}>
      <div className={styles.interestsGrid}>
        <Reveal direction="left">
          <motion.div className={styles.hobbies}>
            <div className={styles.hobbiesContainer}>
              <div className={styles.hobbies1}>
                <span>Intereses</span>
                <ul>
                  {interests.map((interest, index) => (
                    <li key={index}>
                      <img src={interest.image} alt={interest.name} />
                      {interest.name}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={styles.hobbies2}>
                <span>Hobbies</span>
                <ul>
                  {hobbies.map((hobbie, index) => (
                    <li key={index}>
                      <img src={hobbie.image} alt={hobbie.name} />
                      {hobbie.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </Reveal>
        <Reveal direction="right">
          <motion.div className={styles.friends}>
            <h3>Amigos</h3>
            <ul>
              {friends.map((item, index) => (
                <li key={index}>
                  <FcBusinessman size={32} /> {item} <GoDotFill color="green" />
                </li>
              ))}
            </ul>
          </motion.div>
        </Reveal>
        <Reveal direction="right">
          <motion.div className={styles.likes}>
            <h3>Me gustas</h3>
            <ul>
              {likes.map((like, index) => (
                <li key={index}>
                  <img src={like.image} alt={like.name} width={32} />
                  {like.name}
                </li>
              ))}
            </ul>
          </motion.div>
        </Reveal>
      </div>
    </div>
  );
}

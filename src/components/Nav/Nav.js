"use client";

import { motion } from "framer-motion";
import Reveal from "@/utils/Reveal";
import styles from "./Nav.module.css";
import { IoMdContact } from "react-icons/io";
import { MdPermContactCalendar } from "react-icons/md";
import { RiHandHeartLine } from "react-icons/ri";

export default function Nav() {
  return (
    <Reveal direction="up">
      <motion.div className={styles.nav}>
        <ul>
          <li>
            <IoMdContact size={22} />
            Sobre Mi
          </li>
          <li>
            <RiHandHeartLine size={22} />
            Intereses
          </li>
          <li>
            <MdPermContactCalendar size={22} />
            Contacto
          </li>
        </ul>
      </motion.div>
    </Reveal>
  );
}

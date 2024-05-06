/*----------------------------------- Module Imports -----------------------------------*/
// External
import { motion } from "framer-motion";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { MdEmail } from "react-icons/md";

// Internal
import logo from "../../public/imgs/portfolio-logo.png";

/*------------------------------------- Functions --------------------------------------*/
export default function Footer() {
  return (
    <motion.div
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: -400 }}
      transition={{ duration: 1.4 }}
      className="m-8 flex items-center justify-center gap-4 text-3xl"
    >
      <a
        href="https://nickldimartino.github.io/portfolio/"
        target="_blank"
        rel="noreferrer"
        className="-mr-0.5"
      >
        <img src={logo} alt="Portfolio Logo" height="30" width="30" />
      </a>
      <a
        href="https://www.linkedin.com/in/nicholas-dimartino/"
        target="_blank"
        rel="noreferrer"
        className="text-caramel"
      >
        <SiLinkedin />
      </a>
      <a
        href="https://github.com/nickldimartino"
        target="_blank"
        rel="noreferrer"
        className="text-yellowgreen"
      >
        <SiGithub />
      </a>
      <a
        href="mailto:nick.l.dimartino@gmail.com"
        target="_blank"
        rel="noreferrer"
        className="text-citrine"
      >
        <MdEmail />
      </a>
    </motion.div>
  );
}

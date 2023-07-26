import { AiOutlineGithub, AiFillLinkedin, AiFillCode } from "react-icons/ai";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_section}>
        <h4>REST MIT</h4>
        <p>
          This project is my final work in MIT - Fullstack studying
          I developed this project according to MERN Course. 
          Contains NextJs application for ordering dishes in restaurants.
        </p>
        <div className={styles.footer_subsection}>
          <span>Author</span>
          <span>Hadeel Otaifah</span>
        </div>
        <div className={styles.footer_subsection}>
          <span>Copyright</span>
          <span>MIT - License</span>
        </div>
      </div>
      <div className={styles.footer_section}>
        <h4>Contact</h4>
        <div>
          <a
            href="https://github.com/hadeelala"
            target="_blank"
            rel="noreferrer"
          >
            <div className={styles.footer_contact_item}>
              <div className={styles.footer_contact_item_icon}>
                <AiOutlineGithub />
              </div>
              <div>hadeelala</div>
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/hadeelala/"
            target="_blank"
            rel="noreferrer"
          >
            <div className={styles.footer_contact_item}>
              <div className={styles.footer_contact_item_icon}>
                <AiFillLinkedin />
              </div>
              <div>Hadeel Ala</div>
            </div>
          </a>
          <a
            href="https://github.com/hadeelala/restmit"
            target="_blank"
            rel="noreferrer"
          >
            <div className={styles.footer_contact_item}>
              <div className={styles.footer_contact_item_icon}>
                <AiFillCode />
              </div>
              <div>Project Source Code</div>
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

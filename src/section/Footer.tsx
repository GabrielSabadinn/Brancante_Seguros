import "../styles/Footer.css";
import Icon from "../assets/icon.png";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <img src={Icon} alt="Logo" className="company-logo" />
      </div>
      <div className="footer-bottom">
        <p className="copyright">
          &copy; {new Date().getFullYear()} Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

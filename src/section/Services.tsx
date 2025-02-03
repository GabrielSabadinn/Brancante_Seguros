import { FaFeather } from "react-icons/fa";
import { productItens } from "../constants/productItens";
import "../styles/securityStyle.css";
import products from "../assets/screens/products.png";

export function ServicesSection() {
  return (
    <div className="container">
      <img src={products} alt="Produtos" className="styled-image" />
      <h2 className="screen-title">Principais Serviços e Benefícios</h2>
      <p className="screen-text">
        Descubra como podemos proteger seu patrimônio náutico com as soluções
        certas para você:
      </p>
      <div className="list-container">
        {productItens.map((product) => (
          <div key={product.id} className="list-item-container">
            <div className="list-item">
              <FaFeather name="check" size={24} color="green" />
              <span className="list-text">{product.title}</span>
            </div>
            <p className="list-description">{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

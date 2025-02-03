import { BUSINESS } from '../constants/business'
import '../styles/businessStyle.css'
import businessImage from '../assets/screens/business.png'

export function BusinessSection() {
    return (
        <div className="container">
            <img className="styled-image" src={businessImage} alt="Business" />
            <h1 className="screen-title">Por que escolher a Brancante Seguros?</h1>
            <div className="list-container">
                {BUSINESS.map((item) => (
                    <div className="list-item-container" key={item.id}>
                        <div className="list-item">
                            <p className="list-text">
                                <span className="text-bold">{item.title}</span> {item.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

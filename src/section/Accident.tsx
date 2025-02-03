import "../styles/accidentStyle.css";
import { accidentSteps } from "../constants/accidentSteps";
import accident from "../assets/screens/accidents.png";

export function AccidentsSection() {
    return (
        <div className="container">
            <img src={accident} alt="Acidentes Náuticos" className="styled-image" />
            <h2 className="screen-title">Sinistros Náuticos: Como Agir?</h2>
            <p className="screen-description">
                Sabemos que momentos inesperados podem dificultar respostas rápidas. Por
                isso, nossa equipe está pronta para orientá-lo em cada etapa do
                processo. Confira abaixo os primeiros passos essenciais:
            </p>
            <div className="list-container">
                {accidentSteps.map((step) => (
                    <div key={step.number} className="list-item">
                        <span className="text-number">{step.number}.</span>
                        <p className="list-text">{step.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

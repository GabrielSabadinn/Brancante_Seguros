import '../styles/aboutStyle.css'
import about from '../assets/screens/about.png'

export function AboutSection() {
    return (
        <div className="container">
            <img
                className="styled-image"
                src={about}
                alt="Sobre a Brancante Seguros"
            />
            <h1 className="screen-title">
                Sobre a Brancante Seguros: Protegendo suas aventuras náuticas há mais de 24 anos
            </h1>
            <p className="screen-description">
                Na Brancante Seguros, navegamos lado a lado com você em cada jornada. Com mais de
                duas décadas de experiência no seguro de embarcações, somos reconhecidos por nossa
                postura ética, conquistando a confiança da Marinha do Brasil, entidades do setor náutico
                e do mercado segurador.
                <br />
                <br />
                <span className="text-indent"></span>Estamos aqui para simplificar o que parece complexo: oferecer orientação clara na
                escolha do seguro ideal, com soluções personalizadas e uma equipe especializada
                pronta para garantir sua tranquilidade. Seja para proteger sua embarcação ou
                orientar no momento de um sinistro, nosso compromisso é com você.
            </p>
        </div>
    )
}

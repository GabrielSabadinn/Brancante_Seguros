import directorsImage from '../assets/screens/directors.png'
import '../styles/missionStyle.css'

export function MissionSection() {
    return (
        <div className="container">
            <img className="styled-image" src={directorsImage} alt="Diretores" />
            <h1 className="screen-title">
                Nossa Missão: Tranquilidade para sua vida no mar
            </h1>
            <p className="screen-description">
                Na Brancante, acreditamos que a segurança vai além de uma apólice: é
                sobre construir confiança e oferecer segurança em todas as suas
                aventuras.
                <br />
                <br />
                <span className="text-indent"></span>É por isso que nossa equipe é treinada para
                entender suas necessidades e oferecer soluções sob medida, seja no
                seguro náutico ou em outros ramos.

            </p>
        </div>
    )
}

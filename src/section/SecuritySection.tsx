import '../styles/securityStyle.css';
import coverages from '../assets/screens/coverages.png';

export function SecuritySection() {
    return (
        <section className={'container'}>
            <img
                src={coverages}
                alt="Segurança em Cada Navegação"
                className={'styledImage'}
            />
            <h1 className={'screenTitle'}>Segurança em Cada Navegação</h1>
            <p className={'screenText'}>
                Antes de entender de seguros, nós entendemos de barcos. Escolher um
                Corretor de Seguros Náuticos, é optar por um parceiro que cuida do que
                realmente importa: sua tranquilidade e paixão pelo mar.
            </p>

        </section>
    );
}

export default SecuritySection;

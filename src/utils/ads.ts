import seguroNautico from "../assets/ads/01-seguro-nautico.jpeg";
import seguroMarina from "../assets/ads/02-seguro-para-marina.jpeg";
import seguroConosco from "../assets/ads/03-cote-seu-seguro-conosco.jpeg";
import coverages from '../assets/screens/coverages.png';

interface Ad {
  title: string;
  description: string;
  imageSource: string;
  hasWhatsAppButton?: boolean;
}

export const ADS: Ad[] = [
  {
    title: "Seguro Náutico",
    description:
      "Proteja seu barco com o seguro náutico que cobre roubo total e/ou furto qualificado, avarias parciais, assistência e salvamento em caso de acidentes. Segurança completa para você navegar tranquilo.",
    imageSource: seguroNautico,
  },
  {
    title: "Seguro para Marina",
    description:
      "Seguro Exclusivo para Marinas: Proteja o patrimônio da sua empresa e as embarcações contra roubo, incêndio e outros riscos. Segurança completa para sua marina!",
    imageSource: seguroMarina,
  },
  {
    title: "Cote seu seguro conosco",
    description:
      "A Brancante Seguros, com 25 anos de experiência no mercado náutico, oferece soluções personalizadas para garantir a tranquilidade da sua jornada.\n\nEntre em contato conosco e descubra as melhores opções para o seu barco.",
    imageSource: seguroConosco,
    hasWhatsAppButton: true,
  },
  {
    title: "Jet Ski protegido, aventura garantida!",
    description:
      "A Brancante Seguros, em parceria com a Seguradora Essor, oferece o único seguro exclusivo para Jet Ski do mercado: o Jet Prime.\nEntre em contato e divirta-se sem preocupação!",
    imageSource: coverages,

  },
];

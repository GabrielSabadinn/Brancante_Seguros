import React, { useState } from "react";
import HomeImage from "../assets/capa-livro-sabores-a-bordo.png";
import "../styles/homeStyle.css";
import ReadingBtn from "../components/readingBtn";
import DownloadPdf from "../components/dowloadPdf";
import CarouselSlider from "../components/carouselSlider";
import PdfReader from "../components/pdfReader";

const HomeSection: React.FC = () => {
  const [isPdfOpen, setIsPdfOpen] = useState(false);

  return (
    <section className="container">
      <img
        className="bookcover"
        src={HomeImage}
        alt="Sabores a bordo - Brancante Seguros"
      />

      <ReadingBtn func={() => setIsPdfOpen(true)} />
      <DownloadPdf />
      <PdfReader isOpen={isPdfOpen} onClose={() => setIsPdfOpen(false)} />

      <CarouselSlider />
    </section>
  );
};

export default HomeSection;

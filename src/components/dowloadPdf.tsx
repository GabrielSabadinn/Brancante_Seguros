import "../styles/readingBtnStyle.css";

const DownloadPdf = () => {
  return (
    <button className="button-style">
      <a
        href="/sabores-a-bordo.pdf"
        download="sabores-a-bordo.pdf"
        className="reading-btn-text"
      >
        Baixar PDF
      </a>
    </button>
  );
};

export default DownloadPdf;

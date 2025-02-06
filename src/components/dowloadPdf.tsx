import "../styles/readingBtnStyle.css";

const DownloadPdf = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/sabores-a-bordo.pdf";
    link.download = "sabores-a-bordo.pdf";
    link.click();
  };

  return (
    <button className="button-style" onClick={handleDownload}>
      <p className="reading-btn-text">Baixar PDF</p>
    </button>
  );
};

export default DownloadPdf;

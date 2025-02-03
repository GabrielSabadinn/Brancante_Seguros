import { useState, useRef, useEffect } from "react";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";

import "../styles/pdfReaderStyle.css";
import { WppBtn } from "./wppBtn";

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

interface PdfReaderProps {
    isOpen: boolean;
    onClose: () => void;
}

const PdfReader = ({ isOpen, onClose }: PdfReaderProps) => {
    const [numPages, setNumPages] = useState(0);
    const [pageNumber, setPageNumber] = useState(1);
    const [error, setError] = useState<string | null>(null);
    const [containerWidth, setContainerWidth] = useState<number>(0);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const updateWidth = () => {
            if (containerRef.current) {
                setContainerWidth(containerRef.current.offsetWidth);
            }
        };

        const observer = new ResizeObserver(updateWidth);
        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        updateWidth();

        return () => observer.disconnect();
    }, []);
    const onLoadSuccess = ({ numPages }: { numPages: number }) => {
        setNumPages(numPages);
        setError(null);
    };

    const onLoadError = (error: Error) => {
        console.error("PDF loading error:", error);
        setError("Falha ao carregar o PDF. Verifique o console para detalhes.");
    };

    return (
        isOpen && (
            <dialog open={isOpen} className="pdf-modal">
                <button onClick={onClose} className="close-button">
                    ✖
                </button>

                <div className="pdf-container">
                    {error && <div className="error-message">{error}</div>}

                    <Document
                        file="sabores-a-bordo.pdf"
                        onLoadSuccess={onLoadSuccess}
                        onLoadError={onLoadError}
                    >
                        <Page
                            pageNumber={pageNumber}
                            width={containerWidth}
                            loading={null}
                            renderTextLayer={false}
                            renderAnnotationLayer={false}
                            className="pdf-page"
                            onRenderSuccess={() => { }}
                        />
                    </Document>
                    {pageNumber == (numPages - 1) ? <div className="wpp-container"><WppBtn /></div> : <></>}
                </div>

                <div className="pdf-controls">
                    <button
                        onClick={() => setPageNumber((prev) => Math.max(prev - 1, 1))}
                        disabled={pageNumber <= 1}
                        className="prev-next-btn prev-btn"
                    >
                        Anterior
                    </button>
                    <span>
                        Página {pageNumber - 1} de {numPages - 1}
                    </span>
                    <button
                        onClick={() =>
                            setPageNumber((prev) => Math.min(prev + 1, numPages))
                        }
                        disabled={pageNumber >= numPages}
                        className="prev-next-btn next-btn"
                    >
                        Próxima
                    </button>
                </div>
            </dialog>
        )
    );
};

export default PdfReader;

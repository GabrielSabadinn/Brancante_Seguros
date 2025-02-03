import "../styles/readingBtnStyle.css";
import { texts } from "../constants/texts";

interface btnReader {
  func: () => void;
}

const ReadingBtn = ({ func }: btnReader) => {
  return (
    <>
      <button onClick={func} className="button-style">
        <p className="reading-btn-text">{texts.readingBtnHome}</p>
      </button>
    </>
  );
};

export default ReadingBtn;

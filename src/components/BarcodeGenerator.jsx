import React, { useState } from "react";
import Barcode from "react-barcode";
import html2canvas from "html2canvas";

function Barcodes(props) {
  const [value, setValue] = useState("");

  const setValueBarcode = () => {
    setValue("");
  };
/*Download Button*/
  const handleDownloadClick = () => {
    const barcodeNode = document.getElementById("barcode");
    html2canvas(barcodeNode).then((canvas) => {
      const link = document.createElement("a");
      link.download = "barcode.png";
      link.href = canvas.toDataURL();
      link.click();
    });
  };

  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="flex flex-col items-center bg-hsrmDarkGrey shadow-lg rounded-lg p-8 max-w-lg ">
        <div className="text-center text-white text-xl font-bold mb-4">
          Hier generieren Sie Ihre Barcode
        </div>
        <input
          type="text"
          placeholder="Nummer schreiben"
          className="bg-neutral-200 outline-2 text-black p-4 rounded-lg mb-4"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <div id="barcode">
          <Barcode z-0 value={value} />
        </div>
        <button
        className="bg-hsrmDarkRed hover:bg-hsrmRed  text-white font-bold py-2 px-4 mt-4 rounded"
        onClick={handleDownloadClick}> Herunterladen </button>
      </div>
    </div>
  );
}

export default Barcodes;

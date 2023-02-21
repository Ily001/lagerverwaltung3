import React, { useState } from "react";
import Webcam from "react-webcam";
import Quagga from "quagga";

const BarcodeScanner = () => {
  const [scanning, setScanning] = useState(false);
  const [result, setResult] = useState(false);

  const handleScan = () => {
    setScanning(true);
    const imageSrc = webcamRef.current.getScreenshot();
    Quagga.decodeSingle(
      {
        decoder: {
          readers: ["ean_reader", "upc_reader", "code_128_reader"] // Unterstützte Barcode-Typen
        },
        locate: true,
        src: imageSrc
      },
      (result) => {
        if (result && result.codeResult) {
          setResult(result.codeResult.code);
        } else {
          setResult(null);
        }
        setScanning(false);
      }
    );
  };

  const webcamRef = React.useRef(null);

  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/png"
          videoConstraints={{ facingMode: "environment" }}
          style={{ width: "100%", height: "auto" }}
        />
        {scanning && (
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
        )}
        {scanning && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
            <p className="text-xl font-bold">Scanning...</p>
          </div>
        )}
      </div>
      {result && (
        <p className="text-xl font-bold mt-4"> Hier ist der Code: {result || "Kein Barcode erkannt."} </p>

      )}
      <button
        className="bg-hsrmDarkRed hover:bg-hsrmRed text-white font-bold py-2 px-4 rounded mt-4"
        onClick={handleScan}
        disabled={scanning}
      >
        Scan! 
      </button>
     
    </div>
  );
};

export default BarcodeScanner;

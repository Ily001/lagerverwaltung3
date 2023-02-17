import React, { useState } from "react";
import Barcode from "react-barcode";

function Barcodes(props) {
  const [value, setValue] = useState("");

  const setValueBarcode = () => {
    setValue("");
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
        <div className="">
          <Barcode z-0 value={value} />
        </div>
      </div>
    </div>
  );
}

export default Barcodes;
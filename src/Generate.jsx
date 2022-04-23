import { useState } from "react";
import QRCode from "react-qr-code";
import "./App.css";

function Generate() {
  const [info, setInfo] = useState("");
  const [data, setData] = useState();
  const [qr, setQr] = useState(false);

  const generateQR = () => {
    setData(info);
    setQr(true);
  };
  return (
    <div className="container">
      <div>
        <div className="m-3">
          <label htmlFor="qr" className="form-label">
            Generate QR
          </label>
          <input
            type="text"
            className="form-control"
            name="qr"
            id="qr"
            aria-describedby="helpId"
            placeholder="enter the value"
            value={info}
            onChange={(event) => {
              setInfo(event.target.value);
            }}
          />
        </div>
        <button type="submit" className="btn btn-primary" onClick={generateQR}>
          Generate QR
        </button>
      </div>
      <div
        style={{
          background: "white",
          padding: "16px",
          display: "flex",
          alignItem: "center",
          justifyContent: "center",
        }}
      >
        {qr ? <QRCode level="M" value={info} size={200} /> : ""}
      </div>
    </div>
  );
}

export default Generate;

import React, { useState } from "react";
import { QrReader } from "react-qr-reader";

const Reader = () => {
  const [data, setData] = useState("No result");

  return (
    <React.Fragment>
      <QrReader
        onResult={(result, error) => {
          if (!!result) {
            setData(result?.text);
          }

          if (!!error) {
            console.info(error);
          }
        }}
        style={{ width: "50%", margin: "auto" }}
      />
      <p>{data}</p>
    </React.Fragment>
  );
};
export default Reader;

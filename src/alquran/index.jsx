import React, { useState } from "react";
import Axios from "axios";

const Alquran = () => {
  const [quran, setQuran] = useState([]);
  const getData = () => {
    const url = `https://api.npoint.io/99c279bb173a6e28359c/data`;
    Axios.get(url).then((response) => {
      console.log(response);
      setQuran(response.data.data);
    });
  };
  return (
    <div>
      <button onClick={getData}>get data</button>
      <thead>
        <td>Nama Surat</td>
        <td>Jumlah Ayat</td>
      </thead>
      <tbody>
        <td>{setQuran}</td>
      </tbody>
    </div>
  );
};

export default Alquran;

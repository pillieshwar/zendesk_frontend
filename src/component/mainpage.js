import React, { useEffect } from "react";
import axios from "axios";

export default function MainPage() {
  const [apidata, setapidata] = React.useState([]);
  // const dataq = axios.get(`http://localhost:8080/dataauth`);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get("http://localhost:8080/dataauth");
        console.log("console", res.data);
        setapidata(res.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  // useEffect(() => {
  //   dataq.then((res) => {
  //     console.log("console", res.data);
  //     setapidata(res.data);
  //   });
  // }, []);
  return (
    <div>
      <p>{apidata.updated_at}</p>
    </div>
  );
}

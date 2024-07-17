import React, { useEffect, useState } from "react";
import Header from "./Header";
import img1 from "./static_assets/1.jpg";
import img2 from "./static_assets/2.jpg";
import img3 from "./static_assets/3.jpg";
import img4 from "./static_assets/4.jpg";
import img5 from "./static_assets/5.jpg";
import img6 from "./static_assets/6.jpg";
import loc from "./static_assets/Loc.jpg";
import footer from "./static_assets/footer.png";
import gplay from "./static_assets/gplay.png"
import app from "./static_assets/app.png"
import "./App.css";

const App = () => {
  const arr = [img1, img2, img3, img4, img5, img6];
  const [values, setValues] = useState([]);
  let url =
    "https://raw.githubusercontent.com/MujtabaKably/bhive-interview-project-data/main/data.json";

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetch(url, { signal })
      .then((response) => response.json())
      .then((data) => {
        setValues(data);
        console.log(data);
      })
      .catch((error) => {
        if (error.name !== "AbortError") {
          console.error("Error:", error);
        }
      });

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <>
      <Header />
      <div >
        <p className="headingspaces">Our Spaces</p>
      </div>
      <div>
        <div className="bigscreen">
          {values.map((e, index) => (
            <div className="databox" key={e.id}>
              {/* heading */}
              <div className="dhead">
                <div className="dheadtext">
                  <p>{e.name}</p>
                </div>
                <div className="dheadlogo">
                  <img className="logodh" src={loc} alt="logo" />
                </div>
              </div>
              {/* image */}
              <div className="dlogo">
                <img className="datalogo" src={arr[index]} alt="logo" />
              </div>
              {/* buttons */}
              <div className="buttonbox">
                <div>
                  <p className="lighttext">Day Pass</p>
                  <p>{`₹ ${e.day_pass_price}`}</p>
                </div>
                <div className="yellow">
                  <p className="lighttext">Bulk Pass</p>
                  <p>₹ 2400/10 Days</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ---------------------------------- */}
      {/* footer */}

      
        <div className="download">
          <h3>Download our app now </h3>
        </div>
       <div className="bgfooter">
        <div className="footeradv">
          <img src={footer} alt="logo" />
        </div>

        <div className="bgtextlogo">
         <div>
          <p>Boost your productivity with the BHIVE Workspace app. Elevate your workspace, collaborate efficiently, and unlock exclusive perks.</p>
         </div>
        <div className="storeapps">
          <div><img src={gplay} alt="logo"/></div>
          <div><img src={app} alt="logo"/></div>
        </div>
        </div>
        </div>
        {/* ---------- */}
        <div className="copyright">
          <p>© Copyright 2024. Bhive Private Limited</p>
        </div>
      
    </>
  );
};

export default App;

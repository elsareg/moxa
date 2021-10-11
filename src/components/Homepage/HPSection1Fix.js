import React, { useState, useEffect } from "react";
import { useTransition, animated, config } from "react-spring";
import useWindowDimensions from "../../hooks/useWindowDimentions";
import ReactGA from "react-ga";
import Phone from '../../assets/img/RectanglePhone.png'
import Car from '../../assets/img/CarImage.png'
ReactGA.initialize("UA-175679937-1");

const HPSection1Fix = (props) => {
  const [index, setIndex] = useState(0);

  const { width } = useWindowDimensions();

  const transitions = useTransition(props.data[index], (item) => item.id, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.molasses,
  });

  useEffect(
    () => void setInterval(() => setIndex((state) => (state + 1) % props.data.length), 5000),
    []
  );

  const handleGoogleButton = () => {
    ReactGA.event({
      category: "Button",
      action: "Cliked Google Play Store",
    });
  };

  const handleAppStoreButton = () => {
    ReactGA.event({
      category: "Button",
      action: "Cliked IOS App Store",
    });
  };

  return (
    <div>
      <div id="banner" style={{background:'#D3E0FF'}}>
      {transitions.map(({ item, props, key }) => (
          <div>
            {width < 576 ? (
              <div>
               
              </div>
            ) : (
              <div>
               
              </div>
            )}
          </div>
        ))}

        <div className="wrapper" style={{marginTop:'100px'}}>
          <div className="row">
            <div className="col-md-6">
              <h1>{props.data[index].title}</h1>
              <h2>{props.data[index].subtitle}</h2>
              
                <div>
                  <div className="download-btn">
                    <a
                      href=''
                      target="_blank"
                      onClick={handleGoogleButton}
                    >
                      <img src={require("../../assets/img/gplay-btn.png")} alt="" />
                    </a>
                    <a
                      href=''
                      target="_blank"
                      onClick={handleAppStoreButton}
                    >
                      <img src={require("../../assets/img/appstore-btn.png")} alt="" />
                    </a>
                  </div>
                </div>
            </div>  
               
            <div className="col-md-6" style={{backgroundImage: 'url(' + require('../../assets/img/Group-2.png') + ')',zIndex:'99',backgroundRepeat:'no-repeat'}}>
               
                    <img src={props.data[index].image} style={{zIndex:'0'}}/>
            </div>
    
          </div>
          <div className="slide-nav">
            {props.data.map((item, i) => (
              <div
                key={i}
                className={`nav-item ${index === i ? "slide-active" : ""}`}
                onClick={() => setIndex(i)}
              ></div>
            ))}
          </div>   
        </div>
      </div>
    </div>
  );
};

export default HPSection1Fix;
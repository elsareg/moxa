import React, { useState, useEffect } from "react";
import axios from "axios";
import imageFif from '../../assets/img/imageFif.png'
import imageAcc from '../../assets/img/imageAcc.png'
import imageAstra from '../../assets/img/imageAstra.png'
import imageTaf from '../../assets/img/imageTaf.png'
import imageSera from '../../assets/img/imageSera.png'
import imageKomatsu from '../../assets/img/imageKomatsu.png'
import imageSanf from '../../assets/img/imageSanf.png'
import imageMau from '../../assets/img/imageMau.png'
import imageAstrapay from '../../assets/img/imageAstrapay.png'
import imageAstralife from '../../assets/img/imageAstralife.png'
import imageMobil88 from '../../assets/img/imageMobil88.png'
import imagePermata from '../../assets/img/imagePermata.png'

const HPSection3Fix = (props) => {
  const [partnersApi,setPartners] = useState([])
  useEffect(() => {
    const fetchParnters = async ()=>{
      const response =  await fetch('https://dev.moxa.id/cms/partners?_sort=order:asc')
      const getPartners = await response.json()
      setPartners(getPartners)
    }
    fetchParnters()
  }, [])
  const partnerCom = partnersApi.length>0 ? 
                partnersApi.map((partner=>{
                  return <div className="">
                         <img src={partner.logo.url} style={{width:'auto',maxWidth:'130px'}}/>
                     </div>
                })): <p>Loading....</p>
  return (
    <div>
      <div className="partersSection" >
       
        <div className="wrapper" style={{opacity:'1'}}>
          <div className="row">
            <div className="col-lg-12 m-auto" >
              <h1 >PARTNER MOXA</h1>
              <p>Moxa bekerja sama dengan berbagai perusahaan keuangan dan asuransi terbaik
              <br/>di Indonesia untuk menyediakan layanan sesuai kebutuhanmu 
              <br/>yang pasti aman serta terpercaya </p>
            <div className="row logo-partner" style={{marginBottom:'110px'}}>
            {partnerCom}
                
            </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
  // }
};

export default HPSection3Fix;

import React, { useState, useEffect } from "react";
import axios from "axios";

import Layout from "../components/Layout/Layout";
import HPSection2 from "../components/Homepage/HPSection2";
import HPSection3 from "../components/Homepage/HPSection3";
import HPSection4 from "../components/Homepage/HPSection4";
import HPSectionTesti from "../components/Homepage/HPSectionTesti";
import HPSectionTrivia from "../components/Homepage/HPSectionTrivia";
import HpSectionUsp from "../components/Homepage/HPSectionUsp";
import Header from "../components/Layout/Header";
import HPSection1Fix from "../components/Homepage/HPSection1Fix";
import HPSection2Fix from "../components/Homepage/HPSection2Fix";
import HPSection3Fix from "../components/Homepage/HPSection3Fix";
import HPSection4Fix from "../components/Homepage/HPSection4Fix";

import Phone from '../assets/img/RectanglePhone.png'
import Car from '../assets/img/CarImage.png'
import LayoutProduct from "../components/Layout/LayoutProduct";

import imageFif from '../assets/img/imageFif.png'
import imageAcc from '../assets/img/imageAcc.png'
import imageAstra from '../assets/img/imageAstra.png'
import imageTaf from '../assets/img/imageTaf.png'
import imageSera from '../assets/img/imageSera.png'
import imageKomatsu from '../assets/img/imageKomatsu.png'
import imageSanf from '../assets/img/imageSanf.png'
import imageMau from '../assets/img/imageMau.png'
import imageAstrapay from '../assets/img/imageAstrapay.png'
import imageAstralife from '../assets/img/imageAstralife.png'
import imageMobil88 from '../assets/img/imageMobil88.png'
import imagePermata from '../assets/img/imagePermata.png'



import iconCar from '../assets/img/IconCar.png'
import iconMotor from '../assets/img/iconMotor.png'
import iconRental from '../assets/img/iconRental.png'
import iconAsuransi from '../assets/img/iconAsuransi.png'
import iconRp from '../assets/img/iconRp.png'
import iconMasjid from '../assets/img/iconMasjid.png'
import iconTractor from '../assets/img/iconTractor.png'
import iconElectric from '../assets/img/iconElectric.png'
import iconTabungan from '../assets/img/iconTabungan.png'

const HomepageFix = (props) => {
  
  const [partners,setPartners] = useState([
    {image:imageFif},
    {image:imageAcc},
    {image:imageAstra},
    {image:imageTaf},
    {image:imageSera},
    {image:imageKomatsu},
    {image:imageSanf},
    {image:imageMau},
    {image:imageAstrapay},
    {image:imageAstralife},
    {image:imageMobil88},
    {image:imagePermata},
  ])

  const [products,setProducts] = useState([
    {image:iconCar, text:'Pembiayaan Mobil'},
    {image:iconMotor, text:'Pembiayaan Motor'},
    {image:iconRental, text:'Rental'},
    {image:iconAsuransi, text:'Asuransi Kesehatan'},
    {image:iconRp, text:'Pinjaman Tunai'},
    {image:iconMasjid, text:'Perjalanan Religi'},
    {image:iconTractor, text:'Truk dan Alat Berat'},
    {image:iconElectric, text:'Elektronik dan Lainnya'},
    {image:iconTabungan, text:'Tabungan'}
  ])

  const [data,setData] = useState([
    {
      title:'APLIKASI PINTAR UNTUK SEMUA KEBUTUHAN FINANSIALMU', 
      subtitle:'Pembiayaan mobil, mencari pinjaman, asuransi, dan masih banyak lagi, semuanya dalam satu aplikasi',
      image:Phone 
    },
    {
      title:'APLIKASI PINTAR UNTUK SEMUA KEBUTUHAN FINANSIALMU', 
      subtitle:'Pembiayaan mobil, mencari pinjaman, asuransi, dan masih banyak lagi, semuanya dalam satu aplikasi',
      image:Car 
    }
  ])
  const [loading, setLoading] = useState(true);
  const [getData, setGetData] = useState([]);
  const [homeData, setHomeData] = useState({});

  useEffect(() => {
    setLoading(true);

    axios
      .all([
        axios.get(process.env.REACT_APP_API_URL + `/home-banners?_sort=order:asc`),
        axios.get(process.env.REACT_APP_API_URL + `/homepage`),
        axios.get(process.env.REACT_APP_API_URL + "/products?_sort=order:asc"),
        axios.get(process.env.REACT_APP_API_URL + "/partners?_sort=order:asc"),
      ])
      .then((res) => {
      
        setGetData(res[0].data);
        setHomeData(res[1].data);
        console.log('product',res)
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <LayoutProduct title="Moxa"  descriptions={data[0].title}>
        <div id="homepage">
          <HPSection1Fix data={data} />
          <HPSection2Fix products={products} />
          <HPSection3Fix partners={partners} />
          <HPSection4Fix />
         
        </div>
      </LayoutProduct>
    </div>
  );
};

export default HomepageFix;
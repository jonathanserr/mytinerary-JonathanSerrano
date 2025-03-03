import React from 'react'
import { useNavigate } from 'react-router-dom';
import CallButton from '../components/CallButton';
import Carousel from '../components/Carousel';

const pictures = [
  { title: "BANGKOK", picture: "https://img.freepik.com/free-photo/wat-arun-temple-twilight-bangkok-thailand_335224-772.jpg" },
  { title: "PARIS", picture: "https://media.admagazine.com/photos/6670b5fcf4f373fe3d2039c7/2:3/w_2142,h_3213,c_limit/pexels-magnusflechsenhaar-3361209.jpg" },
  { title: "DUBAI", picture: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSnG33SH8er_aD285rdTMj2RQBt9v5o48kGDdMgUnPZnxhEPUiYykuWANV4xNhhuz-JrNvBqN4tNB984aCA21pjNOkypKn5AvqI2bthMg" },
  { title: "SINGAPORE", picture: "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcTt2XN19sgni8Y38atg-fSw3BJk_R3OiqMj2SobTBLbqfTrApPa9WMPwT1pNsAefOq1gjgqo5FmiJtvEakFCLmJwx41s6o8QNwBigFdpg" },
  { title: "KUALA LUMPUR", picture: "https://lh4.googleusercontent.com/proxy/l6iYRidSyJMbB6AoMF81yaqfGOeZ_FyQu2wPqEHKm5KufEFmtkdCcMRnUro5e0hkJVRqbrVrdE3ufQwWjET3XFFoI-jviI5a9Sx0Ys1T1jsSWFuAAzbVFufJRJiwfxG-DmDgOAkEFRdsMvnb2Lr0FvalPyZhUE4=w810-h468-n-k-no" },
  { title: "NEW YORK", picture: "https://res.cloudinary.com/dtljonz0f/image/upload/c_auto,ar_4:3,w_3840,g_auto/f_auto/q_auto/v1/gc-v1/new-york/shutterstock_2142178205_yxfbc3?_a=BAVARSAP0" },
  { title: "MADRID", picture: "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--1899a1bd-bedb-41fb-8e42-1647a2803ae3/Corazon_de_Madrid.app.webp?preferwebp=true" },
  { title: "TOKYO", picture: "https://viajes.nationalgeographic.com.es/medio/2024/09/03/tokio_133ce43a_1284581217_240903122054_1280x854.jpg" },
  { title: "SYDNEY", picture: "https://ingeoexpert.com/wp-content/uploads/2024/12/Sydneyoperahouse_at_night.webp" },
  { title: "LONDON", picture: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSEy4eaPVywfcPEEcIVXsACGD0ykJTDr80laqdcDs9X11Fddora3sr2m2g9ymW7svuOpofoHU5E7ssIPhj-JuUhcnWQGYrm5nfEjAHd1g" },
  { title: "BARCELONA", picture: "https://cdn.bueno-bonito-barcelona.com/wp-content/uploads/sites/2/2014/06/playa-barcelona-ok.jpg" },
  { title: "ROME", picture: "https://tourismmedia.italia.it/is/image/mitur/20220127150143-colosseo-roma-lazio-shutterstock-756032350-2?wid=1600&hei=900&fit=constrain,1&fmt=webp" }
];


export default function Home() {

  const navigate = useNavigate();

  function handleCTAClick() {
    navigate('/Cities');
  }
  return (
    <>
      <div className='flex flex-col justify-between'>
        <div className='h-screen flex flex-col justify-center items-center'>
          <h1 className='text-white text-banner text-5xl'>My Tinerary</h1>
          <p className='text-white text-banner text-center p-10  text-2xl'>“Find your perfect trip, designed by insiders who know and love their cities!”</p>
          <CallButton onClick={handleCTAClick} />
        </div>
        <div className='h-full flex justify-between'>
          <div className='h-full flex flex-col justify-center items-center my-text text-white'>
            <h2 className='pt-16 text-4xl text-center m-4'>Popular Mytineraries</h2>
            <div className='m-2 h-full'>
              <Carousel pictures={pictures} intervalo={3000} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


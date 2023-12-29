// Components/Gallery.js
'use client'
import React, { useState } from "react";
import { AiOutlineExpandAlt } from "react-icons/ai";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import Image from 'next/image'

const ProjectGallery = () => {
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState("");

  const galleryTab = [
// you can add more image if you want
    {
      imageUrl: "https://themewagon.github.io/snapshot/images/model-1.jpg",
      type: "Nature",
      title: "Beautiful Work",
    },
    {
      imageUrl: "https://themewagon.github.io/snapshot/images/model-2.jpg",
      type: "Nature",
      title: "Beautiful Work",
    },
    {
      imageUrl: "https://themewagon.github.io/snapshot/images/model-3.jpg",
      type: "Nature",
      title: "Beautiful Work",
    },
    {
      imageUrl: "https://themewagon.github.io/snapshot/images/model-4.jpg",
      type: "Nature",
      title: "Beautiful Work",
    },
    {
      imageUrl: "https://themewagon.github.io/snapshot/images/model-5.jpg",
      type: "Nature",
      title: "Beautiful Work",
    },
  ];



  const slides = galleryTab.map((item) => ({
    src: item.imageUrl,
    width: 3840,
    height: 2560,
    srcSet: [
      { src: item.imageUrl, width: 320, height: 213 },
      { src: item.imageUrl, width: 640, height: 426 },
      { src: item.imageUrl, width: 1200, height: 800 },
      { src: item.imageUrl, width: 2048, height: 1365 },
      { src: item.imageUrl, width: 3840, height: 2560 },
    ],
  }));

  return (
    <div className="py-10">
       <div className="flex flex-col justify-center items-center pb-10">
       <h2 className="mb-3 pl-6 text-3xl font-bold">Recent Projects</h2>
        <div className='flex justify-start items-center gap-2'>
                        <Image src='/MasterApplianceTechLogo.jpg' width={50} height={50} alt='logo' />
                        <h3 className='text-[#FF6600] font-semibold'>Master Applience</h3>
                    </div>
       </div>
        <div className="w-full">
      <div className=" ">
        <div className="flex flex-col md:grid md:grid-cols-3 h-full gap-0 flex-wrap mx-2 md:mx-0">
          {galleryTab.map((x, index) => {
            return (
              <div key={index} className="md:h-[50vw] h-screen relative">
                <div className="group h-full">
                  <div
                    className="bg-cover bg-center h-full w-full bg-no-repeat"
                    style={{ backgroundImage: `url("${x.imageUrl}")` }}
                  >
                    <div className="text-3xl text-white absolute bottom-0 left-2 z-10">
                      <div>{x.type}</div>
                      <div>{x.title}</div>
                    </div>
                  </div>
                  <div
                    className="bg-black opacity-0 group-hover:opacity-75 absolute inset-0 flex items-center justify-center transition-all duration-300 ease-in-out"
                    onClick={() => {
                      setOpen(true);
                      setImage(x.imageUrl);
                    }}
                  >
                    <p className="text-white">
                      <AiOutlineExpandAlt className="text-5xl border w-16 h-16 bg-neutral-500 hover:bg-white hover:text-black p-3 cursor-pointer rounded-full" />
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        plugins={[Zoom]}
        showPrevNext={false}
        slides={slides}
      />
    </div>
    </div>
  );
};

export default ProjectGallery;
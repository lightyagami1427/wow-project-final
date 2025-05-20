import React from "react";
import Image from "next/image";

//INTERNAL IMPORT
import Style from "../styles/aboutus.module.css";
import { Brand } from "../components/componentsindex";
import images from "../img";

const aboutus = () => {
  const founderArray = [
    {
      name: "Akhil Nishtala",
      position: "211801370093",
      images: images.founder1,
    },
    {
      name: "Supreethi",
      position: "211801380036",
      images: images.founder2,
    },
    {
      name: "Tarun",
      position: "211801370085",
      images: images.founder3,
    },
    {
      name: "Harshini Bendi",
      position: "211801370027",
      images: images.founder4,
    },
    {
      name: "Harini",
      position: "211801370026",
      images: images.founder5,
    },
    {
      name: "Kulasekhar",
      position: "211801370119",
      images: images.founder6,
    },
    {
      name: "Raju",
      position: "211801370081",
      images: images.founder7,
    },
    {
      name: "Shreeyash",
      position: "211801260006",
      images: images.founder8,
    },
  ];

  const factsArray = [
    {
      title: "4th Year",
      info: "Centurion University of Technology and Management",
    },
    {
      title: "CSE",
      info: "Domain: Data Analytics",
    },
    {
      title: "WoW",
      info: "Project Guide: M. Aswini Kumar",
    },
  ];
  return (
    <div className={Style.aboutus}>
      <div className={Style.aboutus_box}>
        <div className={Style.aboutus_box_hero}>
          <div className={Style.aboutus_box_hero_left}>
            <h1>👋 About Us.</h1>
            <p>
              We’re impartial and independent, and every day we create
              distinctive, world-class programmes and content which inform,
              educate and entertain millions of people in the around the world.
            </p>
          </div>
          <div className={Style.aboutus_box_hero_right}>
            <Image src={images.hero2} />
          </div>
        </div>

        <div className={Style.aboutus_box_title}>
          <h2>⛱ Founder</h2>
          <p>
            We’re impartial and independent, and every day we create
            distinctive, world-class programmes and content
          </p>
        </div>

        <div className={Style.aboutus_box_founder}>
          <div className={Style.aboutus_box_founder_box}>
            {founderArray.map((el, i) => (
              <div className={Style.aboutus_box_founder_box_img}>
                <Image
                  src={el.images}
                  alt={el.name}
                  width={500}
                  height={500}
                  className={Style.aboutus_box_founder_box_img_img}
                />
                <h3>{el.name}</h3>
                <p>{el.position}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={Style.aboutus_box_title}>
          <h2>🚀 Fast Facts</h2>
          <p>
            We’re impartial and independent, and every day we create
            distinctive, world-class programmes and content
          </p>
        </div>

        <div className={Style.aboutus_box_facts}>
          <div className={Style.aboutus_box_facts_box}>
            {factsArray.map((el, i) => (
              <div className={Style.aboutus_box_facts_box_info}>
                <h3>{el.title}</h3>
                <p>{el.info}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Brand />
    </div>
  );
};

export default aboutus;

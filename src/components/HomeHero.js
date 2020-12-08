import React from "react";
import hero1m from "../assets/home/mobile/image-hero-paramour.jpg";
import hero2m from "../assets/home/mobile/image-hero-seraph.jpg";
import hero3m from "../assets/home/mobile/image-hero-federal.jpg";
import hero4m from "../assets/home/mobile/image-hero-trinity.jpg";
import hero1t from "../assets/home/tablet/image-hero-paramour.jpg";
import hero2t from "../assets/home/tablet/image-hero-seraph.jpg";
import hero3t from "../assets/home/tablet/image-hero-federal.jpg";
import hero4t from "../assets/home/tablet/image-hero-trinity.jpg";
import hero1d from "../assets/home/tablet/image-hero-paramour.jpg";
import hero2d from "../assets/home/tablet/image-hero-seraph.jpg";
import hero3d from "../assets/home/tablet/image-hero-federal.jpg";
import hero4d from "../assets/home/tablet/image-hero-trinity.jpg/";
//set the pictures as background images so they can use different images at different dimension

let hero = [
  {
    id: 1,
    title: "Project Paramour",
    description:
      "Project made for an art museum near Southwest London. Project Paramour is a statement of bold, modern architecture.",
    mobile: { hero1m },
    tablet: { hero1t },
    desk: { hero1d },
  },
  {
    id: 2,
    title: "Seraph Station",
    description:
      "The Seraph Station project challenged us to design a unique station that would transport people through time. The result is a fresh and futuristic model inspired by space stations.",
    mobile: { hero2m },
    tablet: { hero2t },
    desk: { hero2d },
  },
  {
    id: 3,
    title: "Federal II Tower",
    description:
      "A sequel theme project for a tower originally built in the 1800s. We achieved this with a striking look of brutal minimalism with modern touches.",
    mobile: { hero3m },
    tablet: { hero3t },
    desk: { hero3d },
  },
  {
    id: 4,
    title: "Trinity Bank Tower",
    description:
      "Trinity Bank challenged us to make a concept for a 84 story building located in the middle of a city with a high earthquake frequency. For this project we used curves to blend design and stability to meet our objectives.",
    mobile: { hero4m },
    tablet: { hero4t },
    desk: { hero4d },
  },
];

const HomeHero = () => {
  return (
    <>
      <div className="heromobile"></div>
      <div className="herotablet"></div>
      <div className="herodesktop"> </div>
    </>
  );
};

export default HomeHero;

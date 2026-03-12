import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.css";
import Wrapper from "./Wrapper";
import logo from "../assets/rta_logo.jpeg"
import rpaIcon from "../assets/icons/rpa.svg"
import wepAppIcon from "../assets/icons/web-app.svg"
import siteIcon from "../assets/icons/site.svg"
import eComIcon from "../assets/icons/e-commerce.svg"

interface IProduct {
  title: string;
  description: string;
  imgPath: string;
}

const Product = ({ title, description, imgPath }: IProduct) => {
  return (
    <Wrapper>
      <h2>{title}</h2>
      <p>{description}</p>
      <img width="50" className="product" src={imgPath} />
    </Wrapper>
  );
};

export const Products = () => {
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={1}
    >
      {productsInformation.map(({ title, description, imgPath }) => {
        return (
          <SwiperSlide>
            <Product
              title={title}
              description={description}
              imgPath={imgPath}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

const productsInformation = [
  {
    id: 1,
    title: "RPA",
    description: "Automações RPA",
    imgPath: rpaIcon,
  },
  {
    id: 2,
    title: "Web Apps",
    description: "Aplicações Web",
    imgPath: wepAppIcon,
  },
  {
    id: 3,
    title: "Sites",
    description: "Sites com Hospedagem",
    imgPath: siteIcon,
  },
  {
    id: 4,
    title: "E-commerce",
    description: "E-commerce completos",
    imgPath: eComIcon,
  },
];

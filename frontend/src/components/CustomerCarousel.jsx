import PlaceholderImg from "../images/placeholder-image.png";
import avatar from "../images/avatar.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useEffect, useState } from "react";
import {
  Container,
  Col,
  Row,
  Image,
  Card,
  CardGroup,
  // Carousel,
  Stack,
} from "react-bootstrap";
import BookingsCard from "./BookingsCard";
import {
  getCustomerRecommendations,
  getCustomerBookings,
  getProviderInfo,
} from "../api";

import "../CSS/Carousel.css";

function CustomerCarousel({ title }) {
  const responsive = {
    xxl: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 2200 },
      items: 6,
      slidesToSlide: 6,
    },
    xl: {
      // the naming can be any, depends on you.
      breakpoint: { max: 2200, min: 1850 },
      items: 4,
      slidesToSlide: 4,
    },
    lg: {
      breakpoint: { max: 1850, min: 1450 },
      items: 4,
      slidesToSlide: 4,
    },
    md: {
      breakpoint: { max: 1450, min: 1150 },
      items: 3,
      slidesToSlide: 3,
    },
    sm: {
      breakpoint: { max: 1150, min: 750 },
      items: 2,
      slidesToSlide: 2,
    },
    xs: {
      breakpoint: { max: 750, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  const [displayedProviders, setDisplayedProviders] = useState();
  const userId = localStorage.getItem("userId");
  useEffect(() => {
    const fetchData = async () => {
      if (title === "Recommended") {
        const displayedProvidersResponse = await getCustomerRecommendations(
          userId
        );
        setDisplayedProviders(displayedProvidersResponse);
      } else if (title === "Recently Booked") {
        const displayedProvidersResponse = await getCustomerBookings(userId);

        const previousProviderMap = {};
        displayedProvidersResponse.forEach((booking) => {
          if (previousProviderMap[booking.provider_id]) {
            return;
          } else {
            previousProviderMap[booking.provider_id] = booking.provider_id;
          }
        });

        const providerArray = [];
        for (const provider in previousProviderMap) {
          const providerId = previousProviderMap[provider];
          const providerInfo = await getProviderInfo(providerId);
          providerArray.push(providerInfo);
        }

        setDisplayedProviders(providerArray);
      }
    };

    fetchData();
    // setRecommendedProviders(recommendedProvidersResponse);
  }, []);

  return (
    <div className="carousel-container mt-4">
      <h2 className="carousel-title"> {title}</h2>
      {displayedProviders !== undefined && displayedProviders.length > 0 ? (
        <Carousel
          className="w-100"
          responsive={responsive}
          transitionDuration={500}
          removeArrowOnDeviceType={["tablet", "mobile"]}
          // autoPlay={true}
          // autoPlaySpeed={2000}
          // rewind={true}
          showDots={true}
          // renderDotsOutside={true}
          arrows={false}
          customButtonGroup=""
          dotListClass="custom-dot-list-style"
          // removeArrowOnDeviceType={}
        >
          {displayedProviders.length &&
            displayedProviders.map((provider) => {
              const startingPrice = provider.service.reduce(function (
                prev,
                curr
              ) {
                return prev.price < curr.price ? prev : curr;
              });
              return (
                <div key={provider.provider_id}>
                  <BookingsCard
                    profilePic={provider.profile_pic}
                    businessName={provider.provider_businessName}
                    areaServed={provider.provider_areaServed}
                    firstImage={provider.image[0].image_url}
                    startingPrice={startingPrice.price}
                  />
                </div>
              );
            })}
        </Carousel>
      ) : (
        <div className="d-flex justify-content-center m-5  vw-100">
          No <span className="text-lowercase me-1 ms-1">{title}</span>{" "}
          providers.
        </div>
      )}
    </div>
  );
}
export default CustomerCarousel;

import React, { useState } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import "./ImageSlider.css";
import { connect } from "react-redux";
import * as actions from "../../redux/actions/actions";
const ImageSlider = (props) => {
  const [current, setCurrent] = useState(0);
  const length = props.slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(props.slides) || props.slides.length <= 0) {
    return null;
  }
  return (
    <>
      <div className="PopUp">
        <section className="slider">
          <FaArrowAltCircleLeft className={"left-arrow"} onClick={prevSlide} />
          <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
          {props.slides.map((slide, index) => {
            return (
              <div
                className={index === current ? "slide active" : "slide"}
                key={index}
              >
                {index === current && (
                  <>
                    {slide.albumId !== 11 ? (
                      <span
                        class="heart"
                        onClick={() => {
                          props.addToFavourites(slide);
                          props.currentFavourite(slide);
                        }}
                      ></span>
                    ) : null}
                    <img src={slide.url} alt="travel image" className="image" />
                    <p className="title">{slide.title}</p>
                  </>
                )}
              </div>
            );
          })}
        </section>
      </div>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToFavourites: (photo) => dispatch(actions.addToFavourites(photo)),
    currentFavourite: (photo) => dispatch(actions.currentFavourite(photo)),
    removeFav: (photoId) => dispatch(actions.removeFav(photoId)),
  };
};
export default connect(null, mapDispatchToProps)(ImageSlider);

import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { BsFillBagHeartFill } from 'react-icons/bs';
function Card() {
  return (
    <div>
      <section className="card">
        <img
          src="https://m.media-amazon.com/images/I/61N4GyWcHPL._AC_UY575_.jpg"
          alt="Image of shoe"
          className="card-img"
        />
        <div className="card-details">
          <h3 className="card-title">Shoe</h3>
          <section className="card-reviews">
            <AiFillStar className="rating-star" />
            <AiFillStar className="rating-star" />
            <AiFillStar className="rating-star" />
            <AiFillStar className="rating-star" />
            <span className="total-reviews">4</span>
          </section>
          <section className="card-price">
            <div className="price">
              <del>$450</del> 220
            </div>
            <div className="bag">
              <BsFillBagHeartFill className="bag-icon" />
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}

export default Card;

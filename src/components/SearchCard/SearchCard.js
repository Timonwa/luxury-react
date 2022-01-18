import React, { useState } from "react";
import "./SearchCard.scss";
import { useForm } from "react-hook-form";

const SearchCard = () => {
  const [moreOptions, setMoreOptions] = useState(true);
  const [lessOptions, setLessOptions] = useState(false);
  const [filter2, setFilter2] = useState(false);

  const handleOptions = () => {
    console.log("hi");
    setMoreOptions(!moreOptions);
    setLessOptions(!lessOptions);
    setFilter2(!filter2);
  };

  const { register, handleSubmit } = useForm({
    mode: "onChange",
  });

  const handleSearch = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <div className="search-card">
      <form onSubmit={handleSubmit(handleSearch)}>
        <h3>FILTER</h3>
        <div className="filter1 filter-card">
          {/* <!-- form location dropdown --> */}
          <select className="filter-search" {...register("location")}>
            <option value="holder">--Location--</option>
            <option value="island">Island</option>
            <option value="mainland">Mainland</option>
            <option value="any">Any</option>
          </select>
          {/* <!-- form accommodation dropdown --> */}
          <select className="filter-search-input" {...register("type")}>
            <option value="holder">--Type--</option>
            <option value="apartment">Apartment</option>
            <option value="hotel">Hotel</option>
            <option value="hostel">Hostel</option>
          </select>
          {/* <!-- sort by --> */}
          <select className="filter-search-input" {...register("sortBy")}>
            <option value="holder">--Sort by--</option>
            <option value="relevance">Relevance</option>
            <option value="popularity">Popularity</option>
            <option value="new">New to Old</option>
            <option value="old">Old to New</option>
          </select>
          {/* <!-- location of accommodation --> */}
          <select className="filter-search-input" {...register("price")}>
            <option value="holder">--Price--</option>
            <option value="lowest">Lowest price</option>
            <option value="highest">Highest price</option>
          </select>
        </div>

        {filter2 && (
          <div className="filter2 filter-card">
            {/* <!-- number of bedroom --> */}
            <div className="filter-search-input">
              <label for="bedroom">Bedrooms</label>
              <select {...register("bedroom")}>
                <option value="any">Any</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4+">4+</option>
              </select>
            </div>
            {/* <!-- number of toilet --> */}
            <div className="filter-search-input">
              <label for="toilet">Toilets</label>
              <select {...register("toilet")}>
                <option value="any">Any</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4+">4+</option>
              </select>
            </div>
            {/* <!-- number of bathroom --> */}
            <div className="filter-search-input">
              <label for="bathroom">Bathrooms</label>
              <select {...register("bathroom")}>
                <option value="any">Any</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4+">4+</option>
              </select>
            </div>
            {/* <!-- serviced --> */}
            <div className="filter-search-input">
              <label for="serviced">Serviced</label>
              <select {...register("serviced")}>
                <option value="any">Any</option>
                <option value="serviced">Serviced</option>
                <option value="not serviced">Not serviced</option>
              </select>
            </div>
            {/* <!-- price range --> */}
            <div className="minmax-input">
              <label for="min-range">Min price</label>
              <input
                {...register("minRange")}
                type="text"
                placeholder="Min price"
              />
            </div>
            <div>
              <label for="max-range">Max price</label>
              <input
                {...register("maxRange")}
                type="text"
                placeholder="Max price"
              />
            </div>
          </div>
        )}

        <div className="filter3 filter-card">
          {moreOptions && (
            <p onClick={handleOptions} className="filter-option">
              More Options <i className="fas fa-chevron-down"></i>
            </p>
          )}
          {lessOptions && (
            <p onClick={handleOptions} className="filter-option">
              Less Options <i className="fas fa-chevron-up"></i>
            </p>
          )}
          {/* <!-- filter search button --> */}

          <button type="submit">Search</button>
        </div>
      </form>
    </div>
  );
};

export default SearchCard;

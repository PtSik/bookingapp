import "./featuredProperties.css";

const FeaturedProperites = () => {
  return (
    <div className="fp">
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/13125860.jpg?k=b5f4783a8a6ecf84738e080755acfebf943253d71f4458fbe2510a356cf3d8c8&o=&hp=1"
          alt=""
          className="fp"
        />
        <span className="fpName">Aparthotel Stare Miasto</span>
        <span className="fpCity">Kraków</span>
        <span className="fpPrice">Już od 190zł</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Fantastyczny</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/215955381.jpg?k=ff739d1d9e0c8e233f78ee3ced82743ef0355e925df8db7135d83b55a00ca07a&o=&hp=1"
          alt=""
          className="fp"
        />
        <span className="fpName">7Seasons Apartments</span>
        <span className="fpCity">Budapeszt</span>
        <span className="fpPrice">Już od 140zł</span>
        <div className="fpRating">
          <button>8.8</button>
          <span>Fantastyczny</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/126708403.jpg?k=b4ec86cb5cb5fbef0a05f1e0c9357e09f02d9206caa7af51ccfd4ba8f2bfb3c2&o=&hp=1"
          alt=""
          className="fp"
        />
        <span className="fpName">P&J Luxury Apartments</span>
        <span className="fpCity">Kraków</span>
        <span className="fpPrice">Już od 450zł</span>
        <div className="fpRating">
          <button>8.2</button>
          <span>Bardzo Dobry</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/322658536.jpg?k=3fffe63a365fd0ccdc59210188e55188cdb7448b9ec1ddb71b0843172138ec07&o=&hp=1"
          alt=""
          className="fp"
        />
        <span className="fpName">Flora Chiado Apartments</span>
        <span className="fpCity">Lizbona</span>
        <span className="fpPrice">Już od 350zł</span>
        <div className="fpRating">
          <button>9.7</button>
          <span>Wyjątkowy</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperites;

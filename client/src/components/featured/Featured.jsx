import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
  const { data, loading, error } = useFetch(
    "/hotels/countByCity?cities=berlin,madryt,londyn"
  );

  return (
    <div className="featured">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="https://i.wpimg.pl/1200x/i.wp.pl/a/f/jpeg/32311/800-berlin_fotolia_44548462_berlinphotos030.jpeg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Berlin</h1>
              <h2>{data[0]} dostępnych</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://cdn.podroze.smcloud.net/t/photos/t/139398/madryt-gran-via_1025172.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Madryt</h1>
              <h2>{data[1]} dostępnych</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://www.national-geographic.pl/media/cache/slider_big/uploads/media/default/0014/04/londyn-poznaj-ciekawostki-historyczne-o-stolicy-anglii-co-warto-zobaczyc-w-londynie-fot-getty-images.jpeg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Londyn</h1>
              <h2>{data[2]} dostępnych</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;

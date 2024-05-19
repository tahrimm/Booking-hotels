import useFetch from "../../hooks/useFetch";
import "./featured.css";
const Featured = () => {
  const { data, loading, error } = useFetch(
    "https://booking-hotels-server.onrender.com/api/hotels/countByCity?cities=dhaka,cummila,chandpur"
  );

  return (
    <div className="featured">
      {loading ? (
        "Loading as render free server is slow plz wait..."
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Bangladesh_Bank_%2833398162476%29.jpg/288px-Bangladesh_Bank_%2833398162476%29.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Dhaka</h1>
              <h2>{data[0]} properties</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://www.touristplaces.com.bd/images/bp/p1128jpk.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Cummila</h1>
              <h2>{data[1]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://backoffice.daily-bangladesh.com/media/imgAll/2019September/English/1-1910031600.jpeg"
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Chandpur</h1>
              <h2>{data[2]} properties</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;

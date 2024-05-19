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
              src="https://i.guim.co.uk/img/media/a6fd9508fe930b3d16d06e18ee1ff465c05c736d/0_333_5329_3198/master/5329.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=b45b227866d9a25b5d4816cabf2f18f9"
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

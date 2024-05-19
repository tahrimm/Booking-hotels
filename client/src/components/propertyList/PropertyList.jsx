import useFetch from "../../hooks/useFetch";
import "./propertyList.css";

const PropertyList = () => {
  const { data, loading, error } = useFetch("https://booking-hotels-server.onrender.com/api/hotels/countByType");

  const images = [
    "https://imgs.search.brave.com/j0cQDed07HiEvfYBLVbmEoZzMhVmbsVf5frBRJ_KcF8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnRy/YXZlbGFwaS5jb20v/aG90ZWxzLzExMDAw/MDAwLzEwNDUwMDAw/LzEwNDQwMTAwLzEw/NDQwMDY5LzhhMDFm/ZDczX2IuanBn",
    "https://imgs.search.brave.com/3gSafRtw-kVqC9g00cHiXujq4z1MJ0pdXu1OZ-OVcjk/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWcu/aHduc3RhdGljLmNv/bS81MDAvMzUwLzgw/L2ZhbHNlL1M5ejdi/NDZOYklIZ3FHaDVy/Wkt6SjdEc2hhRlFK/Ojg4UjpwSERRbk8w/MmJXbGlNRk9UNG1u/SXdlTmdGZ0M3TDpZ/eGJFVFl2SktsYzly/NWRqQTJKN08xQ206/OW91bXE5RnJHWXFJ/b0dGNmxCLnFsZk9a/Z19f",
    "https://imgs.search.brave.com/TP2_344SYEYq6igcPoLvMz9XTE8ArpGoFLM3Nt5ARSE/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/dG9wMTBiZC5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMTkv/MDkvZHVzYWkuanBn",
    "https://imgs.search.brave.com/T8RypLTTAlOfgq6saisZseyhgjQ2uLzqhFx7TFYdKl4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZi5i/c3RhdGljLmNvbS94/ZGF0YS9pbWFnZXMv/aG90ZWwvbWF4NTAw/LzU0MjczMzcyNy5q/cGc_az0wNTdlMjY0/ZWE2MzlmM2ZkZDcy/MzkxNjZhODdkMTcz/NmQ2MGQxZDIwMGJk/YmRjMjFhODdiMTZh/ZDNlZDc4YzQ1Jm89",
    "https://imgs.search.brave.com/F14g_LyP2gQjsblY-YD7CGnJl2QOCsg3FadVhvE2hns/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZi5i/c3RhdGljLmNvbS94/ZGF0YS9pbWFnZXMv/aG90ZWwvMjcweDIw/MC81MjkyOTYzMDgu/anBnP2s9ZjMxMzdi/ZDI2ZTYxM2QzMmZh/OGJhYjQ5NmNiMjkw/NzZiMzY5Yzc4ZDgy/YmUwMjAxZjdkMjZm/YjZhZGNmOTM2ZiZv/PQ"
  ];
  return (
    <div className="pList">
      {loading ? (
        "Loading as render free server is slow plz wait..."
      ) : (
        <>
          {data &&
            images.map((img,i) => (
              <div className="pListItem" key={i}>
                <img
                  src={img}
                  alt=""
                  className="pListImg"
                />
                <div className="pListTitles">
                  <h1>{data[i]?.type}</h1>
                  <h2>{data[i]?.count} {data[i]?.type}</h2>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default PropertyList;

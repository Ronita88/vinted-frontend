import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://lereacteur-vinted-api.herokuapp.com/offers"
      );
      console.log(response.data);
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <div>
      {data.offers.map((offer, index) => {
        return (
          <Link to={`/offer/${offer.id}`} key={offer.id}>
            <p>{offer.product_name}</p>
            <img src={offer.product_image.secure_url} alt="" />
          </Link>
        );
      })}
    </div>
  );
};
export default Home;

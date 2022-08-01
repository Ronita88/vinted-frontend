import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/offers"
        );
        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <div>
      {data.offers.map((offer, index) => {
        return (
          <Link to={`/offer/${offer._id}`} key={offer._id}>
            <p>{offer.product_name}</p>
            <img src={offer.product_image.secure_url} alt="" />
          </Link>
        );
      })}
    </div>
  );
};
export default Home;

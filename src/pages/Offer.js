import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Offer = () => {
  const { id } = useParams();
  console.log(id);

  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/offers/" + id
        );
        console.log(response.data);
        setData(response.data[0]);
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
      <h1>{data.offers.product_price} €</h1>
    </div>
  );
};

export default Offer;

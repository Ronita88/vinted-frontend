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
        console.log("https://lereacteur-vinted-api.herokuapp.com/offers/" + id);
        const response = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/offer/" + id
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
      {<h1>{data.product_price} €</h1>}
      {<p>{data.product_name}</p>}
      {<p>{data.product_description}</p>}
      {<img src={data.product_image.secure_url} />}

      {data.product_details.map((inDetail) => {
        const keys = Object.keys(inDetail);
        return (
          <p>
            {keys[0]} : {inDetail[keys[0]]}
          </p>
        );
      })}
    </div>
  );
};

export default Offer;

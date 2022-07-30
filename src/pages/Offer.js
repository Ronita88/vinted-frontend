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

      {/* je fais un map de product_details pour afficher Marque, etat, couleur et emplacement*/}
      {details.map((inDetail, index) => {
        return <div key={index} inDetail={product_details.marque} />;
      })}
    </div>
  );
};

export default Offer;

import { useState } from "react";
import Hero from "../components/Hero";
import Card from "../components/Card";
import SearchBar from "../components/SearchBar";
import { toast } from "react-toastify";
import styles from "../styles/Home.module.css";

export default function Home({ restaurants }) {
  const [search, setSearch] = useState(null);

  const restaurantList =
    restaurants.length === 0 ? (
      <p>No restaurants have registered yet...</p>
    ) : !search ? (
      restaurants.map((rest, index) => {
        return <Card key={index} restaurantData={rest} />;
      })
    ) : (
      <Card restaurantData={search} />
    );

  const onSearch = (target) => {
    if (target === "" || !target) {
      return toast.info("Please type or select a restaurant");
    }

    const restaurant = restaurants.filter((res) => res.name === target);
    if (restaurant.length === 0) return toast.info("Restaurant does not exist");

    setSearch(restaurant[0]);
  };

  const onClearSearch = () => setSearch(null);

  return (
    <>
      <Hero
        title={"MIT Restaurant welcoming you"}
        subtitle={
          "The first app that you will find what you like."
        }
        buttonText={"Welcome"}
      />
      <div className={styles.main}>
        <div>
          <h1>Our Restaurants</h1>
          <div>
            {restaurants.length > 0 ? (
              <SearchBar
                onSearch={onSearch}
                onClear={onClearSearch}
                list={restaurants}
                placeholder="Restaurants..."
              />
            ) : (
              <></>
            )}
          </div>
          <div className={styles.list}>{restaurantList}</div>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {

  const api =   process.env.HOST_WEB_URI;
  
  
  const response = await fetch(`${api}/api/home/restaurants`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  const data = await response.json();
  const restaurants = data.restaurants;

  console.log("restaurants = "+JSON.stringify(restaurants));

  return {
    props: {
      restaurants,
    },
  };
}

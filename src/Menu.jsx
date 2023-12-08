/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Loader from "./Loader";
import MenuList from "./MenuList";
import styled from "styled-components";

const MenuDiv = styled.div`
  display: grid;
  grid-template-columns: 302px 302px 302px 302px 302px 302px;
  grid-auto-rows: minmax(100px, auto);
  place-items: center;
`;

function Menu({ menu = "", isClicked }) {
  const [foodList, setFoodList] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    function () {
      if (!menu) return;
      const menus = async function () {
        try {
          setIsLoading(true);
          const response = await fetch(
            `https://www.themealdb.com/api/json/v1/1/filter.php?i=${menu}`
          );
          if (!response.ok)
            throw new Error("Something is Wrong in the fetching menu data");

          const data = await response.json();
          console.log(data);
          setFoodList(data.meals || []);
          setIsLoading(false);
        } catch (err) {
          console.log(`Something went wrong ${err.message}`);
        } finally {
          setIsLoading(false);
        }
      };
      menus();
    },
    [menu]
  );
  console.log(menu);
  console.log(isClicked);
  console.log(foodList);
  return (
    <>
      {isClicked && (
        <MenuDiv className="m-auto text-3xl rounded-lg text-emerald-500">
          {!isLoading ? (
            foodList?.map((food) => (
              <MenuList
                key={food.idMeal}
                id={food.idMeal}
                foodItem={food.strMeal}
                foodImg={food.strMealThumb}
              />
            ))
          ) : (
            <Loader />
          )}
        </MenuDiv>
      )}
    </>
  );
}

export default Menu;

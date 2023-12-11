/* eslint-disable react/prop-types */
import Loader from "./Loader";
import MenuList from "./MenuList";
import styled from "styled-components";
import EmptyMenu from "./EmptyMenu";
import { useMenu } from "./useMenu";

const MenuDiv = styled.div`
  padding: 30px 10px;
  display: flex;
  place-items: center;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

function Menu({ menu = "", isClicked }) {
  const { foodList, isLoading } = useMenu(menu);

  return (
    <>
      {isClicked && (
        <MenuDiv className="m-auto text-3xl rounded-lg text-emerald-500">
          {!isLoading ? (
            foodList[0] ? (
              foodList?.map((food) => (
                <MenuList
                  key={food.idMeal}
                  id={food.idMeal}
                  foodItem={food.strMeal}
                  foodImg={food.strMealThumb}
                />
              ))
            ) : (
              <EmptyMenu />
            )
          ) : (
            <Loader />
          )}
        </MenuDiv>
      )}
    </>
  );
}

export default Menu;

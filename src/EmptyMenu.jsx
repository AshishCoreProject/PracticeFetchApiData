import styled from "styled-components";

const EmptyDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

function EmptyMenu() {
  return (
    <EmptyDiv>
      <h2 className="m-auto text-red-600">
        No Ingredients is matched with the Menu!
      </h2>
      <h3 className="m-auto text-gray-500">Search Something else...</h3>
    </EmptyDiv>
  );
}

export default EmptyMenu;

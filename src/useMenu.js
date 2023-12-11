import { useEffect, useState } from "react";

export function useMenu(menu) {
  const [foodList, setFoodList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(
    function () {
      if (!menu) return;

      const controller = new AbortController();
      const signal = controller.signal;

      const menus = async function () {
        try {
          setIsLoading(true);
          setError("");
          const response = await fetch(
            `https://www.themealdb.com/api/json/v1/1/search.php?s=${menu}`,
            { signal }
          );
          if (!response.ok)
            throw new Error("Something is Wrong in the fetching menu data");

          const data = await response.json();
          setFoodList(data.meals || []);
          //Resetting a Loading...
          setIsLoading(false);
        } catch (err) {
          console.log(`Something went wrong ${err.message}`);
          setError(err.message);
        } finally {
          //Resetting a loading...
          setIsLoading(false);
        }
      };

      if (menu.length <= 3) {
        setFoodList([]);
        setError("");
        return;
      }
      menus();

      //Clean up function
      return function () {
        controller.abort();
      };
    },
    [menu]
  );

  return { foodList, error, isLoading };
}

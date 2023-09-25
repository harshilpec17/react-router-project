// import { useEffect, useState } from "react";

import { useLoaderData } from "react-router-dom";

function Github() {
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch("https://api.github.com/users/harshilpec17")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setData(data);
  //     });
  // }, []);

  const data = useLoaderData();
  return (
    <h1 className="text-center m-4 p-8  bg-green-600 text-white text-4xl ">
      Github: {data.name}
    </h1>
  );
}

export default Github;

export const gitHubApiResponse = async () => {
  const response = await fetch("https://api.github.com/users/harshilpec17");
  return response.json();
};

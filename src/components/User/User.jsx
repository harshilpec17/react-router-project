import { useParams } from "react-router-dom";

function User() {
  const { userid } = useParams();
  return (
    <h1 className="bg-red-500 text-white p-8 text-4xl text-center m-8">
      User: {userid}
    </h1>
  );
}

export default User;

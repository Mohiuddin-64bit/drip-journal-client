import axios from "axios";
import { useEffect, useState } from "react";

const Admin = () => {
  const [information, setInformation] = useState([]);
  useEffect(() => {
    axios
      .get("https://drip-journal-server.vercel.app/allInformation")
      .then((res) => {
        setInformation(res.data);
      })
      .catch((error) => console.log(error.message));
  }, []);
  console.log(information);
  return (
    <div>
      <img
        className="w-64 mx-auto mt-12 mb-12"
        src={`https://i.ibb.co/wSbpCDJ/Logo.png`}
        alt=""
      />
      <h2 className="text-center font-bold text-2xl underline mb-2">
        All Subscriber
      </h2>
      <div className="overflow-x-auto w-full mx-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead className="text-center">
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {/* <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
            </tr> */}
            {information.map((info, index) => (
              <tr key={info._id}>
                <th>{index + 1}</th>
                <td>{info.name}</td>
                <td>{info.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admin;

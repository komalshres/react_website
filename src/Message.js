import React, { useEffect, useState } from "react";
import axios from "axios";

const Message = () => {
  const [info, setInfo] = useState();

  useEffect(() => {
    async function getData() {
      const res = await axios.get(
        "https://reactcontact-3386c-default-rtdb.asia-southeast1.firebasedatabase.app/userDataRecords.json"
      );
      console.log(res.data);
      setInfo(res.data);
      console.log(info.data);
    }
    getData();
  }, []);

  return (
    <div>
      {/* {info} */}
      {/* {info.map((x) => {
        return <div>{x.id}</div>;
      })} */}
    </div>
  );
};

export default Message;

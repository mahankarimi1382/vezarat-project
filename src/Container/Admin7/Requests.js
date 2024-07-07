import React, { useEffect, useState } from "react";

function Requests() {
  const [joinRequests, setJoinRequests] = useState([]);
  useEffect(() => {
    const request = JSON.parse(localStorage.getItem("requests"));
    setJoinRequests(request);
  }, []);
  console.log(joinRequests);
  return <div>Requests</div>;
}

export default Requests;

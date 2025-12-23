import { useEffect, useState } from "react";
import { getRequestsReceived } from "../api/get";
import FeedCard from "./feedCard";
import { requestReviwed } from "../api/post";

const Requests = () => {
  const [request, setRequest] = useState([]);

  const removeRequest = (id: string) => {
    const filterRequest = request?.requests.filter((req) => req._id !== id);
    return setRequest(filterRequest);
  };
  const setRequestStatus = async (requeststatus: string, requestId: string) => {
    try {
      const response = await requestReviwed(requeststatus, requestId);
      if (response) {
        return removeRequest(requestId);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleAccepted = (id: string) => {
    setRequestStatus("accepted", id);
  };
  const handleRejected = (id: string) => {
    setRequestStatus("rejected", id);
  };
  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const response = await getRequestsReceived();
        setRequest(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchRequests();
  }, []);

  if (!request?.requests || request?.requests.length === 0) {
    return <p>No requests available</p>;
  }
  return (
    <>
      {request?.requests.map((req, i) => (
        <FeedCard
          key={i}
          props={req.fromUserId}
          status={req.status}
          onRequestAccepted={() => handleAccepted(req._id)}
          onRequestRejected={() => handleRejected(req._id)}
        />
      ))}
      <>req</>
    </>
  );
};

export default Requests;

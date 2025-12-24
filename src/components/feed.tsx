import { useEffect, useState } from "react";
import { getFeed } from "../api/get";
// import { useDispatch, useSelector } from "react-redux";
// import { setFeed } from "../store/feedSlice";
import FeedCard from "./feedCard";
import { requestSend } from "../api/post";

const Feed = () => {
  const [userFeed, setUserFeed] = useState([]);

  const removeUser = (userId)=>userFeed.filter((user)=>{
    return user?._id !== userId})
    
  const sendRequest = async (requeststatus: string, requestId: string) => {
    try {
      const response = await requestSend(requeststatus, requestId);
      console.log('response:',response);
      
      if(response){
        console.log("called")
        setUserFeed(removeUser(requestId))
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleRequestInterested = (id: string) => {
    return sendRequest("interested", id);
  };

  const handleRequestIgnored = (id: string) => {
    return sendRequest("ignored", id);
  };

  useEffect(() => {
    const fetchFeed = async () => {
      try {
        const response = await getFeed(1, 10);
        setUserFeed(response.users);
      } catch (error) {
        console.log(error);
      }
    };
    fetchFeed();
  }, [userFeed]); //  TODO 
  

  return (
    <div>
      {userFeed?.length > 0 ? (
        <FeedCard
          props={userFeed?.[0]}
          onRequestInterested={() =>
            handleRequestInterested(userFeed?.[0]?._id)
          }
          onRequestIgnored={() =>
            handleRequestIgnored(userFeed?.[0]?._id)
          }
        />
      ) : (
        <p>No feeds available</p>
      )}
    </div>
  );
};

export default Feed;

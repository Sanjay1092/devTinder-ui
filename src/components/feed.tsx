import { useEffect } from "react";
import { getFeed } from "../api/get";
import { useDispatch, useSelector } from "react-redux";
import { setFeed } from "../store/feedSlice";
import FeedCard from "./feedCard";

const Feed = () => {
  const dispatch = useDispatch()
  const feedData = useSelector((store)=>store.feed)
  console.log("Feed Data:", feedData?.users?.[0]);
  useEffect(() => {
    const fetchFeed = async () => {
      try {
        const response = await getFeed(1, 10);
        dispatch(setFeed(response));
      } catch (error) {
        console.log(error);
      }
    };
    if(!feedData.users){ fetchFeed();}
  }, []);

  return <div>{feedData.users ?<FeedCard props={feedData?.users?.[0]}/>: <p>No feeds available</p>}</div>;
};

export default Feed;

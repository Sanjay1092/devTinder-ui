import Navbar from "./navbar";
import { Outlet, useNavigate } from "react-router-dom";
import Footer from "./footer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { profileView } from "../api/get";
import { addUser } from "../store/userSlice";

const Layout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  useEffect(() => {
    const fetchProfileView = async () => {
      try {
        const response = await profileView();
        dispatch(addUser(response));
      } catch (error) {
        if (error.status === 401) {
          navigate("/login");
        }

        console.log(error);
      }
    };
    if (!user) {
      fetchProfileView();
    }
  }, [user, dispatch, navigate]);
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;

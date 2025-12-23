import { BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "../components/login";
import Feed from "../components/feed";
import Layout from "../components/layout";
import Profile from "../components/profile";
import Connections from "../components/connections";
import Requests from "../components/requests";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout/>}>
          <Route index element={<Feed />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signup" element={<div>Signup Page</div>} />
          <Route path="/connections" element={<Connections />} />
          <Route path="/requests" element={<Requests />} />
          </Route>
       
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;

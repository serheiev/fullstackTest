import { UserPage } from "../pages/UserPage/UserPage";
import { LoginPage } from "../pages/LoginPage/LoginPage";
import { RegisterPage } from "../pages/RegisterPage/RegisterPage";
import { Routes, Route } from "react-router-dom";
// import { PrivateRouter } from "../router/PrivateRouter";
import { StartPage } from "../pages/StartPage/StartPage";
import { HomePage } from "../pages/HomePage/HomePage";

export const App = () => {
  return (
    // <Routes>
    //   <Route path="/" element={<PrivateRouter />}>
    //     <Route index element={<StartPage />} />
    //   </Route>
    //   <Route path="user" element={<PrivateRouter />}>
    //     <Route index element={<UserPage />} />
    //   </Route>

    //   <Route path="login" element={<LoginPage />} />
    //   <Route path="register" element={<RegisterPage />} />
    // </Routes>
    <Routes>
      <Route path="/" element={<StartPage />}>
        <Route index element={<HomePage />} />
        <Route path="user" element={<UserPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
      </Route>
    </Routes>
  );
};

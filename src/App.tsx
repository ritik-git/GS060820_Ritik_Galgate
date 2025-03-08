import  { Suspense, lazy } from "react";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";

import AppLayout from "./components/layout/AppLayout";
import Loader from "./components/common/Loader";
import InternetError from "./components/InternetError";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 

import "./App.css";

const SignInPage = lazy(()=>import("./pages/auth/Signin"))
const StoresPage = lazy(() => import("./pages/StorePage"));
const SKUsPage = lazy(() => import("./pages/SKUsPage"));
const PlanningPage = lazy(() => import("./pages/PlanningTable"));
const ChartsPage = lazy(() => import("./pages/ChartsPage"));

function App() {
  const isAuthenticated = localStorage.getItem("auth");
  console.log("🚀 ~ App ~ isAuthenticated:", isAuthenticated)

  return (
    <>
    <ToastContainer position="top-right" autoClose={3000} />
      <InternetError />
      <HashRouter>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/signin" element={<SignInPage />} />
            <Route
              path="/*"
              element={isAuthenticated ? <AppLayout /> : <Navigate to="/signin" replace />}
            >
             {/* <Route
              path="/*"
              element={ <AppLayout  />}
            > */}
              <Route index element={<Navigate to="/stores" replace />} />
              <Route path="stores" element={<StoresPage />} />
              <Route path="skus" element={<SKUsPage />} />
              <Route path="planning" element={<PlanningPage />} />
              <Route path="charts" element={<ChartsPage />} />
            </Route>
          </Routes>
        </Suspense>
      </HashRouter>
    </>
  );
}

export default App;
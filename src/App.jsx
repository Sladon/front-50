import React from "react";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import ProfilePage from "./components/ProfilePage/Profilepage";
import Stores from "./components/Stores/Stores";
import Compare from "./components/Compare/Compare";
import Product from "./components/Product/Product";
import Store from "./components/Store/Store";
import { HashRouter, Route, Routes } from "react-router-dom";

const App = () => {
    return (
        <div>
            <HashRouter>
                <Routes>
                    <Route exact path="/profile" element={<ProfilePage />} />
                    <Route exact path="/stores" element={<Stores />} />
                    <Route exact path="/compare" element={<Compare />} />
                    <Route exact path="/product" element={<Product />} />
                    <Route exact path="/store" element={<Store />} />
                </Routes>
                <NavigationBar />
            </HashRouter>
        </div>
    );
};

export default App;

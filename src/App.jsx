import React from "react";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import ProfilePage from "./components/ProfilePage/Profilepage";
import Stores from "./components/Stores/Stores";
import Compare from "./components/Compare/Compare";
import Product from "./components/Product/Product";
import Reviews from "./components/Product/Reviews";
import EditPrice from "./components/Product/EditPrice";
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
                    <Route exact path="/product/:id" element={<Product />} />
                    <Route exact path="/product/:id/reviews" element={<Reviews />} />
                    <Route exact path="/product/:id/edit" element={<EditPrice />} />
                    <Route exact path="/store/:id" element={<Store />} />
                </Routes>
                <NavigationBar />
            </HashRouter>
        </div>
    );
};

export default App;

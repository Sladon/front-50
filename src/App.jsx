import React from 'react';
import {  BrowserRouter as Router ,Routes, Route, Link } from 'react-router-dom';
import NavigationBar from './components/NavigationBar/NavigationBar';
import ProfilePage from './components/ProfilePage/Profilepage';
import Stores from './components/Stores/Stores';
import Compare from './components/Compare/Compare';
import Product from './components/Product/Product';
import Reviews from './components/Product/Reviews';
import EditPrice from './components/Product/EditPrice';
import NewReview from './components/Product/NewReview';
import Store from './components/Store/Store';
import Login from './components/Sesion/Login'; 

const App = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/login" element={<Login />} /> 
                    <Route path="/profile" element={<ProfilePage />} />
                    <Route path="/stores" element={<Stores />} />
                    <Route path="/compare" element={<Compare />} />
                    <Route path="/product/:id" element={<Product />} />
                    <Route path="/product/:id/reviews" element={<Reviews />} />
                    <Route path="/product/:id/reviews/add" element={<NewReview />} />
                    <Route path="/product/:id/reviews/add_review" element={<NewReview />} />
                    <Route path="/product/:id/edit" element={<EditPrice />} />
                    <Route path="/store/:id" element={<Store />} />
                </Routes>
                <NavigationBar />
            </Router>
        </div>
    );
};

export default App;

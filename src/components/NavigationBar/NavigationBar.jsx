import React, { useState, useEffect } from "react";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CompareIcon from "@mui/icons-material/Compare";
import StoreIcon from "@mui/icons-material/Store";
import "./NavigationBar.css";
import { useNavigate } from "react-router-dom";

const NavigationBar = () => {
    const [value, setValue] = useState(0);
    const [isLogged, setIsLogged] = useState(() => {
        const storedIsLogged = localStorage.getItem('isLogged');
        return storedIsLogged ? JSON.parse(storedIsLogged) : false;
    });
    
    useEffect(() => {
        localStorage.setItem('isLogged', JSON.stringify(isLogged));
    }, [isLogged]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const navigate = useNavigate();

    const handleAccountClick = () => {
        if (isLogged) {
            navigate("/profile");
        } else {
            navigate("/Login");
        }
    };

    return (
        <BottomNavigation
            className="bottom-nav"
            value={value}
            onChange={handleChange}
        >
            <BottomNavigationAction
                label="Cuenta"
                value="Cuenta"
                icon={<AccountCircleIcon />}
                onClick={handleAccountClick}
            />
            <BottomNavigationAction
                label="Comparar"
                value="Comparar"
                icon={<CompareIcon />}
                onClick={() => navigate("/compare")}
            />
            <BottomNavigationAction
                label="Locales"
                value="Locales"
                icon={<StoreIcon />}
                onClick={() => navigate("/stores")}
            />
        </BottomNavigation>
    );
};

export default NavigationBar;
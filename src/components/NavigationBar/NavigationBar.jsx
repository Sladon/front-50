import React, { useState, useEffect } from "react";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CompareIcon from "@mui/icons-material/Compare";
import StoreIcon from "@mui/icons-material/Store";
import "./NavigationBar.css";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../context";

const NavigationBar = () => {
    const [value, setValue] = useState(0);
    const { islogged } = useGlobalContext();

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const navigate = useNavigate();

    const handleAccountClick = () => {
        if (islogged) {
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
import React, { useState, useEffect }  from "react";
import { Grid, Typography, Avatar, Button } from "@mui/material";
import { useGlobalContext } from "../../context";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
    const navigate = useNavigate();
    const { setIslogged, setUsername, setUsermail, setUserid, setUserrol } = useGlobalContext();
    const { username } = useGlobalContext()
    const { usermail } = useGlobalContext()
    
    const handleLogout = () => {
        setIslogged(false);
        setUsername(null);
        setUsermail(null);
        setUserid(null);
        setUserrol(null);
        navigate('/login');
    };

    return (
        <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={2}
            style={{ minHeight: "100vh" }}
        >
            <Grid item>
                <Avatar
                    sx={{
                        width: 300,
                        height: 300,
                        margin: "20px auto",
                    }}
                    alt="Nombre de usuario"
                    src="https://thispersondoesnotexist.com/"
                />
            </Grid>

            <Grid item>
                <Grid item>
                    <Typography variant="h5">Nombre</Typography>
                    <Typography variant="body1">{username}</Typography>
                </Grid>

                <Grid item>
                    <Typography variant="h5">Correo</Typography>
                    <Typography variant="body1">{usermail}</Typography>
                </Grid>
            </Grid>

            <Grid item>
            <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={handleLogout}
            >
                Cerrar Sesión
            </Button>
            </Grid>
        </Grid>
    );
};

export default ProfilePage;

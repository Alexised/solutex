import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import jwtDecode from "jwt-decode";
import config from "../config";
import { blue } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';
import { makeStyles } from "@mui/styles";
import PersonIcon from "@mui/icons-material/Person";

const TOKEN_KEY = "SOLD_TOKEN";
const API = `${config.api_url}/users`;
export function getToken() {
  return localStorage.getItem(TOKEN_KEY);
}

const useStyles = makeStyles({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
});
export function deleteToken(e) {
  e.preventDefault();
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem("id");

  window.location = "/";
}

const Header = (props) => {
  const [styleactive, setstyleactive] = useState({
    home: "nav-item",
    createproduct: "nav-item",
    register: "nav-item",
    login: "nav-item",
    my_products:"nav-item",
  });
  const [user, setUser] = useState([]);
  const [loaduser, setLoaduser] = useState(null);
  const classes = useStyles();

  const getactive = () => {
    const data = styleactive;
    let url = window.location.href.substr(21);
    switch (url) {
      case "/":
        data.home = "nav-item active";
        data.register = "nav-item";
        data.login = "nav-item";
        break;
      case "/register":
        data.home = "nav-item";
        data.register = "nav-item active";
        data.login = "nav-item";
        break;
      case "/login":
        data.home = "nav-item";
        data.register = "nav-item";
        data.login = "nav-item active";
        break;
      default:
    }
    // setstyleactive(data)
  };
  const getuser = async (id) => {
    const payload = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };

    try {
      const result = await fetch(`${API}/${id}`, payload);
      const user = await result.json();
      if (user && user.name) {
        setUser(user);
        localStorage.setItem("id", id);
        // console.log(user.name);
      }

      // console.log(result)
    } catch (error) {
      console.error("Error :(", error);
    }
  };

  useEffect(() => {
    // console.log(jwtDecode(localStorage.getItem(TOKEN_KEY)))
    getactive();
    async function loaduser() {
      // console.log(getToken())

      if (!getToken()) {
        setLoaduser(false);
        return;
      }
      try {
        let decoded = jwtDecode(localStorage.getItem(TOKEN_KEY));
        // console.log(decoded._id);
        // setId(decoded._id);
        setLoaduser(true);
        getuser(decoded._id);
      } catch (error) {
        console.log(error);
      }
    }
    loaduser();
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <Link className="navbar-brand" to="/">
            solutex
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              {loaduser && (
                <>
                  <li className="nav-item">
                    <Avatar className={classes.avatar}>
                      <PersonIcon />
                    </Avatar>
                    {/* <span className="sr-only"></span> */}
                  </li>
                  <li className="nav-item active">
                    <Link className="nav-link" to="/">
                      {user.name}
                    </Link>
                  </li>         
                  <li class="no-bullet">
                    <Link className="nav-link" to="/home" onClick={deleteToken}>
                      Salir
                    </Link>
                  </li>
                </>
              )}
              <li className={styleactive.home}>
                <Link className="nav-link" to="/">
                  Home
                  <span className="sr-only">(current)</span>
                </Link>
              </li>
              {!loaduser && (
                <>
                  <li className={styleactive.register}>
                    <Link className="nav-link" to="/register">
                      Register
                    </Link>
                  </li>

                  <li className={styleactive.login}>
                    <Link className="nav-link" to="/login">
                      Login
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Header;
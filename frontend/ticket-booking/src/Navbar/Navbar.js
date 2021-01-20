import React from "react";
import classess from "./Navbar.module.css";
import LOGO from "./logo192.png";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import MenuItem from "@material-ui/core/MenuItem";
import { Link } from "react-router-dom";
const navbar = () => {
  const currencies = [
    {
      value: "USD",
      label: "$",
    },
    {
      value: "EUR",
      label: "€",
    },
    {
      value: "BTC",
      label: "฿",
    },
    {
      value: "JPY",
      label: "¥",
    },
  ];

  return (
    <div>
      <nav className={classess.Navbar__nav}>
        <div className={classess.Navbar__Left}>
          <img
            className={classess.Navbar__IconReact}
            src={LOGO}
            alt="not avilable"
          />
          <Link className={classess.style} to="/home">
            <p>About</p>
          </Link>
          <Link className={classess.style} to="/history">
            <p>History</p>
          </Link>
          <Link className={classess.style} to="/adjust">
            <p>Adjust</p>
          </Link>
          <Link className={classess.style} to="/swap">
            <p>Swap</p>
          </Link>
          <Link className={classess.style} to="/snacks">
            <p>Snacks</p>
          </Link>
        </div>
        <div className={classess.Navbar__Middel}>
          <TextField
            id="filled-select-currency"
            select
            label="City Name"
            helperText="Please select your City"
            margin="normal"
            variant="filled"
            className={classess.inputField1}
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>
        <div className={classess.Navbar__Right}>
          <p>
            <TextField
              label="Search for Movie"
              placeholder="Moviename"
              inputProps={{ "aria-label": "Search for Movie" }}
              className={classess.inputField2}
            />
          </p>

          <p>
            <AccountCircleIcon className={classess.Navbar__IconLogin} />
          </p>
          <Link className={classess.style} to="/login?register">
            <p>Login/Register</p>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default navbar;

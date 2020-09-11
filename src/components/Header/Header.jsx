import React from "react";
import style from "./Header.module.css";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/Logo.svg";
import { Button } from '../components';

export const Header = () => {

  window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle(style.sticky, window.scrollY > 150)
  })

  return (
    <header class={style.header}>
      <div className="container">
        <nav className={style.nav}>
          <NavLink to="/" className={style.logo}>
            <img src={Logo} />
            <h4 className={style.logoTitle}>Covid - 19</h4>
          </NavLink>
          <ul className={style.menu}>
            <li className={style.menu_item}>
              <NavLink activeClassName={style.active} exact to="/">
                Overview
              </NavLink>
            </li>
            <li className={style.menu_item}>
              <NavLink activeClassName={style.active} exact to="/contagion">
                Contagion
              </NavLink>
            </li>
            <li className={style.menu_item}>
              <NavLink activeClassName={style.active} exact to="/symptoms">
                Symptoms
              </NavLink>
            </li>
            <li className={style.menu_item}>
              <NavLink activeClassName={style.active} exact to="/treatment">
                Treatment
              </NavLink>
            </li>
            <Button outline={true}>Contact</Button>
          </ul>
        </nav>
      </div>
    </header>
  );
};
import React, { useState } from "react";
import "../assets/style.css";
import Image1 from "../assets/Image/proaxiom-symbol+text.png";

import ButtonBold from "./Button-bold";
const Nav = () => {
  const [id, setId] = useState(1);
  const [ids, setIds] = useState(1);
  const handleChange = (a) => {
    setId(a);
  };
  const togglepage = () => {
    if (ids == 1) setIds(2);
    else setIds(1);
  };

  return (
    <>
      <div id="header-navigation" className=" nav-a">
        <div data-testid="header-nav-dropdown" className="nav-b">
          <div>
            <div className=" top-a">
              <div className=" top-text">
                <a onClick={() => handleChange(2)}>
                  <div tabindex="0" className=" top-content">
                    <svg
                      alt="Globe"
                      aria-hidden="true"
                      className="top-c"
                      width="48"
                      height="48"
                      viewBox="0 0 48 48"
                      fill="none"
                    >
                      <path
                        d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"
                        stroke="currentColor"
                        stroke-width="3"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M4 24H44"
                        stroke="currentColor"
                        stroke-width="3"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M24 4C29.0026 9.47671 31.8455 16.5841 32 24C31.8455 31.4159 29.0026 38.5233 24 44C18.9974 38.5233 16.1545 31.4159 16 24C16.1545 16.5841 18.9974 9.47671 24 4V4Z"
                        stroke="currentColor"
                        stroke-width="3"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                    <span>English</span>
                    <svg
                      className="upper-arrow"
                      viewBox="0 0 13 7"
                      fill="none"
                      color="black"
                      version="1.1"
                      // xmlns="http://www.w3.org/2000/svg"
                      // xmlns:xlink="http://www.w3.org/1999/xlink"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M5.8434 0.256281C6.20603 -0.0854279 6.79397 -0.0854278 7.1566 0.256281L12.728 5.50628C13.0907 5.84799 13.0907 6.40201 12.728 6.74372C12.3654 7.08543 11.7775 7.08543 11.4148 6.74372L6.5 2.11244L1.58517 6.74372C1.22254 7.08543 0.634602 7.08543 0.271972 6.74372C-0.0906581 6.40201 -0.0906571 5.84799 0.271973 5.50628L5.8434 0.256281Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </a>
                <div className="top-b">
                  <svg
                    alt="Globe"
                    tabindex="0"
                    className=" top-c"
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                  >
                    <path
                      d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"
                      stroke="currentColor"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M4 24H44"
                      stroke="currentColor"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M24 4C29.0026 9.47671 31.8455 16.5841 32 24C31.8455 31.4159 29.0026 38.5233 24 44C18.9974 38.5233 16.1545 31.4159 16 24C16.1545 16.5841 18.9974 9.47671 24 4V4Z"
                      stroke="currentColor"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </div>
                <div
                  className={`${
                    id == 2 ? "select-languageopen" : "select-languageclose"
                  }`}
                >
                  <div
                    data-focus-guard="true"
                    tabindex="0"
                    style={{
                      width: "1px",
                      height: "0px",
                      padding: "0px",
                      overflow: "hidden",
                      position: "fixed",
                      top: "1px",
                      left: "1px",
                    }}
                  ></div>
                  <div data-focus-lock-disabled="false">
                    <span
                      tabindex="0"
                      onClick={() => handleChange(1)}
                      className="language-active"
                    >
                      English
                      <svg
                        width="20"
                        height="21"
                        viewBox="0 0 20 21"
                        fill="none"
                      >
                        <path
                          d="M16.6666 5.5L7.49992 14.6667L3.33325 10.5"
                          stroke="#007EFF"
                          stroke-width="1.66667"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </span>
                    <span
                      onClick={() => handleChange(1)}
                      tabindex="0"
                      className="language-notactive "
                    >
                      Français
                    </span>
                    <span
                      onClick={() => handleChange(1)}
                      tabindex="0"
                      className="language-notactive "
                    >
                      Español
                    </span>
                    <span
                      onClick={() => handleChange(1)}
                      tabindex="0"
                      className="language-notactive "
                    >
                      Deutsch
                    </span>
                    <span
                      onClick={() => handleChange(1)}
                      tabindex="0"
                      className="language-notactive "
                    >
                      Português
                    </span>
                  </div>
                  <div
                    data-focus-guard="true"
                    tabindex="0"
                    style={{
                      width: "1px",
                      height: "0px",
                      padding: "0p",
                      overflow: "hidden",
                      position: "fixed",
                      top: "1px",
                      left: "1px",
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <nav className="sc-1n3rarh-5 header" data-testid="header">
          <div className="header-aj header-b">
            <a
              type="base"
              className="name header-name"
              href="/"
            >
              <div
                className="logo-display logo-wrapper"
                data-testid="logo"
                width="auto"
              >
                <img
                  src={Image1}
                  alt="Calendly logo"
                  width="auto"
                  className="logo-img"
                  style={{ width: "168px", height: "20px" }}
                />
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTI3LjQxNjYgMjUuOTI5OEMyNi4xMjE2IDI3LjA1NTQgMjQuNTEwNSAyOC40NTY2IDIxLjU3NjQgMjguNDU2NkgxOS44MjQ3QzE3LjcwNDMgMjguNDU2NiAxNS43NzU5IDI3LjcwMiAxNC4zOTU1IDI2LjMzMDdDMTMuMDQ3OCAyNC45OTE0IDEyLjMwNDMgMjMuMTU5NSAxMi4zMDQzIDIxLjE3MDJWMTguODE3OUMxMi4zMDQzIDE2LjgyODYgMTMuMDQ2NiAxNC45OTU1IDE0LjM5NTUgMTMuNjU3NEMxNS43NzU5IDEyLjI4NiAxNy43MDQzIDExLjUzMTQgMTkuODI0NyAxMS41MzE0SDIxLjU3NjRDMjQuNTEwNSAxMS41MzE0IDI2LjEyMTYgMTIuOTMyNiAyNy40MTY2IDE0LjA1ODJDMjguNzU5NiAxNS4yMjYzIDI5LjkxOTkgMTYuMjM0OCAzMy4wMDk4IDE2LjIzNDhDMzMuNDg5OCAxNi4yMzQ4IDMzLjk2MDUgMTYuMTk2OSAzNC40MTgzIDE2LjEyNDVDMzQuNDE0OCAxNi4xMTUzIDM0LjQxMTMgMTYuMTA3MyAzNC40MDc4IDE2LjA5ODFDMzQuMjI0IDE1LjY1MTMgMzQuMDA3MyAxNS4yMTI1IDMzLjc1OCAxNC43ODg3TDMxLjY5MTQgMTEuMjc3NkMyOS43OTU4IDguMDU1ODUgMjYuMjkxNCA2LjA3MjI3IDIyLjUwMDIgNi4wNzIyN0gxOC4zNjdDMTQuNTc1OCA2LjA3MjI3IDExLjA3MTQgOC4wNTY5OSA5LjE3NTc3IDExLjI3NzZMNy4xMDkyMiAxNC43ODg3QzUuMjEzNTkgMTguMDEwNSA1LjIxMzU5IDIxLjk3ODcgNy4xMDkyMiAyNS4xOTkzTDkuMTc1NzcgMjguNzEwNUMxMS4wNzE0IDMxLjkzMjIgMTQuNTc1OCAzMy45MTU4IDE4LjM2NyAzMy45MTU4SDIyLjUwMDJDMjYuMjkxNCAzMy45MTU4IDI5Ljc5NTggMzEuOTMxMSAzMS42OTE0IDI4LjcxMDVMMzMuNzU4IDI1LjE5OTNDMzQuMDA3MyAyNC43NzQ0IDM0LjIyNCAyNC4zMzY3IDM0LjQwNzggMjMuODlDMzQuNDExMyAyMy44ODA4IDM0LjQxNDggMjMuODcyNyAzNC40MTgzIDIzLjg2MzVDMzMuOTYwNSAyMy43OTEyIDMzLjQ5MSAyMy43NTMzIDMzLjAwOTggMjMuNzUzM0MyOS45MTk5IDIzLjc1MzMgMjguNzU5NiAyNC43NjE3IDI3LjQxNjYgMjUuOTI5OFoiIGZpbGw9IiMwMDZCRkYiLz4KPHBhdGggZD0iTTIxLjU3NjcgMTMuNjYyMUgxOS44MjVDMTYuNTk4MiAxMy42NjIxIDE0LjQ3NjYgMTUuOTIzNiAxNC40NzY2IDE4LjgxOFYyMS4xNzAzQzE0LjQ3NjYgMjQuMDY0NyAxNi41OTcgMjYuMzI2MiAxOS44MjUgMjYuMzI2MkgyMS41NzY3QzI2LjI3ODggMjYuMzI2MiAyNS45MSAyMS42MjI4IDMzLjAxMDEgMjEuNjIyOEMzMy42OTA0IDIxLjYyMjggMzQuMzYyNCAyMS42ODM3IDM1LjAxNjkgMjEuODAzMUMzNS4yMzI0IDIwLjYwNzUgMzUuMjMyNCAxOS4zODMxIDM1LjAxNjkgMTguMTg2M0MzNC4zNjI0IDE4LjMwNTggMzMuNjkwNCAxOC4zNjY2IDMzLjAxMDEgMTguMzY2NkMyNS45MSAxOC4zNjU1IDI2LjI3ODggMTMuNjYyMSAyMS41NzY3IDEzLjY2MjFaIiBmaWxsPSIjMDA2QkZGIi8+CjxwYXRoIGQ9Ik0zOS4wOTUgMjMuNTIwM0MzNy44ODIgMjIuNjQyOCAzNi40OTEgMjIuMDcwOCAzNS4wMTU3IDIxLjgwMDlDMzUuMDEzNCAyMS44MTI0IDM1LjAxMjIgMjEuODIzOSAzNS4wMDk5IDIxLjgzNTRDMzQuODgzNCAyMi41MjQ1IDM0LjY4NjcgMjMuMjAzMyAzNC40MTc0IDIzLjg2MTRDMzUuNjYyIDI0LjA1OSAzNi44MDk1IDI0LjUxODQgMzcuNzg5NSAyNS4yMjI1QzM3Ljc4NiAyNS4yMzI4IDM3Ljc4MzYgMjUuMjQzMiAzNy43ODAxIDI1LjI1NDdDMzcuMjE0NiAyNy4wNTU2IDM2LjM2MjIgMjguNzUzMiAzNS4yNDc2IDMwLjI5OEMzNC4xNDU4IDMxLjgyMzMgMzIuODE0NSAzMy4xNjYgMzEuMjg4OSAzNC4yODgxQzI4LjEyMTcgMzYuNjE4NiAyNC4zNDkyIDM3Ljg0OTggMjAuMzc3NiAzNy44NDk4QzE3LjkxODggMzcuODQ5OCAxNS41MzUgMzcuMzc3OCAxMy4yOTE2IDM2LjQ0NzRDMTEuMTI0MyAzNS41NDgxIDkuMTc3MTggMzQuMjYwNSA3LjUwNDAyIDMyLjYxOTJDNS44MzA4NiAzMC45Nzc5IDQuNTE4MzUgMjkuMDY3OSAzLjYwMTU2IDI2Ljk0MTlDMi42NTMxNyAyNC43NDEyIDIuMTcxOTQgMjIuNDAyOCAyLjE3MTk0IDE5Ljk5MDhDMi4xNzE5NCAxNy41Nzg4IDIuNjUzMTcgMTUuMjQwMyAzLjYwMTU2IDEzLjAzOTdDNC41MTgzNSAxMC45MTM3IDUuODMwODYgOS4wMDM2IDcuNTA0MDIgNy4zNjIzQzkuMTc3MTggNS43MjEgMTEuMTI0MyA0LjQzMzQ2IDEzLjI5MTYgMy41MzQxNEMxNS41MzUgMi42MDM4IDE3LjkxODggMi4xMzE3NCAyMC4zNzc2IDIuMTMxNzRDMjQuMzQ5MiAyLjEzMTc0IDI4LjEyMTcgMy4zNjMwMSAzMS4yODg5IDUuNjkzNDVDMzIuODE0NSA2LjgxNTU5IDM0LjE0NTggOC4xNTgyNyAzNS4yNDc2IDkuNjgzNTZDMzYuMzYyMiAxMS4yMjg0IDM3LjIxNDYgMTIuOTI2IDM3Ljc4MDEgMTQuNzI2OUMzNy43ODM2IDE0LjczODQgMzcuNzg3MSAxNC43NDg3IDM3Ljc4OTUgMTQuNzU5MUMzNi44MDk1IDE1LjQ2MzEgMzUuNjYyIDE1LjkyMzcgMzQuNDE3NCAxNi4xMjAxQzM0LjY4NjcgMTYuNzc5NCAzNC44ODQ2IDE3LjQ1OTMgMzUuMDA5OSAxOC4xNDg1QzM1LjAxMjIgMTguMTYgMzUuMDEzNCAxOC4xNzAzIDM1LjAxNTcgMTguMTgxOEMzNi40OTEgMTcuOTExOSAzNy44ODA4IDE3LjMzOTkgMzkuMDk1IDE2LjQ2MjRDNDAuMjU3NiAxNS42MTgyIDQwLjAzMjggMTQuNjY0OSAzOS44NTYgMTQuMDk5OEMzNy4yOTMgNS45MzQ2NCAyOS41NDIgMCAyMC4zNzc2IDBDOS4xMjMzNCAwIDAgOC45NDk2MiAwIDE5Ljk4OTZDMCAzMS4wMjk2IDkuMTIzMzQgMzkuOTc5MyAyMC4zNzc2IDM5Ljk3OTNDMjkuNTQyIDM5Ljk3OTMgMzcuMjkzIDM0LjA0NDYgMzkuODU2IDI1Ljg3OTVDNDAuMDMyOCAyNS4zMTc4IDQwLjI1ODggMjQuMzY0NSAzOS4wOTUgMjMuNTIwM1oiIGZpbGw9IiMwMDZCRkYiLz4KPHBhdGggZD0iTTM0LjQxODcgMTYuMTIyNEMzMy45NjA5IDE2LjE5NDggMzMuNDkxNCAxNi4yMzI3IDMzLjAxMDIgMTYuMjMyN0MyOS45MjAzIDE2LjIzMjcgMjguNzYgMTUuMjI0MiAyNy40MTcgMTQuMDU2MUMyNi4xMjIgMTIuOTMwNSAyNC41MTA5IDExLjUyOTMgMjEuNTc2NyAxMS41MjkzSDE5LjgyNTFDMTcuNzA0NyAxMS41MjkzIDE1Ljc3NjMgMTIuMjgzOSAxNC4zOTU5IDEzLjY1NTNDMTMuMDQ4MiAxNC45OTQ1IDEyLjMwNDcgMTYuODI2NSAxMi4zMDQ3IDE4LjgxNThWMjEuMTY4MUMxMi4zMDQ3IDIzLjE1NzQgMTMuMDQ3IDI0Ljk5MDUgMTQuMzk1OSAyNi4zMjg2QzE1Ljc3NjMgMjcuNjk5OSAxNy43MDQ3IDI4LjQ1NDYgMTkuODI1MSAyOC40NTQ2SDIxLjU3NjdDMjQuNTEwOSAyOC40NTQ2IDI2LjEyMiAyNy4wNTMzIDI3LjQxNyAyNS45Mjc3QzI4Ljc2IDI0Ljc1OTYgMjkuOTIwMyAyMy43NTEyIDMzLjAxMDIgMjMuNzUxMkMzMy40OTAyIDIzLjc1MTIgMzMuOTYwOSAyMy43ODkxIDM0LjQxODcgMjMuODYxNEMzNC42ODggMjMuMjAzMyAzNC44ODQ3IDIyLjUyMzQgMzUuMDExMiAyMS44MzU0QzM1LjAxMzUgMjEuODIzOSAzNS4wMTQ3IDIxLjgxMjQgMzUuMDE3IDIxLjgwMDlDMzQuMzYyNSAyMS42ODE1IDMzLjY5MDQgMjEuNjIwNiAzMy4wMTAyIDIxLjYyMDZDMjUuOTEwMSAyMS42MjA2IDI2LjI3ODkgMjYuMzI0IDIxLjU3NjcgMjYuMzI0SDE5LjgyNTFDMTYuNTk4MyAyNi4zMjQgMTQuNDc2NiAyNC4wNjI0IDE0LjQ3NjYgMjEuMTY4MVYxOC44MTU4QzE0LjQ3NjYgMTUuOTIxNCAxNi41OTcxIDEzLjY1OTkgMTkuODI1MSAxMy42NTk5SDIxLjU3NjdDMjYuMjc4OSAxMy42NTk5IDI1LjkxMDEgMTguMzYzMyAzMy4wMTAyIDE4LjM2MzNDMzMuNjkwNCAxOC4zNjMzIDM0LjM2MjUgMTguMzAyNCAzNS4wMTcgMTguMTgyOUMzNS4wMTQ3IDE4LjE3MTUgMzUuMDEzNSAxOC4xNjExIDM1LjAxMTIgMTguMTQ5NkMzNC44ODU5IDE3LjQ2MTYgMzQuNjg4IDE2Ljc4MTcgMzQuNDE4NyAxNi4xMjI0WiIgZmlsbD0iIzBBRThGMCIvPgo8cGF0aCBkPSJNMzQuNDE4NyAxNi4xMjI0QzMzLjk2MDkgMTYuMTk0OCAzMy40OTE0IDE2LjIzMjcgMzMuMDEwMiAxNi4yMzI3QzI5LjkyMDMgMTYuMjMyNyAyOC43NiAxNS4yMjQyIDI3LjQxNyAxNC4wNTYxQzI2LjEyMiAxMi45MzA1IDI0LjUxMDkgMTEuNTI5MyAyMS41NzY3IDExLjUyOTNIMTkuODI1MUMxNy43MDQ3IDExLjUyOTMgMTUuNzc2MyAxMi4yODM5IDE0LjM5NTkgMTMuNjU1M0MxMy4wNDgyIDE0Ljk5NDUgMTIuMzA0NyAxNi44MjY1IDEyLjMwNDcgMTguODE1OFYyMS4xNjgxQzEyLjMwNDcgMjMuMTU3NCAxMy4wNDcgMjQuOTkwNSAxNC4zOTU5IDI2LjMyODZDMTUuNzc2MyAyNy42OTk5IDE3LjcwNDcgMjguNDU0NiAxOS44MjUxIDI4LjQ1NDZIMjEuNTc2N0MyNC41MTA5IDI4LjQ1NDYgMjYuMTIyIDI3LjA1MzMgMjcuNDE3IDI1LjkyNzdDMjguNzYgMjQuNzU5NiAyOS45MjAzIDIzLjc1MTIgMzMuMDEwMiAyMy43NTEyQzMzLjQ5MDIgMjMuNzUxMiAzMy45NjA5IDIzLjc4OTEgMzQuNDE4NyAyMy44NjE0QzM0LjY4OCAyMy4yMDMzIDM0Ljg4NDcgMjIuNTIzNCAzNS4wMTEyIDIxLjgzNTRDMzUuMDEzNSAyMS44MjM5IDM1LjAxNDcgMjEuODEyNCAzNS4wMTcgMjEuODAwOUMzNC4zNjI1IDIxLjY4MTUgMzMuNjkwNCAyMS42MjA2IDMzLjAxMDIgMjEuNjIwNkMyNS45MTAxIDIxLjYyMDYgMjYuMjc4OSAyNi4zMjQgMjEuNTc2NyAyNi4zMjRIMTkuODI1MUMxNi41OTgzIDI2LjMyNCAxNC40NzY2IDI0LjA2MjQgMTQuNDc2NiAyMS4xNjgxVjE4LjgxNThDMTQuNDc2NiAxNS45MjE0IDE2LjU5NzEgMTMuNjU5OSAxOS44MjUxIDEzLjY1OTlIMjEuNTc2N0MyNi4yNzg5IDEzLjY1OTkgMjUuOTEwMSAxOC4zNjMzIDMzLjAxMDIgMTguMzYzM0MzMy42OTA0IDE4LjM2MzMgMzQuMzYyNSAxOC4zMDI0IDM1LjAxNyAxOC4xODI5QzM1LjAxNDcgMTguMTcxNSAzNS4wMTM1IDE4LjE2MTEgMzUuMDExMiAxOC4xNDk2QzM0Ljg4NTkgMTcuNDYxNiAzNC42ODggMTYuNzgxNyAzNC40MTg3IDE2LjEyMjRaIiBmaWxsPSIjMEFFOEYwIi8+Cjwvc3ZnPgo="
                  height="40px"
                  alt="Calendly logo"
                  className="logo-small"
                />
              </div>
            </a>
            <ul width="auto" className="nav-item">
              <li className="">
                <a
                  href="/for-individuals"
                  rel=""
                  target=""
                  id="header-menu-item-0"
                  type="base"
                  className=" nav-tab"
                >
                  Individuals
                </a>
              </li>
              <li className="">
                <a
                  aria-current="page"
                  href="/for-teams"
                  rel=""
                  target=""
                  id="header-menu-item-1"
                  type="base"
                  className="nav-tab"
                >
                  Teams
                </a>
              </li>
              <li className="">
                <a
                  href="/for-enterprise"
                  rel=""
                  target=""
                  id="header-menu-item-2"
                  type="base"
                  className="nav-tab"
                >
                  Enterprise
                </a>
              </li>
              <li className="arrow">
                <a
                  href="/features"
                  rel=""
                  target=""
                  id="header-menu-item-3"
                  type="base"
                  className="nav-tab"
                >
                  Product
                  <button
                    aria-expanded="false"
                    aria-label="Show"
                    aria-labelledby="header-menu-item-3"
                    aria-controls="Product"
                    className=" down-arrow button-a"
                  ></button>
                </a>
              </li>
              <li className="">
                <a
                  href="/pricing"
                  rel=""
                  target=""
                  id="header-menu-item-4"
                  type="base"
                  className="nav-tab"
                >
                  Pricing
                </a>
              </li>
              <li className="arrow">
                <a
                  href="/resources"
                  rel=""
                  target=""
                  id="header-menu-item-5"
                  type="base"
                  className="nav-tab"
                >
                  Resources
                  <button
                    aria-expanded="false"
                    aria-label="Show"
                    aria-labelledby="header-menu-item-5"
                    aria-controls="Resources"
                    className=" down-arrow button-a   "
                  ></button>
                </a>
              </li>
            </ul>
            <ul width="auto" id="right-side-components" className="nav-right">
              <li>
                <a
                  type="header"
                  href="/login"
                  className="nav-c"
                >
                  <span className="nav-right-l">Log In</span>
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAxNiAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iOCIgY3k9IjUiIHI9IjQiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTExIDEzSDVDMi43OTA4NiAxMyAxIDE0Ljc5MDkgMSAxN0MxIDE4LjEwNDYgMS44OTU0MyAxOSAzIDE5SDEzQzE0LjEwNDYgMTkgMTUgMTguMTA0NiAxNSAxN0MxNSAxNC43OTA5IDEzLjIwOTEgMTMgMTEgMTNaIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo="
                    alt="User Profile Log In Button"
                    className="profile-icon"
                  />
                </a>
              </li>
              <li className="skip">
                <div className="button-right">
                  <ButtonBold
                    minheight="36px"
                    padding="7px 14px"
                    name="Get Started"
                    fontSize="0.875rem"
                  />
                  {/* <a
                    tabindex="0"
                    data-testid="primary-button"
                    href="/app/signup?lang=en"
                    font-weight="semiBold"
                    display="inline-flex"
                    opacity="1"
                    className="sc-dofdei-0 kmQQza"
                  >
                    <span className="sc-1u8fykh-0 exSulj">
                      <span font-size="s16" className="sc-1i1v580-0 bpJfnc">
                        Get started
                      </span>
                    </span>
                  </a> */}
                </div>
              </li>
              <li className="hamburger" onClick={() => togglepage()}>
                <div
                  className={` responsive-nav ${ids == 2 ? "active" : ""} `}
                  data-testid="hamburger-menu"
                >
                  <div className=" responsive-nav-a cross-1"></div>
                  <div className="responsive-nav-b cross-2"></div>
                  <div className="responsive-nav-c cross-3 "></div>
                </div>
              </li>
            </ul>
          </div>
          <ul
            className={`${ids == 2 ? "responsive-ul-open" : "responsive-ul"}`}
          >
            <li>
              <a
                href="/for-individuals"
                rel=""
                target=""
                type="base"
                className="header-name"
              >
                Individuals
              </a>
            </li>
            <li>
              <a
                aria-current="page"
                href="/for-teams"
                rel=""
                target=""
                type="base"
                className="header-name"
              >
                Teams
              </a>
            </li>
            <li>
              <a
                href="/for-enterprise"
                rel=""
                target=""
                type="base"
                className="header-name"
              >
                Enterprise
              </a>
            </li>
            <li className="arrow">
              <a
                href="/features"
                rel=""
                target=""
                type="base"
                className="header-name"
              >
                Product
              </a>
            </li>
            <li>
              <a
                href="/pricing"
                rel=""
                target=""
                type="base"
                className="header-name"
              >
                Pricing
              </a>
            </li>
            <li className="arrow">
              <a
                href="/resources"
                rel=""
                target=""
                type="base"
                className="header-name"
              >
                Resources
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};
export default Nav;

import { Box, Button, Container, Stack } from "@mui/material";
import { NavLink } from "react-router-dom";
import Basket from "./Basket";
import { CartItem } from "../../../lib/types/search";

interface CommonNavbarProps {
  cartItems: CartItem[];
  onAdd: (item: CartItem) => void;
  onRemove: (item: CartItem) => void;
  onDelete: (item: CartItem) => void;
  onDeleteAll: () => void;
}

export function CommonNavbar(props: CommonNavbarProps) {
  const { cartItems, onAdd, onRemove, onDelete, onDeleteAll } = props;
  const authMember = null;
  return (
    <div className="common-navbar">
      <Container className="navbar-container">
        <Stack className="menu">
          <Box>
            <NavLink to={"/"}>
              <img className="brand-logo" src="/icons/Burak.svg" alt="Logo" />
            </NavLink>
          </Box>
          <Stack className="links">
            <Box className={"hover-line"}>
              <NavLink to={"/"}>Home</NavLink>
            </Box>
            <Box className={"hover-line"}>
              <NavLink to={"/products"} activeClassName={"underline"}>
                Products
              </NavLink>
            </Box>
            {authMember &&
              [
                { path: "/orders", text: "Orders" },
                { path: "/member-page", text: "My Page" },
              ].map((link, index) => (
                <Box key={index} className={"hover-line"}>
                  <NavLink to={link.path} activeClassName={"underline"}>
                    {link.text}
                  </NavLink>
                </Box>
              ))}
            <Box className={"hover-line"}>
              <NavLink to={"/help"} activeClassName={"underline"}>
                Help
              </NavLink>
            </Box>
            <Basket
              cartItems={cartItems}
              onAdd={onAdd}
              onRemove={onRemove}
              onDelete={onDelete}
              onDeleteAll={onDeleteAll}
            />
            {!authMember ? (
              <Box>
                <NavLink to={"/login"}>
                  <Button variant="contained" className="login-button">
                    Login
                  </Button>
                </NavLink>
              </Box>
            ) : (
              <img
                className="user-avatar"
                src="/icons/default-user.svg"
                aria-haspopup="true"
              />
            )}
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}

import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Link = styled(NavLink)`
  text-decoration: none;
  color: #323536;
  &.active {
    color: tomato;
  }
`;

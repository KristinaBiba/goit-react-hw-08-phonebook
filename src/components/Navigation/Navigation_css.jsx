import styled from "styled-components";  
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
    color: white;
    display: block;
    margin-right: 16px;
    text-decoration: none;
    padding: 8px;
    width: 60px;
    text-align: center;

    &.active {
    border: 1px solid;
    border-radius: 8px;
     }

    &:hover {
    text-decoration: underline;
    }
`;

import { NavLink } from 'react-router-dom';
import { styled } from '@mui/material/styles';

export const StyledLink = styled(NavLink)`
    color: inherit;
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
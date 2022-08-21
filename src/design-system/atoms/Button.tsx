import styled from '@emotion/styled';

import {Button as ButtonMui} from '@mui/material';

export const Button = (props: any) => {
  const {startAdornment, endAdornment, ...rest} = props;

  return <ButtonStyled {...rest} />;
};

const ButtonStyled = styled(ButtonMui)`
  text-transform: capitalize;
  border-radius: 8px;
  color: white;
  background-color: #04353c;
  :disabled {
    background-color: #d3d3d3;
  }
  :hover {
    background-color: #d3d3d3;
    color: #000;
  }
`;

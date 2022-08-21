import styled from '@emotion/styled';

import {TextField as TextFieldMui} from '@mui/material';

export const TextField = (props: any) => {
  const {startAdornment, endAdornment, ...rest} = props;

  return (
    <TextFieldStyled
      {...rest}
      InputProps={{
        startAdornment,
        endAdornment,
      }}
    />
  );
};

const TextFieldStyled = styled(TextFieldMui)`
  border-radius: 16px;
  width: 100%;
  background-color: #fff;
  .MuiInputBase-root {
    border-radius: 16px;
    padding-right: 8px;
  }
  .MuiOutlinedInput-input {
    padding-left: 10px;
  }
`;

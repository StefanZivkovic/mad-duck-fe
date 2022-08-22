import styled from '@emotion/styled';

interface DivProps {
  margin?: string;
  padding?: string;
  fontsize?: string;
  fontweight?: string;
  color?: string;
  backgroundcolor?: string;
  borderradius?: string;
  minheight?: string;
  textalign?: string;
}

export const Div = (props: any) => <DivStyled {...props} />;

const DivStyled = styled.div<DivProps>`
  margin: ${({margin}) => margin};
  padding: ${({padding}) => padding};
  font-weight: ${({fontweight}) => fontweight};
  font-size: ${({fontsize}) => fontsize};
  color: ${({color}) => color};
  background-color: ${({backgroundcolor}) => backgroundcolor};
  border-radius: ${({borderradius}) => borderradius};
  min-height: ${({minheight}) => minheight};
  text-align: ${({textalign}) => textalign};
`;

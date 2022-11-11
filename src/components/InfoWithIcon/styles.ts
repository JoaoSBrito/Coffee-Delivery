import styled from "styled-components";

export const InfoWithIconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  p {
    color: ${props => props.theme['base-text']};
  }

  strong {
    font-weight: bold;
  }
`;

interface IconsContainerProps {
  iconBg: string;
}

export const IconContainer = styled.div<IconsContainerProps>`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background: ${({ iconBg }) => iconBg};
  color: ${props => props.theme['white']};
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Roboto';

  
`;
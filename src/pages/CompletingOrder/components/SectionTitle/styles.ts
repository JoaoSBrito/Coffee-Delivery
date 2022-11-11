import styled from "styled-components";

export const SectionTitleContainer = styled.div`
  display: flex;
  gap: 0.5rem;

  div> p:first-child {
    font-size: 1rem;
    color: ${props => props.theme['base-subtitle']};
    line-height: 130%;
  }

  div> p:last-child {
    font-size: .875rem;
    color: ${props => props.theme['base-text']};
    line-height: 130%;
  }
`;
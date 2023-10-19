import styled from 'styled-components';

const Link = styled.a<{ color: string; }>`
  color: ${props => props.color};
  font-weight: 400;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 2px;
    width: 0;
    height: 1px;
    background-color: ${props => props.color};
    transition: width 0.3s ease;
  }

  &:hover {
    color: ${props => props.color}
  }

  &:hover::after {
    width: 100%;
  }
`;

export default Link;
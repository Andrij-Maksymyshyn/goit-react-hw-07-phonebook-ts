import styled from 'styled-components';

export const LiContact = styled.li`
  display: flex;
  align-items: center;
  font-size: 20px;
`;

export const ButtonDelete = styled.button`
  margin-top: 15px;
  margin-bottom: 15px;
  margin-left: 15px;
  border-radius: 4px;
  background-color: red;
  border: none;
  font-weight: 600;
  cursor: pointer;
  padding: 5px;
  opacity: 0.8;
    &:hover, &:focus {
    opacity: 1;
  }
`;

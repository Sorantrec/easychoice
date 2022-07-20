import styled from "styled-components";

export const AsideWrapper = styled.aside`
  width: 40%;
  text-align: left;
`;

export const AsideWrapperItem = styled.div`
  display: flex;

  p {
    margin: 10px;

    &:first-of-type {
      text-align: left;
    }
  }
`
import styled from "@emotion/styled";

const Container = styled.div`
  border: 1px solid gray;
  padding: 32px;
  border-radius: 6px;
  width: 50%;
  margin: auto;
`;

function Layout({ children }) {
  return <Container>{children}</Container>;
}

export default Layout;

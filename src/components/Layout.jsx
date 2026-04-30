import { Container } from 'react-bootstrap';

function Layout({ children }) {
  return (
    <Container className="pt-4 pb-4" style={{ minHeight: '80vh' }}>
      {children}
    </Container>
  );
}

export default Layout;
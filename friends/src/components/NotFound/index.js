import React from 'react';
import notFound from '../../assets/notFound.svg';
import { Container, Header, Image, Button } from 'semantic-ui-react';

const NotFound = props => {
  return (
    <div>
      <Container text style={{ marginTop: '7em', textAlign: 'center' }}>
        <Header as="h1">Sorry no Resource Found <br /> "{`${props.location.pathname}`}" </Header>
        <Image src={notFound} size="medium" centered />
        <div>
          <Button secondary onClick={() => props.history.push('/')}>
            Go Home
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default NotFound;

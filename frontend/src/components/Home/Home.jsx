import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 36px;
`;

const Home = () => {
  return (
    <Container>
      <Title>Welcome to Fruit.ai</Title>
      <p>Explore our features and enjoy our application.</p>
    </Container>
  );
};

export default Home;

import React from 'react';

import { Container, Tab } from './styles';
import Tweet from '../Tweet';

const Feed: React.FC = () => {
  return (
    <Container>
      <Tab>Twetts</Tab>
      <Tweet/>
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
    </Container>


  );
}

export default Feed;
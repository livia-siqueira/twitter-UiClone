import React from 'react';
import List from '../List';
import News from '../News';
import FollowSuggestion from '../FollowSuggestion';
import StickyBox from 'react-sticky-box';


import { Container, SearchWrapper, SearchIcon, SearchInput,Body} from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter"/>
        <SearchIcon />
      </SearchWrapper>
<StickyBox>
      <Body>
      <List
            title="Talvez você curta"
            elements={[
              <FollowSuggestion
                name="Luiz Batanero"
                nickname="@luizbatanero"
              />,
              <FollowSuggestion name="Luke Morales" nickname="@lukemorales" />,
              <FollowSuggestion
                name="Camila Magalhães"
                nickname="@camilaamgl"
              />,
            ]}
          />
         <List
            title="O que está acontecendo"
            elements={[
              <News />,
              <News />,
              <News />,
              <News />,
              <News />,
              <News />,
              <News />,
              <News />,
              <News />,
            ]}
          />
      </Body>
      </StickyBox>
    </Container>

  );
}

export default SideBar;
import React from 'react';

import { Container, Retweeted, RocketseatIcon, Body, Avatar, Content, Header, Dot, Description, ImageContent, Icons, Status, CommentIcon , RetweetIcon, LikeIcon} from './styles';

const Tweet: React.FC = () => {
  return (
    <Container>
      <Retweeted>
        <RocketseatIcon />
        Você retwwetou!
      </Retweeted>
      <Body>
        <Avatar />

        <Content>
          <Header>
            <strong>Lívia</strong>
            <span>@livia_null</span>
            <Dot />
            <time>29 de jul</time>
          </Header>
          <Description>
            Sempre em frente 
          </Description>
          <ImageContent />
          <Icons>
             <Status>
               <CommentIcon />
               18
               </Status> 
               <Status>
               <RetweetIcon />
               18
               </Status> 
               <Status>
               <LikeIcon />
               999
               </Status> 
          </Icons>
        </Content>
      </Body>
    </Container>

  );
}

export default Tweet;
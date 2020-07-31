import React from 'react';

import { Container, Banner, Avatar, ProfileData, EditButton, LocationIcon, CakeIcon, Followage } from './styles';
import Feed from '../Feed';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>
      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>
        <h1>Lívia Siqueira</h1>
        <h2>@liv_null</h2>

        <p>Vivendo e aprendendo, sempre.</p>

        <ul>
          <li>
            <LocationIcon/>
            Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 12 de julho de 2002
          </li>
          <li></li>
        </ul>
        <Followage> 
          <span>
            seguindo <strong>120</strong>
          </span>
          <span>
          <strong>23 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>
      <Feed />
    </Container>


  );
}

export default ProfilePage;
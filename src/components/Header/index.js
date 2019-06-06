import React from 'react';

import Logo from '~/assets/logo.png';
import { Container, LogoImage } from './styles';

const Header = () => (
  <Container>
    <LogoImage alt="Appetite" resizeMode="contain" source={Logo} />
  </Container>
);

export default Header;

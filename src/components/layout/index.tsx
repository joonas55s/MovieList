import React from 'react';
import { Grid } from './styles';
import TopBar from '../TopBar';
import Catalog from '../Catalog';

const layout: React.FC = () => {

  return (
    <Grid>
      <TopBar />
      <Catalog />
    </Grid>
  )
}

export default layout;
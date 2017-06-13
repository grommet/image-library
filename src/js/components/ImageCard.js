import React from 'react';
import PropTypes from 'prop-types';

import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import Paragraph from 'grommet/components/Paragraph';
import Tile from 'grommet/components/Tile';

const ImageCard = ({ image }) => (
  <Tile
    separator='all'
    basis='small'
    pad={{ vertical: 'medium', horizontal: 'medium', between: 'medium' }}>
    <img
      alt={image.name}
      src={image.url}
      width='96px'
      height='96px'
    />
    <Box align='center'>
      <Heading tag='h4' strong={true} margin='none'>{image.name}</Heading>
      <Paragraph margin='none'>{image.version}</Paragraph>
    </Box>
  </Tile>
);

ImageCard.propTypes = {
  image: PropTypes.object.isRequired,
};

export default ImageCard;

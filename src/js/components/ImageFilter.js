import React from 'react';
import PropTypes from 'prop-types';

import Box from 'grommet/components/Box';
import Button from 'grommet/components/Button';
import CheckBox from 'grommet/components/CheckBox';
import Header from 'grommet/components/Header';
import Heading from 'grommet/components/Heading';
import Sidebar from 'grommet/components/Sidebar';
import CloseIcon from 'grommet/components/icons/base/Close';

const ImageFilter = ({ onClose }) => (
  <Sidebar colorIndex='light-2'>
    <Header pad={{ vertical: 'small', horizontal: 'medium' }} justify='between'>
      <Heading tag='h3' strong={true}>Filter</Heading>
      <Button
        icon={<CloseIcon />}
        onClick={onClose}
      />
    </Header>
    <Box pad={{ vertical: 'small', horizontal: 'medium' }}>
      <Heading tag='h4'>Image Type</Heading>
      <Box pad={{ vertical: 'small', between: 'small' }}>
        <CheckBox label='SVG' />
        <CheckBox label='JPG' />
        <CheckBox label='PNG' />
      </Box>
    </Box>
  </Sidebar>
);

ImageFilter.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default ImageFilter;

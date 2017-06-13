import React from 'react';
import PropTypes from 'prop-types';

import Heading from 'grommet/components/Heading';
import Layer from 'grommet/components/Layer';
import List from 'grommet/components/List';
import ListItem from 'grommet/components/ListItem';
import Paragraph from 'grommet/components/Paragraph';
import Sidebar from 'grommet/components/Sidebar';

const ImageNotification = ({ onClose }) => (
  <Layer flush={true} align='left' closer={true} onClose={onClose}>
    <Sidebar pad='medium'>
      <Heading tag='h3' strong={true}>Notification</Heading>
      <List>
        <ListItem align='start' direction='column' pad={{ vertical: 'small' }}>
          <span>
            <strong>Alan Souza</strong> deleted <strong>Windows</strong> image
          </span>
          <Paragraph margin='none'>
            Two hours ago
          </Paragraph>
        </ListItem>
        <ListItem align='start' direction='column' pad={{ vertical: 'small' }}>
          <span>
            <strong>Chris Carlozzi</strong> added <strong>Grommet</strong> image
          </span>
          <Paragraph margin='none'>
            A day ago
          </Paragraph>
        </ListItem>
        <ListItem align='start' direction='column' pad={{ vertical: 'small' }}>
          <span>
            <strong>Tracy Barmore</strong> edited <strong>Windows</strong> version
          </span>
          <Paragraph margin='none'>
            Three days ago
          </Paragraph>
        </ListItem>
        <ListItem align='start' direction='column' pad={{ vertical: 'small' }}>
          <span>
            <strong>Alan Souza</strong> added <strong>Windows</strong> image
          </span>
          <Paragraph margin='none'>
            Last week
          </Paragraph>
        </ListItem>
      </List>
    </Sidebar>
  </Layer>
);

ImageNotification.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default ImageNotification;

import React, { Component } from 'react';

import App from 'grommet/components/App';
import Box from 'grommet/components/Box';
import Button from 'grommet/components/Button';
import Footer from 'grommet/components/Footer';
import Header from 'grommet/components/Header';
import Paragraph from 'grommet/components/Paragraph';
import Search from 'grommet/components/Search';
import Tiles from 'grommet/components/Tiles';
import Title from 'grommet/components/Title';
import AddIcon from 'grommet/components/icons/base/Add';

import FilterIcon from 'grommet/components/icons/base/Filter';
import GrommetIcon from 'grommet/components/icons/base/BrandGrommetOutline';
import NotificationIcon from 'grommet/components/icons/base/Notification';

import ImageCard from './components/ImageCard';
import ImageFilter from './components/ImageFilter';
import ImageNotification from './components/ImageNotification';

const images = [
  {
    id: 1,
    url: 'http://d2p6eldpu75wyk.cloudfront.net/microsoft.svg',
    name: 'Microsoft',
    version: '8',
  },
  {
    id: 2,
    url: 'http://d2p6eldpu75wyk.cloudfront.net/redhat.svg',
    name: 'RedHat',
    version: '7.3',
  },
  {
    id: 3,
    url: 'http://d2p6eldpu75wyk.cloudfront.net/ubuntu.svg',
    name: 'Ubuntu',
    version: '16',
  },
];

export default class ImageLibraryApp extends Component {
  constructor() {
    super();
    this.state = {
      showFilterSidebar: false,
      showNotificationLayer: false,
    };
  }

  render() {
    const { showFilterSidebar, showNotificationLayer } = this.state;

    let layer;
    if (showNotificationLayer) {
      layer = (
        <ImageNotification onClose={() => this.setState({ showNotificationLayer: false })} />
      );
    }

    let filterSidebar;
    if (showFilterSidebar) {
      filterSidebar = (
        <ImageFilter onClose={() => this.setState({ showFilterSidebar: false })} />
      );
    }

    return (
      <App centered={false}>
        <Box full={true} direction='row' responsive={false}>
          <Box full={{ vertical: true, responsive: false }} flex={true}>
            <Header colorIndex='brand' pad='small'>
              <Box direction='row' responsive={false} pad={{ between: 'small' }}>
                <GrommetIcon size='large' responsive={false} />
                <Title>Image Library</Title>
              </Box>
              <Box justify='end' direction='row' responsive={false} flex={true}>
                <Search inline={true} fill={true} placeHolder='Search' />
                <Button
                  icon={<AddIcon />}
                  onClick={() => {}}
                />
              </Box>
            </Header>
            <Box flex={true} pad='medium' primary={true}>
              <Box flex={false}>
                <Tiles flush={false} justify='center' pad={{ between: 'medium' }}>
                  {
                    images.map(image => (
                      <ImageCard key={image.id} image={image} />
                    ))
                  }
                </Tiles>
              </Box>
            </Box>
            <Footer justify='between' pad='small' separator='top'>
              <Button
                icon={<NotificationIcon colorIndex='brand' />}
                onClick={() => this.setState({ showNotificationLayer: true })}
              />
              <Paragraph margin='none'>Last modified today</Paragraph>
              <Button
                icon={<FilterIcon colorIndex='brand' />}
                onClick={() => this.setState({ showFilterSidebar: !showFilterSidebar })}
              />
            </Footer>
          </Box>
          {filterSidebar}
        </Box>
        {layer}
      </App>
    );
  }
}

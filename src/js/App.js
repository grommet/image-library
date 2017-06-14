import React, { Component } from 'react';

import App from 'grommet/components/App';
import Box from 'grommet/components/Box';
import Button from 'grommet/components/Button';
import Header from 'grommet/components/Header';
import Search from 'grommet/components/Search';
import Title from 'grommet/components/Title';
import AddIcon from 'grommet/components/icons/base/Add';

import GrommetIcon from 'grommet/components/icons/base/BrandGrommetOutline';

// const images = [
//   {
//     id: 1,
//     url: 'http://d2p6eldpu75wyk.cloudfront.net/microsoft.svg',
//     name: 'Microsoft',
//     version: '8',
//   },
//   {
//     id: 2,
//     url: 'http://d2p6eldpu75wyk.cloudfront.net/redhat.svg',
//     name: 'RedHat',
//     version: '7.3',
//   },
//   {
//     id: 3,
//     url: 'http://d2p6eldpu75wyk.cloudfront.net/ubuntu.svg',
//     name: 'Ubuntu',
//     version: '16',
//   },
// ];

export default class ImageLibraryApp extends Component {
  render() {
    return (
      <App centered={false}>
        <Header colorIndex='brand' pad='small'>
          <Box direction='row' responsive={false} pad={{ between: 'small' }}>
            <GrommetIcon size='large' responsive={false} />
            <Title>Image Library</Title>
          </Box>
          <Box justify='end' direction='row' responsive={false} flex={true}>
            <Search inline={true} fill={true} placeHolder='Search' />
            <Button
              icon={<AddIcon />}
              onClick={() => this.setState({ showAddImageLayer: true })}
            />
          </Box>
        </Header>
      </App>
    );
  }
}

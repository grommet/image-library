import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Box from 'grommet/components/Box';
import Button from 'grommet/components/Button';
import Footer from 'grommet/components/Footer';
import Form from 'grommet/components/Form';
import FormField from 'grommet/components/FormField';
import Heading from 'grommet/components/Heading';
import Layer from 'grommet/components/Layer';
import Sidebar from 'grommet/components/Sidebar';

class ImageAdd extends Component {
  constructor() {
    super();
    this.state = {
      url: '',
      name: '',
      version: '',
    };
  }

  render() {
    const { onAdd, onCancel } = this.props;
    const { name, url, version } = this.state;

    return (
      <Layer flush={true} align='right' closer={true} onClose={onCancel}>
        <Sidebar pad='medium'>
          <Heading tag='h3' strong={true}>Add Image</Heading>
          <Box pad={{ vertical: 'small' }}>
            <Form
              onSubmit={(event) => {
                event.preventDefault();
                onAdd({ name, url, version });
              }}
            >
              <FormField label='Url'>
                <input
                  type='text'
                  value={url}
                  onChange={event => this.setState({
                    url: event.target.value,
                  })}
                />
              </FormField>
              <FormField label='Name'>
                <input
                  type='text'
                  value={name}
                  onChange={event => this.setState({
                    name: event.target.value,
                  })}
                />
              </FormField>
              <FormField label='Version'>
                <input
                  type='text'
                  value={version}
                  onChange={event => this.setState({
                    version: event.target.value,
                  })}
                />
              </FormField>
              <Footer pad={{ vertical: 'medium' }}>
                <Button
                  label='Add'
                  type='submit'
                  primary={true}
                />
              </Footer>
            </Form>
          </Box>
        </Sidebar>
      </Layer>
    );
  }
}

ImageAdd.propTypes = {
  onAdd: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default ImageAdd;

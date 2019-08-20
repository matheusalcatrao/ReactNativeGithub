import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Brower } from './styles';

export default function Repository({ navigation }) {
  const repository = navigation.getParam('repository');
  console.tron.log('Repository');
  console.tron.log(navigation);
  return <Brower source={{ uri: repository.html_url }} />;
}

Repository.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func,
  }).isRequired,
};

Repository.navigationOptions = ({ navigation }) => ({
  title: navigation.getParam('repository').name,
});

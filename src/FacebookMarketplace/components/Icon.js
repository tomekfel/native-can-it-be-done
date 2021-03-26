import React, { Component } from 'react';
import { Feather } from '@expo/vector-icons';

const Icon = ({ name, onPress }) => {
  return <Feather name={name} onPress={onPress} />;
};

export default Icon;

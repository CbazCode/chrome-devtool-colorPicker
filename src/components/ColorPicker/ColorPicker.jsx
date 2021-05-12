import React from 'react';
import PropTypes from 'prop-types';
import { SketchPicker } from 'react-color';
import './styles.css'

const ColorPicker = ({ color, onChangeColor }) => (
  <div className="color-container" style={({backgroundColor: color.color})}>
    <SketchPicker color={color.color} onChange={onChangeColor} />
  </div>
);

ColorPicker.propTypes = {
  username: PropTypes.string,
  onChangeColor: PropTypes.func
};

export default ColorPicker;
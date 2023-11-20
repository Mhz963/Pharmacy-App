import React, { useMemo } from 'react';
import { TouchableOpacity, StyleSheet, } from 'react-native';
import PropTypes from 'prop-types';
import { Fonts, SF, SH, SW, Colors } from '../../utils';
import { Button } from '@rneui/themed';

function Buttons(props) {
  const { title, onPress, buttonStyle, disable, buttonTextStyle, icon, spacedImages, linearGradientProps } = props;
  const styles = useMemo(
    () =>
      StyleSheet.create({
        buttonStyle: {
          backgroundColor: Colors.theme_background,
          borderRadius: SW(100),
          height: SH(50),
          width: '100%'
        },
        buttonTextStyle: {
          color: Colors.white_text_color,
          fontFamily: Fonts.Metropolis_Medium,
          fontSize: SF(19),
          fontWeight: '600',
        },
        buttonViewStyle: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: spacedImages ? 'space-around' : 'center',
          width: '100%'
        },
        LeftImageViewStyle: {
          marginVertical: SW(5)
        }
      }),
    [disable, spacedImages, Colors],
  );

    console.log(disable);
  return (
    <TouchableOpacity disabled={disable}>
      <Button
        title={title}
        onPress={onPress}
        icon={icon}
        disabled={disable}
        linearGradientProps={linearGradientProps}
        buttonStyle={[styles.buttonStyle, { ...buttonStyle }]}
        titleStyle={[styles.buttonTextStyle, { ...buttonTextStyle }]}
      />
    </TouchableOpacity>
  );
}

Button.defaultProps = {
  title: '',
  onPress: () => { },
  buttonStyle: {},
  disable: false,
  imagesource: null,
  buttonTextStyle: {},
  spacedImages: false,
};

Button.propTypes = {
  title: PropTypes.string,
  onPress: PropTypes.func,
  buttonStyle: PropTypes.shape({}),
  disable: PropTypes.bool,
  imagesource: PropTypes.any,
  buttonTextStyle: PropTypes.shape({}),
  spacedImages: PropTypes.bool
};

export default Buttons;

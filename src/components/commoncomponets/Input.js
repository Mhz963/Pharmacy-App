import React, { useMemo } from 'react';
import propTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import { SF, SH, SW, Fonts, Colors } from '../../utils';
import { Input } from '@rneui/themed';
import { useTheme } from '@react-navigation/native';

function Inputs({
  title,
  placeholder,
  titleStyle,
  inputStyle,
  onChangeText,
  value,
  inputprops,
  onBlur,
  onFocus,
  inputType,
  autoFocus,
  secureTextEntry,
  leftIcon = {},
  rightIcon = {},
  errorMessage = "",
  containerStyle,
  inputContainerStyle,
  label,
  errorStyle,
  disabledInputStyle,
  onEndEditing,
  renderErrorMessage = false,
  multiline = false,
  maxLength
}) {
  const { Colors } = useTheme();
  const styles = useMemo(
    () =>
      StyleSheet.create({
        container: {
          backgroundColor: Colors.anti_flash_white_color,
          width: '100%',
          marginHorizontal: SH(0),
          borderRadius: SW(7),
          ...containerStyle,
        },
        inputContainerStyle: {
          backgroundColor: Colors.anti_flash_white_color,
          borderBottomWidth: SW(0),
          ...inputContainerStyle
        },
        inputStyle: {
          fontSize: SF(17),
          fontFamily: Fonts.Metropolis_SemiBold,
          color: Colors.black_text_color,
          borderRadius: SH(7),
          paddingBottom: SH(1),
          textAlignVertical: 'top',
          ...inputStyle,
        },
        errorStyle: {
          color: Colors.red,
          fontFamily: Fonts.Poppins_Regular,
          height: errorMessage == "" && SH(0),
          margin: 0,
          ...errorStyle,
        },
        disabledInputStyle: {
          background: Colors.bgwhite,
          ...disabledInputStyle
        }
      }),
    [titleStyle, containerStyle, inputContainerStyle, inputStyle, errorStyle, Colors],
  );
  return (
    <View>
      <Input
        containerStyle={styles.container}
        disabledInputStyle={styles.disabledInputStyle}
        inputContainerStyle={styles.inputContainerStyle}
        errorMessage={errorMessage}
        errorStyle={styles.errorStyle}
        errorProps={{}}
        inputStyle={styles.inputStyle}
        label={label}
        labelStyle={{}}
        labelProps={{}}
        leftIcon={leftIcon}
        leftIconContainerStyle={{}}
        rightIcon={rightIcon}
        rightIconContainerStyle={{}}
        placeholder={placeholder}
        renderErrorMessage={renderErrorMessage}
        onEndEditing={(e) => onEndEditing(e)}
        onChangeText={(text) => onChangeText(text)}
        onFocus={() => onFocus()}
        onBlur={() => onBlur()}
        autoFocus={autoFocus}
        keyboardType={!inputType ? 'default' : inputType}
        secureTextEntry={secureTextEntry}
        value={value}
        multiline={multiline}
        maxLength={maxLength}
        {...inputprops}
      />
    </View>
  );
}

Inputs.defaultProps = {
  title: '',
  placeholder: '',
  titleStyle: {},
  inputStyle: {},
  onChangeText: () => { },
  onFocus: () => { },
  onBlur: () => { },
  value: '',
  textprops: {},
  inputprops: {},
  inputType: null,
  autoCompleteType: '',
  onEndEditing: () => { },
  renderErrorMessage: false,
  multiline: false

};

Inputs.propTypes = {
  title: propTypes.string,
  autoCompleteType: propTypes.string,
  placeholder: propTypes.string,
  titleStyle: propTypes.shape({}),
  inputStyle: propTypes.shape({}),
  onChangeText: propTypes.func,
  value: propTypes.string,
  textprops: propTypes.object,
  inputprops: propTypes.object,
  onFocus: propTypes.func,
  onBlur: propTypes.func,
  inputType: propTypes.any,
  onEndEditing: propTypes.func,
  renderErrorMessage: propTypes.bool,
  multiline: propTypes.bool
};

export default Inputs;

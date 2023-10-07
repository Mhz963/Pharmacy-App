import React, { useMemo } from "react";
import { StyleSheet, } from 'react-native';
import { SW, Colors } from '../../utils';
import LinearGradient from 'react-native-linear-gradient';

const LinearGradientFlat = (props) => {
    const { LinearGradientStyle, start, end, colors, locations, children } = props;

    const styles = useMemo(() =>
        StyleSheet.create({
            LinearGradientStyle: {
                width: '100%',
            },
        }),
    );

    return (
        <LinearGradient
            start={start} end={end}
            colors={colors}
            locations={locations}
            style={[styles.LinearGradientStyle, { ...LinearGradientStyle }]} >
            {children}
        </LinearGradient>
    );
}

export default LinearGradientFlat
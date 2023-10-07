import React from 'react'
import { Rating } from 'react-native-ratings';

const RatingFun = (props) => {
    const { type, ratingColor, ratingBackgroundColor, ratingCount, tintColor, imageSize, startingValue, isDisabled } = props;
    return (
        <Rating
            type={type}
            ratingColor={ratingColor}
            ratingBackgroundColor={ratingBackgroundColor}
            ratingCount={ratingCount}
            tintColor={tintColor}
            imageSize={imageSize}
            startingValue={startingValue}
            isDisabled={isDisabled}
        />
    )
}

export default RatingFun
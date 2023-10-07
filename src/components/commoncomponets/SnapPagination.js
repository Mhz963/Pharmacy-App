import React from 'react'
import { Pagination } from 'react-native-snap-carousel';

const SnapPagination = (props) => {
    const { dotsLength, activeDotIndex, carouselRef, containerStyle, dotColor, dotStyle, inactiveDotStyle, inactiveDotColor, inactiveDotOpacity, enableSnap, dotOpacity } = props;
    return (
        <>
            <Pagination
                dotsLength={dotsLength}
                activeDotIndex={activeDotIndex}
                carouselRef={carouselRef}
                containerStyle={containerStyle}
                dotColor={dotColor}
                dotStyle={dotStyle}
                inactiveDotStyle={inactiveDotStyle}
                inactiveDotColor={inactiveDotColor}
                inactiveDotOpacity={inactiveDotOpacity}
                enableSnap={enableSnap}
                dotOpacity={dotOpacity}
            />
        </>
    )
}

export default SnapPagination
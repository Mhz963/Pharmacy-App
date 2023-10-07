import React from 'react'
import Carousel from 'react-native-snap-carousel';

const SnapCarousel = (props) => {
    const { ref, data, sliderWidth, itemWidth, inactiveSlideScale, inactiveSlideOpacity, containerCustomStyle, contentContainerCustomStyle, loop, loopClonesPerSide, enableSnap, autoplay, autoplayDelay, autoplayInterval, onSnapToItem, renderItem } = props;
    return (
        <>
            <Carousel
                ref={ref}
                data={data}
                renderItem={renderItem}
                sliderWidth={sliderWidth}
                itemWidth={itemWidth}
                inactiveSlideScale={inactiveSlideScale}
                inactiveSlideOpacity={inactiveSlideOpacity}
                containerCustomStyle={containerCustomStyle}
                contentContainerCustomStyle={contentContainerCustomStyle}
                loop={loop}
                loopClonesPerSide={loopClonesPerSide}
                enableSnap={enableSnap}
                autoplay={autoplay}
                autoplayDelay={autoplayDelay}
                autoplayInterval={autoplayInterval}
                onSnapToItem={onSnapToItem}
            />
        </>
    )
}

export default SnapCarousel
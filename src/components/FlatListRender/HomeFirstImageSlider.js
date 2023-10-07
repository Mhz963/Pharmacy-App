import React, { useState, useMemo } from 'react';
import { View, Dimensions, } from 'react-native';
import { HometabStyle } from '../../styles';
import { Colors, widthPercent, carouselItems } from '../../utils';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@react-navigation/native';
import { HomeSliderFlatFun, SnapCarousel, SnapPagination } from '../../components'

const HomeFirstImageSlider = (props) => {
  const { t } = useTranslation();
  const { Colors } = useTheme();
  const HometabStyles = useMemo(() => HometabStyle(Colors), [Colors]);
  let _slider1Ref;
  const { onPress } = props;
  const { width: viewportWidth, } = Dimensions.get('window');
  const slideWidth = widthPercent(75);
  const itemHorizontalMargin = widthPercent(2);
  const ITEM_WIDTH = slideWidth + itemHorizontalMargin * 8;
  const [index, setIndex] = useState(0);

  return (
    <View style={HometabStyles.exampleContainer}>
      <SnapCarousel
        ref={c => _slider1Ref = c}
        data={carouselItems}
        renderItem={({ item, index }) => (
          <HomeSliderFlatFun
            index={index}
            item={item}
            onPress={() => onPress()}
            setIndex={setIndex}
          />)}
        sliderWidth={viewportWidth}
        itemWidth={ITEM_WIDTH}
        inactiveSlideScale={0.94}
        inactiveSlideOpacity={0.7}
        containerCustomStyle={HometabStyles.slider}
        contentContainerCustomStyle={HometabStyles.sliderContentContainer}
        loop={true}
        loopClonesPerSide={3}
        enableSnap={true}
        autoplay={false}
        autoplayDelay={500}
        autoplayInterval={3000}
        onSnapToItem={index => setIndex(index)}
      />
      <SnapPagination
        dotsLength={carouselItems.length}
        activeDotIndex={index}
        carouselRef={c => _slider1Ref = c}
        containerStyle={HometabStyles.paginationContainer}
        dotColor={Colors.theme_background}
        dotStyle={HometabStyles.paginationDot}
        inactiveDotStyle={HometabStyles.setdotactive}
        inactiveDotColor={Colors.theme_background}
        inactiveDotOpacity={1}
        enableSnap={true}
        dotOpacity={0.5}
      />
    </View>
  );
};

export default HomeFirstImageSlider;
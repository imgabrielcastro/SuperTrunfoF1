import React, { useRef } from 'react';
import { View, Dimensions, Animated } from 'react-native';
import DriverCard from './src/components/DriverCard';
import drivers from './src/data/mockPilotos.json';

const { width, height } = Dimensions.get('window');
const CARD_WIDTH = width * 0.8;
const SPACING = 20;

export default function DriversCarouselScreen() {
  const scrollX = useRef(new Animated.Value(0)).current;

  return (
    <View style={{ flex: 1, backgroundColor: '#fff', justifyContent: 'center' }}>
      <Animated.FlatList
        data={drivers}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={CARD_WIDTH + SPACING}  // centraliza o card horizontalmente
        decelerationRate="fast"
        bounces={false}
        contentContainerStyle={{
          paddingHorizontal: (width - CARD_WIDTH) / 2,
          alignItems: 'center',  // centraliza verticalmente os cards
        }}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
        scrollEventThrottle={16}
        renderItem={({ item, index }) => {
          const inputRange = [
            (CARD_WIDTH + SPACING) * (index - 1),
            (CARD_WIDTH + SPACING) * index,
            (CARD_WIDTH + SPACING) * (index + 1),
          ];

          const scale = scrollX.interpolate({
            inputRange,
            outputRange: [0.8, 1, 0.8], // card central maior
            extrapolate: 'clamp',
          });

          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0.5, 1, 0.5], // central mais visível
            extrapolate: 'clamp',
          });

          return (
            <Animated.View
              style={{
                width: CARD_WIDTH,
                marginHorizontal: SPACING / 2,
                transform: [{ scale }],
                opacity,
              }}
            >
              <DriverCard driver={item} />
            </Animated.View>
          );
        }}
      />
    </View>
  );
}

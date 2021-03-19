import React from 'react';
import { TouchableOpacity, Animated, View, Dimensions } from 'react-native';

export default function App() {
  const [value] = React.useState(new Animated.Value(1))

  let isFaded = false

  function toggleFade() {
    Animated.timing(value, {
      toValue: (isFaded === false) ? 0 : 1,
      duration: 300,
      useNativeDriver: true,
    }).start()
    
    isFaded = !isFaded
  }

  return (
    <View style={{flex: 1, justifyContent: "center"}}>
    <View style={{alignItems: 'center'}}>
      <TouchableOpacity style={{height: 100, width: 100, borderRadius: 100/2 ,backgroundColor: 'beige'}} onPress={toggleFade}>
        <Animated.View
        style={{height: 100, width: 100, borderRadius: 100/2, backgroundColor: 'tomato', opacity: value}}
        />      
      </TouchableOpacity>
    </View>
    </View>
  );
}

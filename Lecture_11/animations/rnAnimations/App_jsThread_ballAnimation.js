import React from 'react';
import { TouchableOpacity, Animated, View, Dimensions } from 'react-native';

export default function App() {
  const {width} = Dimensions.get('window')
  const [value] = React.useState(new Animated.Value(-width+100))

  let isFaded = false

  function moveBall() {
    Animated.timing(value, {
      toValue: width-100,
      duration: 1000,
      // useNativeDriver: true,
    }).start()
  }

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
        <Animated.View style={{marginLeft: value}}>
        <TouchableOpacity style={{height: 100, width: 100, borderRadius: 100/2 ,backgroundColor: 'beige'}} onPress={moveBall}>
          <View
          style={{height: 100, width: 100, borderRadius: 100/2, backgroundColor: 'tomato'}}
          />
        </TouchableOpacity>
        </Animated.View>      
    </View>
    </View>
  );
}
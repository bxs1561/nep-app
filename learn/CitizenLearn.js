import React, {useState, useRef} from 'react';
import {QuestionData} from './QuestionData';
import {Card, Icon} from 'react-native-elements';
import Sound from 'react-native-sound';
import {round} from 'react-native-reanimated';
import {
  StyleSheet,
  Animated,
  View,
  Text,
  Button,
  TouchableOpacity,
} from 'react-native';
import _ from 'lodash';

const CitizenLearn = ({navigation}) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const current = QuestionData[currentQuestion].question;
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [playing, setplaying] = useState(false);

  const sound = new Sound(QuestionData[currentQuestion].audio, null);
  navigation.setOptions({
    title: 'Citizenship Question',
  });

  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 0,
      useNativeDriver: true,
    }).start();
  };


  return (
    <View style={styles.shadow(round)}>
      <Card wrapperStyle={{backgroundColor: 'white'}}>
        <Card containerStyle={styles.cardSpace}>
          <Text>
            {currentQuestion}: {current}
          </Text>
        </Card>
        <View style={{paddingBottom: 15}} />
        <View style={{flexDirection: 'row-reverse'}}>
          <Icon
            name="ios-pause"
            type="ionicon"
            size={48}
            color="#444"
            onPress={() => sound.pause()}
          />
          <Text>{'   '}</Text>
          <Icon
            name="ios-play-circle"
            type="ionicon"
            size={48}
            color="#444"
            onPress={() => sound.play()}
          />
        </View>
        <Animated.View
          style={[
            {
              opacity: fadeAnim, // Bind opacity to animated value
            },
          ]}>
          <Text style={{paddingLeft: 35}}>
            Answer: {QuestionData[currentQuestion].answer}
          </Text>
        </Animated.View>
        <View style={{paddingTop: 20}}>
          <Button title="Show answer" onPress={fadeIn} />
        </View>

        {currentQuestion < QuestionData.length - 1 && (
          <View style={{paddingLeft: 220}}>
            <Button
              title="Next"
              onPress={() => {
                fadeOut(), setCurrentQuestion(currentQuestion + 1);
              }}
            />
          </View>
        )}
        {currentQuestion < QuestionData.length - 1 && currentQuestion > 0 && (
          <View style={{paddingRight: 220, paddingBottom: 10}}>
            <Button
              title="Previous"
              onPress={() => {
                fadeOut(), setCurrentQuestion(currentQuestion - 1);
              }}
            />
          </View>
        )}
        {currentQuestion === QuestionData.length - 1 && (
          <Button
            title="finish"
            onPress={() => {
              navigation.navigate('Learn');
            }}
          />
        )}
      </Card>
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardSpace: {
    paddingBottom: 15,
    borderColor: 'black',
    width: 260,
  },
  shadow: (rounded) => ({
    borderRadius: rounded ? 15 : undefined,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 4,
  }),
});

export default CitizenLearn;

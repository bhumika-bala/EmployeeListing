import React from 'react';
import { View } from 'react-native';
import Button from '../../components/Button/Button';
import styles from './style';
import { CONSTANT_TEXT } from '../../constants/ConstantText';
import { ENUMS } from '../../constants/Enums';
const AddButtonScreen = ({ navigation }) => {
  const handlePress = () => {
    navigation.navigate('AddEmployee');
  };

  return (
    <View style={styles.container}>
      <View style={styles.innercontainer}>
        <Button
          title={CONSTANT_TEXT.ADD_EMPLOYEE}
          onPress={handlePress}
          backgroundColor={ENUMS.Colors.PRIMAR_GRAY}
        />
      </View>
    </View>
  );
};

export default AddButtonScreen;

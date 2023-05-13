import React from 'react';
import { View, Text, KeyboardAvoidingView } from 'react-native';
import Button from '../../components/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import {
  setEmail,
  setJobTitle,
  setSalary,
  setFirstName,
  setLastName,
  addEmployee,
} from '../../redux/slices/employeeSlice';
import Toast from 'react-native-toast-message';
import CommonInput from '../../components/CommonInputField/CommonInput';
import styles from './style';
import { CONSTANT_TEXT } from '../../constants/ConstantText';

const AddEmployee = ({ navigation }) => {
  const dispatch = useDispatch();
  const firstName = useSelector((state) => state.employee.firstName);
  const lastName = useSelector((state) => state.employee.lastName);
  const email = useSelector((state) => state.employee.email);
  const jobTitle = useSelector((state) => state.employee.jobTitle);
  const salary = useSelector((state) => state.employee.salary);

  const handleFirstNameChange = (text) => {
    dispatch(setFirstName(text));
  };

  const handleLastNameChange = (text) => {
    dispatch(setLastName(text));
  };

  const handleEmailChange = (text) => {
    dispatch(setEmail(text));
  };

  const handleJobTitleChange = (text) => {
    dispatch(setJobTitle(text));
  };

  const handleSalaryChange = (text) => {
    dispatch(setSalary(text));
  };

  const handleButtonPress = () => {
    dispatch(addEmployee());
    dispatch(setFirstName(''));
    dispatch(setLastName(''));
    dispatch(setEmail(''));
    dispatch(setJobTitle(''));
    dispatch(setSalary(''));
    Toast.show({
      type: 'success',
      text1: 'Data Added Successfully',
      visibilityTime: 3000,
    });
    navigation.navigate('Home');
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Text style={styles.employe_detail}>Enter employee details</Text>
      <CommonInput
        label={CONSTANT_TEXT.FIRST_NAME}
        value={firstName}
        onChangeText={handleFirstNameChange}
        placeholder={CONSTANT_TEXT.ENTER_NAME}
      />
      <CommonInput
        label={CONSTANT_TEXT.LAST_NAME}
        value={lastName}
        onChangeText={handleLastNameChange}
        placeholder={CONSTANT_TEXT.ENTER_LASTNAME}
      />
      <CommonInput
        label={CONSTANT_TEXT.ENTER_EMAIL}
        value={email}
        onChangeText={handleEmailChange}
        placeholder={CONSTANT_TEXT.ENTER_EMAILID}
      />
      <CommonInput
        label={CONSTANT_TEXT.JOb_TITLE}
        value={jobTitle}
        onChangeText={handleJobTitleChange}
        placeholder={CONSTANT_TEXT.ENTER_JOBTITLE}
      />
      <CommonInput
        label={CONSTANT_TEXT.SALARY}
        value={salary}
        onChangeText={handleSalaryChange}
        placeholder={CONSTANT_TEXT.ENTER_SALRY}
      />
      <Toast ref={(ref) => Toast.setRef(ref)} />
      <View>
        <Button
          title={CONSTANT_TEXT.SAVE}
          onPress={handleButtonPress}
          backgroundColor="#5FBE54"
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default AddEmployee;

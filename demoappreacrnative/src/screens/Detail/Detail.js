import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

const DetailScreen = () => {
  const employees = useSelector((state) => state.employee.employees);
  const totalLikes = employees.reduce(
    (count, employee) => count + employee.favoriteCount,
    0
  );
  const totalEmployees = employees.length;

  return (
    <View style={styles.container}>
      <Text>Total Likes: {totalLikes}</Text>
      <Text>Total Employees: {totalEmployees}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DetailScreen;

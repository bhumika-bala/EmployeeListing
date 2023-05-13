import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import Button from '../../components/Button/Button';
import { useSelector } from 'react-redux';
import Employeedetail from '../../components/EmployeeDetail/Employeedetail';
import styles from './style';
import {CONSTANT_TEXT} from '../../constants/ConstantText'
const Dashboard = ({ navigation }) => {
  
  const employees = useSelector((state) => state.employee.employees);
  const handleButtonPress = () => {
    navigation.navigate('AddEmployee');
  };
  const [sortOrder, setSortOrder] = useState('asc');
  const sortedEmployees = employees.slice().sort((a, b) => {
    const nameA = `${a.firstName} ${a.lastName}`.toUpperCase();
    const nameB = `${b.firstName} ${b.lastName}`.toUpperCase();
    return sortOrder === 'asc'
      ? nameA.localeCompare(nameB)
      : nameB.localeCompare(nameA);
  });
  const handleSortButtonPress = () => {
    const newSortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
    setSortOrder(newSortOrder);
  };
  const ListHeader = () => {
    return (
      <View>
        <Text style={styles.title}>{CONSTANT_TEXT.EMPLOYE_LIST}</Text>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={styles.header}>
        <View>
          <Button
            title="+"
            onPress={handleButtonPress}
            backgroundColor="#5FBE54"
          />
        </View>
        <View>
          <TouchableOpacity
            style={styles.sortButton}
            onPress={handleSortButtonPress}>
            <Text style={styles.sortButtonText}>Sort</Text>
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        contentContainerStyle={styles.contentContainer}
        ListHeaderComponent={<ListHeader />}
        data={sortedEmployees}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Employeedetail item={item} />}
      />
    </SafeAreaView>
  );
};

export default Dashboard;

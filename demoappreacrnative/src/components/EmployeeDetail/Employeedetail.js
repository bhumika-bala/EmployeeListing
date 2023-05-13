import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { toggleFavorite, toggleLiked } from '../../redux/slices/employeeSlice';
import { useDispatch, useSelector } from 'react-redux';
import styles from './style';

const getInitials = (firstName, lastName) => {
  const firstInitial = firstName.charAt(0).toUpperCase();
  const lastInitial = lastName.charAt(0).toUpperCase();
  return firstInitial + lastInitial;
};

const EmployeeDetail = ({ item }) => {
  const dispatch = useDispatch();
  const favoriteEmployees = useSelector(
    (state) => state.employee.favoriteEmployees
  );
  const likedEmployees = useSelector((state) => state.employee.likedEmployees);
  const isLiked = likedEmployees.includes(item.id);

  const handleLikeButton = () => {
    dispatch(toggleLiked(item.id));
    dispatch(toggleFavorite(item.id));
  };

  return (
    <View style={styles.item}>
      <View style={styles.header}>
        <View style={styles.head2}>
          <View style={styles.initialcontainer}>
            <Text style={styles.initialsText}>
              {getInitials(item.firstName, item.lastName)}
            </Text>
          </View>
          <View>
            <Text>{`Name: ${item.firstName} ${item.lastName}`}</Text>
            <Text>{`Email: ${item.email}`}</Text>
            <Text>{`Job Title: ${item.jobTitle}`}</Text>
            <Text>{`Salary: ${item.salary}`}</Text>
          </View>
        </View>

        <View>
          <TouchableOpacity onPress={handleLikeButton}>
            <Image
              source={
                isLiked
                  ? {
                      uri: 'https://cdn-icons-png.flaticon.com/128/1828/1828884.png',
                    }
                  : {
                      uri: 'https://cdn-icons-png.flaticon.com/128/2550/2550223.png',
                    }
              }
              style={styles.favicon}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default EmployeeDetail;

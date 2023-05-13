import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  item: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  initialsText: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  head2: {
    flexDirection: 'row',
  },
  initialcontainer: {
    height: 45,
    width: 45,
    borderColor: '#5FBE54',
    borderWidth: 1,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5FBE54',
    marginRight: 5,
  },
  favicon: {
    height: 30,
    width: 30,
  },
});
export default styles;

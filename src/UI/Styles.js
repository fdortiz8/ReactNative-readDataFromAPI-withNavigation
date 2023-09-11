import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    width: '100%',
    flexDirection: 'column',
  },
  input: {
    marginTop: 10,
    width: '66%',
    paddingHorizontal: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    fontSize: 16,
    backgroundColor: 'white',
  },
  button: {
    marginTop: 10,
  },
  text: {
    fontSize: 20,
    margin: 10,
    fontWeight: 'bold',
  },
  close: {
    fontSize: 14,
    padding: 4,
    margin: 10,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: 'red',
  },
  open: {
    fontSize: 14,
    padding: 4,
    margin: 10,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: 'green',
  },
  card: {
    flex: 1,
    flexDirection: 'row',
    padding: 2,
  },
  item: {
    paddingLeft: 10,
    fontSize: 18,
  },
  logoutButton: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: 'bold'
  },
  topButton: {
    marginRight: 10,
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
});

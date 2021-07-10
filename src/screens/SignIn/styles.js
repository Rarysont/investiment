import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  username: {
    width: '80%',
    height: 50,
    borderRadius: 8,
    backgroundColor: theme.colors.secondary,
    color: 'red',
    marginBottom: 8,
  },
  text: {
    borderWidth: 50,
    borderColor: theme.colors.green,
  },
  image: {
    width: 250,
    height: 250,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    backgroundColor: theme.colors.green,
    color: theme.colors.primary,
    marginBottom: 8,
    paddingHorizontal: 10,
  },
});
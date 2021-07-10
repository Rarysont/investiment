import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: '80%',
    height: 50,
    backgroundColor: theme.colors.green,
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  title: {
    textAlign: 'center',
    fontSize: 15,
    fontFamily: theme.fonts.text500,
    color: theme.colors.primary,
  },
});
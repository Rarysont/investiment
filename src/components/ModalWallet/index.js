import React from 'react';
import {
  View,
  Modal,
  TouchableWithoutFeedback,
  ScrollView
} from 'react-native';

import styles from './styles.less';

import { Background } from '../background';

export function ModalWallet({
  children, 
  closeModal,
  ...rest
}){
  return (
    <Modal
      transparent
      animationType="slide"
      statusBarTranslucent
      {...rest}
    >
      <TouchableWithoutFeedback onPress={closeModal}>
          <View style={styles.overlay}>
            <View style={styles.container}>
              <Background>
                <View style={styles.bar} />
                {children}
              </Background>
            </View>
          </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}
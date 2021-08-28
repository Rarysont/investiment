import React from 'react';
import {
  View,
  Modal,
  Text,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import ModalInfo from '../../assets/modal-info.png'
import styles from './styles.less';

export function ModalInfoPercent({
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
              <View style={styles.bar} />
              <View style={styles.containerImage}>
                <Image
                  source={ModalInfo}
                  style={styles.image}
                />
              </View>

              <View style={styles.containerText}>
                <View style={styles.containerTitle}>
                  <Text style={styles.title}>Resultado carteira</Text>
                </View>
                <View style={styles.containerSubtitle}>
                  <Text style={styles.title2}>Aqui você verá o resultado total da sua carteira atual.</Text>
                </View>
              </View>

              <View style={styles.containerButton}>
                <RectButton style={styles.button} onPress={closeModal}>
                  <Text style={styles.confirmButton}>Entendi</Text>
                </RectButton>
              </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}

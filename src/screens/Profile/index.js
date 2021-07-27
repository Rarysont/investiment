import React from 'react';
import { Text, View, Image, ScrollView} from 'react-native';
import { Background } from '../../components/background';
import { useAuth } from '../../hooks/auth';
import { ButtonPerfil } from '../../components/ButtonPerfil';
import { RectButton } from 'react-native-gesture-handler';
import Icon from '@expo/vector-icons/MaterialIcons';
import styles from './styles';

export function Profile(){
  const { userInfo, singOut } = useAuth();

  return(
    <Background>
      <ScrollView>
        <View style={styles.containerPage}>
          <Text style={styles.textPerfil}>Perfil</Text>
          <View style={{
            borderWidth: 3, 
            borderTopColor: '#FFF', 
            width: '80%', 
            justifyContent: 'center', 
            textAlign: 'center',
            display: 'flex'
          }} />
        </View>

        <View style={styles.container}>
          <Image 
            source={{ uri: userInfo.picture }}
            style={styles.imageUser}
          />

          <View style={styles.containerButtons}>
            <ButtonPerfil title={userInfo.name} text="Nome"/>
            <ButtonPerfil title={userInfo.email} text="Email"/>
            <ButtonPerfil text="CPF"/>
            <ButtonPerfil text="Telefone"/>
            <ButtonPerfil text="RG"/>
          </View>

          <View style={styles.logoutContainer}>
            <RectButton style={styles.logoutButton} onPress={singOut}>
              <View style={styles.box}>
              <Icon name="logout" size={32} color="#FFF" />
                <Text style={styles.title}>
                  SAIR
                </Text>
              </View>
            </RectButton>
          </View>
        </View>
      </ScrollView>
    </Background>
  );
}
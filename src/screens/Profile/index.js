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
          <Text style={styles.titlePage}>PERFIL</Text>
          <View style={styles.borderProfile}/>
        </View>

        <View style={styles.container}>
          <Image
            source={{ uri: userInfo.picture }}
            style={[styles.imageUser, {
              borderWidth: 3,
              borderRadius: 180,
              borderColor: '#E51C44'
            }]}
          />
          <Text style={styles.dataUser}>{userInfo.name}</Text>
          <Text style={styles.dataUser}>{userInfo.email}</Text>

          <View style={styles.containerButtons}>
            <ButtonPerfil title="Notificações" text="CPF" icone="notifications" />
            <ButtonPerfil title="Editar Perfil" text="CPF" icone="person" />
            <ButtonPerfil title="Suporte" text="CPF" icone="headset" />
            <ButtonPerfil title="Politica de Privacidade" text="CPF" icone="reader" />
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

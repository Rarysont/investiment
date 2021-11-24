import React from 'react';
import { Text, View, Image, ScrollView} from 'react-native';
import { Background } from '../../components/background';
import { useAuth } from '../../hooks/auth';
import { ButtonPerfil } from '../../components/ButtonPerfil';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import Icon from '@expo/vector-icons/MaterialIcons';
import styles from './styles';
import defaultImage from '../../assets/defaultUser.png'

export function Profile(){
  const { userInfo, singOut } = useAuth();
  const navigation = useNavigation();

  function handleEditProfile() {
    navigation.navigate('EditProfile');
  }

  return(
    <Background>
      <ScrollView>
        <View style={styles.containerPage}>
          <Text style={styles.titlePage}>PERFIL</Text>
          <View style={styles.borderProfile}/>
        </View>

        <View style={styles.container}>
          <Image
            source={defaultImage}
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
            <ButtonPerfil title="Editar Perfil" text="CPF" icone="person" onPress={handleEditProfile} />
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

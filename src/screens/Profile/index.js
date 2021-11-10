import React from 'react';
import { Text, View, Image, ScrollView} from 'react-native';
import { Background } from '../../components/background';
import { useAuth } from '../../hooks/auth';
import { ButtonPerfil } from '../../components/ButtonPerfil';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import Icon from '@expo/vector-icons/MaterialIcons';
import styles from './styles';

export function Profile(){
  const { userInfo, singOut } = useAuth();
  const navigation = useNavigation();

  function handleEditProfile() {
    navigation.navigate('EditProfile');
  }

  const image = 'https://scontent.fcpq4-1.fna.fbcdn.net/v/t1.6435-9/181563117_935493783892960_8894682427987472468_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeHTo_s6MCLiAIIM_R8bhaTah4ztbmG5IFKHjO1uYbkgUgSt-aWXQm_R9w30Gvquavtn_hPgDIu_ZB0nh--ofgZU&_nc_ohc=rCkR9yYoFS0AX8psZ4Y&tn=11jIHNukjQlt-Au2&_nc_ht=scontent.fcpq4-1.fna&oh=c7b978c27e28fe06e42cd704acade77b&oe=61A79C8D';

  return(
    <Background>
      <ScrollView>
        <View style={styles.containerPage}>
          <Text style={styles.titlePage}>PERFIL</Text>
          <View style={styles.borderProfile}/>
        </View>

        <View style={styles.container}>
          <Image
            source={{ uri: image }}
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

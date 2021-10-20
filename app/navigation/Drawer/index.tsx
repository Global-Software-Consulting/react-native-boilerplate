import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { DrawerItem, DrawerContentScrollView } from '@react-navigation/drawer';
import { Avatar, Title, Text, List, RadioButton } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ThemeController from '../../components/ThemeController';
import { useDispatch } from 'react-redux';
import * as loginActions from 'app/store/slice/userSlice';
import { useStyle } from './styles';
import { useTranslation } from 'react-i18next';
import StdButton from 'app/components/StandardButton';
import { useTheme } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
// import i18n from "../../components/Languages/i18n";
const Drawer: React.FC = (props) => {
    const [checked, setChecked] = React.useState('first');
    const { t, i18n } = useTranslation();
    const dispatch = useDispatch();
    const onLogout = () => dispatch(loginActions.logOut());
    const theme = useTheme();
    const styles = useStyle();
    const navigation = useNavigation();

    return (
        <View style={styles.drawerContent}>
            <DrawerContentScrollView {...props}>
                <View style={styles.userInfoSection}>
                    <Avatar.Image
                        source={{
                            uri: 'https://pbs.twimg.com/profile_images/952545910990495744/b59hSXUd_400x400.jpg',
                        }}
                        size={50}
                    />
                    <Title style={styles.title}>Dawid Urbaniak</Title>
                    <View style={styles.row} />
                </View>

                <DrawerItem
                    icon={({ size }) => (
                        <MaterialCommunityIcons
                            name="home-outline"
                            color={theme.colors.primary}
                            size={size}
                        />
                    )}
                    onPress={() => {
                        navigation.navigate('Home');
                    }}
                    label="Home"
                    activeTintColor="#2196f3"
                    activeBackgroundColor="rgba(0, 0, 0, .04)"
                    inactiveTintColor="rgba(0, 0, 0, .87)"
                    inactiveBackgroundColor="transparent"
                    labelStyle={{ color: theme.colors.primary }}
                />
                <DrawerItem
                    icon={({ size }) => (
                        <MaterialCommunityIcons
                            name="account-outline"
                            color={theme.colors.primary}
                            size={size}
                        />
                    )}
                    label="Profile"
                    activeTintColor="#2196f3"
                    activeBackgroundColor="rgba(0, 0, 0, .04)"
                    inactiveTintColor="rgba(0, 0, 0, .87)"
                    inactiveBackgroundColor="transparent"
                    labelStyle={{ color: theme.colors.primary }}
                    onPress={() => {
                        navigation.navigate('Profile');
                    }}
                />
                <DrawerItem
                    icon={({ size }) => (
                        <MaterialCommunityIcons
                            name="chat-outline"
                            color={theme.colors.primary}
                            size={size}
                        />
                    )}
                    labelStyle={{ color: theme.colors.primary }}
                    onPress={() => {
                        navigation.navigate('Chat');
                    }}
                    label="Chat"
                    activeTintColor="#2196f3"
                    inactiveTintColor="white"
                    inactiveBackgroundColor="transparent"
                />

                <View style={styles.preference}>
                    <Text style={styles.text}>{t('Theme')} </Text>
                    <ThemeController />
                </View>

                <List.Accordion
                    theme={{ colors: theme.colors.primary }}
                    title={<Text style={styles.text}>{t('Languages')} </Text>}>
                    <TouchableOpacity
                        onPress={() => {
                            setChecked('first');
                            i18n.changeLanguage('en');
                        }} //Here I change the language to "en" English
                        style={styles.listbutton}>
                        <RadioButton
                            value="first"
                            status={checked === 'first' ? 'checked' : 'unchecked'}
                            onPress={() => {
                                setChecked('first');
                                i18n.changeLanguage('en');
                            }}
                            color="gray"
                        />
                        <Text style={styles.chekboxtext}>English</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            setChecked('second');
                            i18n.changeLanguage('es');
                        }} //Here I change the language to "es" Spanish
                        style={styles.listbutton}>
                        <RadioButton
                            value="second"
                            status={checked === 'second' ? 'checked' : 'unchecked'}
                            onPress={() => {
                                setChecked('second');
                                i18n.changeLanguage('es');
                            }}
                            color="gray"
                        />
                        <Text style={styles.chekboxtext}>Spanish</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            setChecked('third');
                            i18n.changeLanguage('de');
                        }} //Here I change the language to "de" German
                        style={styles.listbutton}>
                        <RadioButton
                            value="third"
                            status={checked === 'third' ? 'checked' : 'unchecked'}
                            onPress={() => {
                                setChecked('third');
                                i18n.changeLanguage('de');
                            }}
                            color="gray"
                        />
                        <Text style={styles.chekboxtext}>German</Text>
                    </TouchableOpacity>
                </List.Accordion>

                <StdButton
                    title="Log out"
                    onPress={onLogout}
                    icon="logout"
                    iconColor={theme.colors.background === 'white' ? 'white' : 'black'}
                />
            </DrawerContentScrollView>
        </View>
    );
};

export default Drawer;

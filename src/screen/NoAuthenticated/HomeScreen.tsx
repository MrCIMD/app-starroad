import React, { FC } from "react";
import { Button, Dimensions, Image, Platform, StyleSheet, View, } from "react-native";
import { useNav } from "../../hooks";

const HomeScreen: FC = () => {
    const {handleGoLogin, handleGoRegister} = useNav();

    const buttonWidth = 100;

    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image
                    source={require('../../images/star_road_logo.png')}
                    style={styles.logo}
                />
            </View>
            <View style={styles.buttonsContainer}>
                <View style={[styles.buttonWrapper, {width: buttonWidth}]}>
                    <Button
                        title="Login"
                        onPress={handleGoLogin}
                        color={Platform.OS === "ios" ? "#FFFFFF" : "#0066FF"}
                    />
                </View>
                <View style={[styles.buttonWrapper, {width: buttonWidth}]}>
                    <Button
                        title="Register"
                        onPress={handleGoRegister}
                        color={Platform.OS === "ios" ? "#FFFFFF" : "#0066FF"}
                    />
                </View>
            </View>
        </View>
    );
};

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFFFFF",
    },
    logoContainer: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        marginBottom: 20, // Espacio entre el logo y los botones
    },
    logo: {
        width: windowWidth * 0.5, // Ajusta el tamaño de la imagen según tus necesidades
        height: windowWidth * 0.5, // Ajusta el tamaño de la imagen según tus necesidades
    },
    buttonsContainer: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
    },
    buttonWrapper: {
        marginBottom: 10, // Espacio entre los botones
        borderRadius: 10, // Borde redondeado menos pronunciado
        overflow: "hidden", // Para aplicar el borde redondeado
        ...Platform.select({
            ios: {
                backgroundColor: "#0066FF", // Fondo azul para iOS
            },
            android: {
                backgroundColor: "#0066FF", // Fondo azul para Android
            },
        }),
    },
});

export default HomeScreen;

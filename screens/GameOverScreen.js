import { View, Text, Image, StyleSheet } from "react-native";
import Colors from "../constants/colors";
import Button from "../components/Button";

function GameOverScreen({ number, resetGame }) {
    return (
        <View style={styles.wrapper}>
            <Text style={styles.textResult}>
                The number you have guessed is <Text style={styles.number}>{number}</Text>
            </Text>
            <Image style={styles.successImage} source={require("../assets/success.jpg")} />
            <Text style={styles.textResult}>
                The Prototype needed <Text style={styles.number}>X</Text> attempts to guess it
            </Text>
            <Button onPress={resetGame}>Start a new game</Button>
        </View>
    );
}

export default GameOverScreen;

const styles = StyleSheet.create({
    wrapper: {
        flex: 0.5,
        gap: 12,
        alignItems: "center",
    },
    textResult: {
        fontFamily: "gemunu",
        fontSize: 24,
        color: Colors.light,
    },
    number: {
        color: Colors.red,
        fontFamily: "gemunu-bold",
        textDecorationLine: "underline",
    },
    successImage: {
        height: 250,
        width: 250,
        borderRadius: 200,
        borderWidth: 2,
        borderColor: Colors.light,
    },
});

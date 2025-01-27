import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";

import Button from "../components/Button";

function GameScreen(props) {
    const [guess, setGuess] = useState(50);

    const onChangeGuess = (prediction) => {
        const nextGuess = Math.ceil(prediction === "less" ? guess / 2 : guess * 2);
        setGuess(nextGuess);
        console.log("Next guess is: ", nextGuess);
    };

    return (
        <LinearGradient style={styles.gradient} colors={["#965fd4", "#3f2857", "#965fd4"]}>
            <View style={styles.wrapper}>
                <Text style={styles.promptText}>Prototype thinks you guessed: </Text>
                <Text style={styles.promptNumber}>{guess}</Text>
                <View style={styles.buttons}>
                    <View style={{ flex: 0.7 }}>
                        <Button onPress={() => onChangeGuess("less")}>Less</Button>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Button onPress={props.finishGame}>Correct</Button>
                    </View>
                    <View style={{ flex: 0.7 }}>
                        <Button onPress={() => onChangeGuess("more")}>More</Button>
                    </View>
                </View>
            </View>
        </LinearGradient>
    );
}

export default GameScreen;

const styles = StyleSheet.create({
    gradient: {
        flex: 0.5,
        borderColor: "#1d1a2f",
        borderTopWidth: 3,
        borderBottomWidth: 3,
    },
    wrapper: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 12,
    },
    promptText: {
        fontSize: 24,
    },
    promptNumber: {
        fontSize: 82,
        fontWeight: 700,
        color: "#8bd450",
    },
    buttons: {
        width: "75%",
        flexDirection: "row",
        justifyContent: "center",
        gap: 12,
    },
});

import { View, Text, Alert, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";

import Button from "../components/Button";

function GameScreen(props) {
    const [guessLimits, setGuessLimits] = useState({ lower: 0, higher: 99 });

    const onChangeGuess = (prediction) => {
        const guess = Math.ceil((guessLimits.higher + guessLimits.lower) / 2);
        const isPlayerCheating =
            (prediction === "correct" && props.number != guess) ||
            (prediction === "less" && props.number >= guess) ||
            (prediction === "more" && props.number <= guess);
        if (prediction === "correct" && props.number === guess) {
            props.finishGame();
        } else if (isPlayerCheating) {
            Alert.alert("Incorrect input", "Shouldn't you cheat, Idiot Sindji?", [
                {
                    text: "I'm sorry",
                    style: "destructive",
                },
            ]);
        } else if (prediction === "correct" && props.number === guess) {
        } else {
            const isLowerThanExpected = prediction === "less";
            const nextGuessLimits = {
                lower: isLowerThanExpected ? guessLimits.lower : guess,
                higher: isLowerThanExpected ? guess : guessLimits.higher,
            };
            setGuessLimits(nextGuessLimits);
        }
    };

    return (
        <LinearGradient style={styles.gradient} colors={["#965fd4", "#3f2857", "#965fd4"]}>
            <View style={styles.wrapper}>
                <Text style={styles.promptText}>Prototype thinks you guessed: </Text>
                <Text style={styles.promptNumber}>{Math.ceil((guessLimits.higher + guessLimits.lower) / 2)}</Text>
                <View style={styles.buttons}>
                    <View style={{ flex: 0.7 }}>
                        <Button onPress={() => onChangeGuess("less")}>Less</Button>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Button onPress={() => onChangeGuess("correct")}>Correct</Button>
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

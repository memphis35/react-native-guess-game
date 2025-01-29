import { View, Text, Alert, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";

import Button from "../components/Button";
import Colors from "../constants/colors";

function GameScreen({ gameStats, setGameStats }) {
    const [guessStats, setGuessStats] = useState({
        lower: 0,
        higher: 99,
        guess: Math.ceil(Math.random() * 99),
        ignored: [],
        count: 0,
    });

    const generateGuess = (higher, lower, ignored) => {
        const guess = Math.ceil(Math.random() * (higher - lower)) + lower;
        return !ignored.includes(guess) ? guess : generateGuess(higher, lower, ignored);
    };

    useEffect(() => {
        console.log("Guessed number", gameStats.number, typeof gameStats.number);
        if (gameStats.number === guessStats.guess) {
            setGameStats((current) => {
                return { ...current, count: guessStats.count, stage: "post" };
            });
        }
    }, [guessStats.guess]);

    const onChangeGuess = (prediction) => {
        const guess = guessStats.guess;

        const isLyingAboutLess = prediction === "less" && gameStats.number >= guess;
        const isLyingAboutMore = prediction === "more" && gameStats.number <= guess;
        const isPlayerCheating = isLyingAboutLess || isLyingAboutMore;
        if (isPlayerCheating) {
            Alert.alert("Incorrect input", "Shouldn't you cheat, Idiot Sindji?", [
                {
                    text: "I'm sorry",
                    style: "destructive",
                },
            ]);
        } else {
            const isLowerThanExpected = prediction === "less";
            const next = {
                ...guessStats,
                lower: isLowerThanExpected ? guessStats.lower : guess,
                higher: isLowerThanExpected ? guess : guessStats.higher,
                ignored: [...guessStats.ignored, guess],
                count: guessStats.count + 1,
            };
            next.guess = generateGuess(next.higher, next.lower, next.ignored);
            console.log(next);
            setGuessStats(next);
        }
    };

    return (
        <LinearGradient style={styles.gradient} colors={[Colors.violet, "#3f2857", Colors.violet]}>
            <View style={styles.wrapper}>
                <Text style={styles.promptText}>Prototype thinks you guessed: </Text>
                <Text style={styles.promptNumber}>{guessStats.guess}</Text>
                <View style={styles.buttons}>
                    <View style={{ flex: 1 }}>
                        <Button onPress={() => onChangeGuess("less")}>
                            <Ionicons name="trending-down" size={28} />
                        </Button>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Button onPress={() => onChangeGuess("more")}>
                            <Ionicons name="trending-up" size={28} />
                        </Button>
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
        borderColor: Colors.dark,
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
        fontFamily: "gemunu-bold",
        fontSize: 24,
    },
    promptNumber: {
        fontFamily: "gemunu-bold",
        fontSize: 82,
        fontWeight: 700,
        color: Colors.green,
    },
    buttons: {
        width: "75%",
        flexDirection: "row",
        justifyContent: "center",
        gap: 12,
    },
});

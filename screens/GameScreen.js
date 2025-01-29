import { View, Text, Alert, FlatList, StyleSheet } from "react-native";
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
    const [logs, setLogs] = useState([]);

    useEffect(() => {
        console.log("Guessed number", gameStats.number, typeof gameStats.number);
        if (gameStats.number === guessStats.guess) {
            setGameStats((current) => {
                return { ...current, count: guessStats.count, stage: "post" };
            });
        }
    }, [guessStats.guess]);

    const checkIfPlayerCheats = (prediction, guess, number) => {
        const isLyingAboutLess = prediction === "less" && number >= guess;
        const isLyingAboutMore = prediction === "more" && number <= guess;
        return isLyingAboutLess || isLyingAboutMore;
    };

    const generateGuess = (higher, lower, ignored) => {
        const guess = Math.ceil(Math.random() * (higher - lower)) + lower;
        return !ignored.includes(guess) ? guess : generateGuess(higher, lower, ignored);
    };

    const alert = () => {
        Alert.alert("Incorrect input", "Shouldn't you cheat, Idiot Sindji?", [
            {
                text: "I'm sorry",
                style: "destructive",
            },
        ]);
    };

    const addLog = (text) => {
        setLogs((prevLogs) => [{ key: prevLogs.length + 1, text }, ...prevLogs]);
    };

    const renderLog = (itemWrapper) => <Text style={styles.consoleText}>{"ai_prompt> " + itemWrapper.item.text}</Text>;

    const onChangeGuess = (prediction) => {
        const guess = guessStats.guess;
        const isPlayerCheating = checkIfPlayerCheats(prediction, guess, gameStats.number);
        if (isPlayerCheating) {
            alert();
            addLog("cheat attempt has been detected");
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
            addLog(`lower limit: ${next.lower}, upper limit: ${next.higher}`);
        }
    };

    return (
        <>
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
            <FlatList style={styles.console} data={logs} renderItem={renderLog} />
        </>
    );
}

export default GameScreen;

const styles = StyleSheet.create({
    gradient: {
        flex: 1,
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
    console: {
        flex: 1,
        gap: 4,
        paddingVertical: 12,
        paddingHorizontal: 4,
    },
    consoleText: {
        color: "white",
        fontFamily: "gemunu",
        fontSize: 24,
    },
});

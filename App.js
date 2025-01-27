import { View, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import StartGameScreen from "./screens/StartGameScreen";
import GameHeader from "./screens/GameHeader";

export default function App() {
    const [number, setNumber] = useState(0);

    const enterNumberHandle = (number) => {
        setNumber(number);
        console.log("Enter number: ", number);
    };

    const confirmNumberHandle = (number) => {
        console.log("Submit a number");
    };
    const resetNumberHandle = () => {
        setNumber(null);
        console.log("Reset number: ", number);
    };

    return (
        <View style={styles.wrapper}>
            <GameHeader />
            <StartGameScreen
                onEnter={enterNumberHandle}
                onConfirm={confirmNumberHandle}
                onReset={resetNumberHandle}
                number={number}
            />
            <StatusBar barStyle="light-content" />
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: "#1d1a2f",
    },
});

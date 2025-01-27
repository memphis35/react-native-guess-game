import { View, Text, TextInput, StyleSheet } from "react-native";
import { useState } from "react";
import Button from "../components/Button";

function StartGameScreen() {
    const [number, setNumber] = useState(0);
    return (
        <View style={styles.wrapper}>
            <Text>Start a new game</Text>
            <TextInput placeholder="00" maxLength={2} style={styles.numberInput} />
            <View style={styles.buttons}>
                <Button>Cancel</Button>
                <Button>Confirm</Button>
            </View>
        </View>
    );
}

export default StartGameScreen;

const styles = StyleSheet.create({
    wrapper: {
        width: 200,
        alignItems: "center",
        gap: 10,
    },
    numberInput: {
        width: 200,
        height: 150,
        fontSize: 110,
        textAlign: "center",
        borderWidth: 2,
        borderRadius: 4,
        padding: 8,
    },
    buttons: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
    },
});

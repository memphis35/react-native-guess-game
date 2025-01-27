import { View, Text, TextInput, StyleSheet } from "react-native";
import Button from "../components/Button";

function StartGameScreen(props) {
    return (
        <View style={styles.wrapper}>
            <Text style={styles.title}>Start a new game</Text>
            <TextInput
                placeholder="00"
                maxLength={2}
                style={styles.numberInput}
                keyboardType="number-pad"
                value={props.number}
                onChangeText={(number) => props.onEnter(number)}
            />
            <View style={styles.buttons}>
                <View style={styles.buttonWrapper}>
                    <Button onPress={props.onReset}>Reset</Button>
                </View>
                <View style={styles.buttonWrapper}>
                    <Button onPress={props.onConfirm}>Confirm</Button>
                </View>
            </View>
        </View>
    );
}

export default StartGameScreen;

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: "#965fd4",
        paddingHorizontal: 100,
        paddingVertical: 24,
        alignItems: "stretch",
        gap: 10,
        alignSelf: "center",
    },
    title: {
        textAlign: "center",
        textTransform: "uppercase",
        color: "#1d1a2f",
        fontSize: 20,
    },
    numberInput: {
        height: 150,
        backgroundColor: "#8bd450",
        color: "#3f6d4e",
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
        gap: 10,
    },
    buttonWrapper: {
        flex: 1,
    },
});

import { View, Text, TextInput, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Button from "../components/Button";

function StartGameScreen({ number, setNumber, startGame }) {
    const onEnterNumber = (number) => {
        setNumber(number);
        console.log("Enter number: ", number);
    };

    const onConfirmNumber = () => {
        console.log("Confirming a number: ", number);
        const num = Number.parseInt(number);
        console.log(num);
        if (Number.isNaN(num) || num < 1 || num > 99) {
            Alert.alert("Invalid number", "Entered  number has to be in range of 1-99", [
                {
                    text: "Gotcha!",
                    style: "destructive",
                    onPress: () => setNumber(null),
                },
            ]);
        }
        console.log("Submit a number", number);
        startGame();
    };

    const onResetNumber = () => {
        setNumber(null);
        console.log("Reset number: ", number);
    };

    return (
        <LinearGradient style={styles.wrapper} colors={["#965fd4", "#3f2857", "#965fd4"]}>
            <Text style={styles.title}>Start a new game</Text>
            <TextInput
                placeholder="00"
                maxLength={2}
                style={styles.numberInput}
                keyboardType="number-pad"
                value={number}
                onChangeText={onEnterNumber}
            />
            <View style={styles.buttons}>
                <View style={styles.buttonWrapper}>
                    <Button onPress={onResetNumber}>Reset</Button>
                </View>
                <View style={styles.buttonWrapper}>
                    <Button onPress={onConfirmNumber}>Confirm</Button>
                </View>
            </View>
        </LinearGradient>
    );
}

export default StartGameScreen;

const styles = StyleSheet.create({
    wrapper: {
        flex: 0.5,
        paddingHorizontal: 100,
        paddingVertical: 24,
        alignItems: "stretch",
        gap: 10,
        alignSelf: "center",
        borderColor: "#1d1a2f",
        borderTopWidth: 3,
        borderBottomWidth: 3,
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

import { View, Text, TextInput, Alert, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Button from "../components/Button";

import Colors from "../constants/colors";

function StartGameScreen({ number, setNumber, startGame }) {
    const onEnterNumber = (number) => {
        setNumber(number);
    };

    const onConfirmNumber = () => {
        const num = Number.parseInt(number);
        if (Number.isNaN(num) || num < 1 || num > 99) {
            Alert.alert("Invalid number", "Entered  number has to be in range of 1-99", [
                {
                    text: "Gotcha!",
                    style: "destructive",
                    onPress: () => setNumber(null),
                },
            ]);
        } else {
            startGame();
        }
    };

    const onResetNumber = () => {
        setNumber(null);
    };

    return (
        <LinearGradient style={styles.wrapper} colors={[Colors.violet, Colors.deepViolet, Colors.violet]}>
            <Text style={styles.title}>Enter a number:</Text>
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
        borderColor: Colors.dark,
        borderTopWidth: 3,
        borderBottomWidth: 3,
    },
    title: {
        fontFamily: "gemunu-bold",
        textAlign: "center",
        textTransform: "uppercase",
        color: Colors.dark,
        fontSize: 20,
    },
    numberInput: {
        height: 150,
        backgroundColor: Colors.green,
        color: Colors.paleGreen,
        fontFamily: "gemunu",
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

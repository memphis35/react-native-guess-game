import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import { useState } from "react";
import Colors from "../constants/colors";

function GameHeader() {
    const prototypes = [
        {
            name: "Rey, Ayanami",
            avatar: require("../assets/ayanami.jpg"),
            model: "Unit-00",
        },
        {
            name: "Shinji, Ikari",
            avatar: require("../assets/ikari.jpg"),
            model: "Unit-01",
        },
        {
            name: "Langley, Asuka",
            avatar: require("../assets/asuka.jpg"),
            model: "Unit-02",
        },
    ];
    const [ind, setInd] = useState(0);

    const switchPrototype = () => {
        const nextIndex = ind >= prototypes.length - 1 ? 0 : ind + 1;
        setInd(nextIndex);
    };

    return (
        <View style={styles.wrapper}>
            <Text style={styles.title}>EVANGELION PROTOTYPE AI</Text>
            <View style={styles.headerDashboard}>
                <Image style={styles.logo} source={require("../assets/nerv-logo.png")} />
                <Pressable onPress={switchPrototype}>
                    <Image style={styles.avatar} source={prototypes[ind].avatar} />
                </Pressable>
            </View>
            <Text style={styles.bottomTitle}>
                AI PROTOTYPE VERSION : {prototypes[ind].model} ({prototypes[ind].name})
            </Text>
        </View>
    );
}

export default GameHeader;

const styles = StyleSheet.create({
    wrapper: {
        paddingHorizontal: 24,
        paddingBottom: 24,
    },
    title: {
        fontFamily: "gemunu-bold",
        fontSize: 24,
        color: Colors.light,
        textTransform: "uppercase",
    },
    bottomTitle: {
        fontFamily: "gemunu",
        textAlign: "right",
        color: Colors.light,
        textTransform: "uppercase",
    },
    headerDashboard: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    logo: {
        width: 150,
        height: 150,
    },
    avatar: {
        width: 120,
        height: 120,
        borderColor: Colors.light,
        borderWidth: 2,
        borderRadius: 4,
    },
});

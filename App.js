import { View, ImageBackground, SafeAreaView, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

import Colors from "./constants/colors";
import GameHeader from "./screens/GameHeader";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
    const [stage, setStage] = useState("pre");
    const [number, setNumber] = useState();

    const [fontsLoaded] = useFonts({
        gemunu: require("./assets/fonts/GemunuLibre-Regular.ttf"),
        "gemunu-bold": require("./assets/fonts/GemunuLibre-Bold.ttf"),
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    const onSwitchStage = () => {
        if ("pre" === stage) {
            setStage("during");
        } else if ("during" === stage) {
            setStage("post");
        } else {
            setStage("pre");
        }
    };

    const stages = {
        pre: <StartGameScreen style={styles.screen} number={number} setNumber={setNumber} startGame={onSwitchStage} />,
        during: <GameScreen number={Number.parseInt(number)} finishGame={onSwitchStage} />,
        post: <GameOverScreen resetGame={onSwitchStage} />,
    };

    return (
        <View style={styles.wrapper}>
            <ImageBackground
                source={require("./assets/background.png")}
                resizeMode="cover"
                style={styles.wrapper}
                imageStyle={styles.image}
            >
                <SafeAreaView style={{ flex: 1 }}>
                    <GameHeader />
                    {stages[stage]}
                    <StatusBar barStyle="light-content" />
                </SafeAreaView>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: Colors.dark,
    },
    image: {
        opacity: 0.12,
    },
});

import { useState } from "react";
import { Animated, FlatList, Modal, StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import { CustomButton } from "./custombutton";
import { CustomText } from "./customtext";
import { CustomView } from "./customview";
import { Title } from "./title";
import { TopBar } from "./topbar";


const renderDefinition = ({item}) =>
{
    if (item.example !== undefined) {
        return (
            <View>
                <CustomText style={styles.definition}>{`\u2022 ${item.definition}`}</CustomText>
                <CustomText useDifferentPalette={true} style={styles.example}>{`Example: ${item.example}`}{"\n"}</CustomText>
            </View>
        );
    }
    return (
        <View>
            <CustomText style={styles.definition}>{`\u2022 ${item.definition}`}</CustomText>
            <CustomText useDifferentPalette={true} style={styles.example}>{`No example provided.`}{"\n"}</CustomText>
        </View>
    )
}
const renderMeaning = ({item}) =>
{
    return (
        <View>
            <CustomText style={styles.type}>{item.partOfSpeech} meanings{"\n"}</CustomText>
            <FlatList data={item.definitions} renderItem={renderDefinition}/>
        </View>
    );
}

const renderItem = ({item}) =>
{
    return (
        <View style={{paddingBottom: "40%"}}>
            <CustomText style={styles.dictionaryWord}>{item.word}</CustomText>
            <CustomText useDifferentPalette={true} style={styles.wordType}>Definitions{"\n\n"}</CustomText>
            <FlatList data={item.meanings} renderItem={renderMeaning} />
        </View>
    );
}

export const Dictionary = ({route, navigation}) =>
{
    const [showModal, setShowModal] = useState(true);
    const data = useSelector((state) => state.dictionary.data);
    if (data.message === "Sorry pal, we couldn't find definitions for the word you were looking for.") {
        return (
            <CustomView>
                <Modal animationType="slide" transparent={false} visible={showModal} onRequestClose={() => setShowModal(false)}>
                    <CustomView>
                        <CustomText>Couldn't find definitions for {route.params.title}</CustomText>
                        <CustomButton text="OK" onPress={() => {
                            setShowModal(false);
                            navigation.navigate("Search", {title: "Dictionary Go"});
                        }}/>
                    </CustomView>
                </Modal>
            </CustomView>
        );
    }
    return (
        <CustomView style={styles.container}>
            <TopBar/>
            <FlatList style={styles.list} data={data} renderItem={renderItem}/>
        </CustomView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexWrap: "wrap",
        alignItems: "baseline",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignContent: "flex-end"
    }, 
    dictionaryWord: {
        position: "relative",
        fontSize: 40,
    },
    wordType: {
        position: "relative",
        fontSize: 25,
    },
    type: {
        fontSize: 28
    },
    definition: {
        position: "relative",
        fontSize: 15
    },  
    example: {
        position: "relative",
        fontSize: 10
    },
    list: {
        textAlign: "baseline",
        alignSelf: "baseline",
        marginHorizontal: "10%",
        width: "100%",
        flex: 1,
    }
});
import { Modal } from "react-native";
import { CustomText } from "./customtext";
import { CustomView } from "./customview";
import { TopBar } from "./topbar";
import { useState } from "react";
import { Bar } from "react-native-progress";
import { CustomButton } from "./custombutton";
import { Title } from "./title";

const RANDOM_JOKE_API = "https://official-joke-api.appspot.com/random_joke";
export const CoolJoke = ({navigation}) =>
{
    const [data, setData] = useState({});
    const [showModal, setShowModal] = useState(true);
    return (
        <CustomView>
            <TopBar/>
            <Modal animationType="slide" transparent={false} visible={showModal} onRequestClose={() => setShowModal(false)}>
                <CustomView>
                    <CustomText>Fetching API, please wait a moment...</CustomText>
                    <Bar indeterminate={true} color="grey"/>
                    <CustomButton text="OK" onPress={() => {
                        setShowModal(false);
                        fetch(RANDOM_JOKE_API).then((resp) => resp.json()).then((json) => setData(json));
                    }}/>
                </CustomView>
            </Modal>
            <Title title={data.setup} subTitle={data.punchline}/>
        </CustomView>
    );

}
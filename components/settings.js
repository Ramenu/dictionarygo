import { useState } from "react";
import { Modal } from "react-native";
import { CustomButton } from "./custombutton";
import { CustomText } from "./customtext";
import { CustomView } from "./customview";
import { Title } from "./title";

export const Settings = ({route, navigation}) =>
{
    const [showModal, setShowModal] = useState(true);
    return (
        <CustomView>
            <Modal animationType="slide" transparent={false} visible={showModal} onRequestClose={() => setShowModal(false)}>
                <CustomText>Altering settings may have unintended consequences</CustomText>
                <CustomButton text="OK" onPress={() => setShowModal(false)}/>
            </Modal>
            <Title title={route.params.title}/>
        </CustomView>
    );
}
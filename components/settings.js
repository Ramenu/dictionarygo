import { useState } from "react";
import { Modal } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { CustomButton } from "./custombutton";
import { CustomText } from "./customtext";
import { CustomView } from "./customview";
import { Title } from "./title";
import { changeTheme } from "../redux/slices/themeslice";

export const Settings = ({route, navigation}) =>
{
    const theme = useSelector((state) => state.theme);
    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(true);
    return (
        <CustomView>
            <Modal animationType="slide" transparent={false} visible={showModal} onRequestClose={() => setShowModal(false)}>
                <CustomView>
                    <CustomText>Altering settings may have unintended consequences</CustomText>
                    <CustomButton text="OK" onPress={() => setShowModal(false)}/>
                </CustomView>
            </Modal>
            <Title title={route.params.title}/>
            <CustomButton style={{width: "33%"}}text="CHANGE THEME" onPress={() => dispatch(changeTheme())}/>
        </CustomView>
    );
}
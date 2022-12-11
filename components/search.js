import { Animated, StyleSheet, View } from "react-native";
import { CustomButton } from "./custombutton";
import { InputBox } from "./inputbox";
import { Title } from "./title";
import { CustomView } from "./customview";
import { TopBar } from "./topbar";

export const Search = ({navigation}) =>
{
    return (
        <CustomView>
            <TopBar/>
            <Title title="Dictionary GO"/>
            <InputBox defaultText="Search for something.."/>
            <CustomButton text="SUBMIT"/>
        </CustomView>
    );
}



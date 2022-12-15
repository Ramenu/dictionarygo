import { CustomButton } from "./custombutton";
import { CustomView } from "./customview";
import { Title } from "./title";
import { TopBar } from "./topbar";



export const Homepage = ({navigation}) =>
{
    // subtitle whitespacing is for alignment in center
    return (
        <CustomView>
            <TopBar/>
            <Title title="Homepage" subTitle="    Navigate"/> 
            <CustomButton text="SEARCH" onPress={() => navigation.navigate("Search", {title: "Dictionary Go"})}/>
            <CustomButton text="ABOUT" onPress={() => navigation.navigate("About", {title: "About"})}/>
            <CustomButton text="SETTINGS" onPress={() => navigation.navigate("Settings", {title: "Settings"})}/>
        </CustomView>
    );
}
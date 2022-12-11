import { CustomButton } from "./custombutton";
import { CustomView } from "./customview";
import { Title } from "./title";
import { TopBar } from "./topbar";



export const Homepage = ({navigation}) =>
{
    return (
        <CustomView>
            <TopBar/>
            <Title title="Navigate"/>
            <CustomButton text="SEARCH" onPress={() => navigation.navigate("Search")}/>
            <CustomButton text="ABOUT" onPress={() => navigation.navigate("About")}/>
        </CustomView>
    );
}
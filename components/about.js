import { CustomView } from "./customview";
import { TopBar } from "./topbar";
import { Title } from "./title";


export const About = ({navigation}) =>
{
    return (
        <CustomView>
            <TopBar/>
            <Title title="About Dictionary GO"/>
        </CustomView>
    );
}
import { CustomView } from "./customview";
import { TopBar } from "./topbar";
import { Title } from "./title";


export const About = ({route, navigation}) =>
{
    return (
        <CustomView>
            <TopBar/>
            <Title title={route.params.title}/>
        </CustomView>
    );
}
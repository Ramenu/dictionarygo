import { CustomButton } from "./custombutton";
import { CustomView } from "./customview";
import { Title } from "./title";

export const Settings = ({route, navigation}) =>
{
    return (
        <CustomView>
            <Title title={route.params.title}/>
        </CustomView>
    );
}
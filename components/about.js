import { SafeAreaView, Text, StyleSheet } from "react-native";
import { CustomView } from "./customview";
import { CustomText } from "./customtext";
import { TopBar } from "./topbar";
import { Title } from "./title";

const styles = StyleSheet.create({
    blog: {
        fontSize: "20",
        borderRadius: 2,
        width: "100%",
        textAlign: "center",
        alignSelf: "center"
    }
});


export const About = ({ route, navigation }) => {
    return (

        <CustomView>
            <TopBar />
            <Title title={route.params.title} />
            <CustomText style={{margin: 10}}>
                Welcome to our dictionary app! We are proud to provide a comprehensive and reliable resource for anyone looking to expand their vocabulary and improve their language skills.
                Our app features a large database of words and definitions. This app has collaborations with the dictionary API. A robust database with almost any word you want to find the definition for.
            </CustomText>
            <CustomText style={{margin: 10}}>
                We hope that our app will be a valuable tool for students, writers, and language learners of all levels. Thank you for choosing us as your go-to source for all things language-related.
            </CustomText>
            <CustomText>
                This app was created by Abdur-Rahman Mansoor, Karl Andoh, Armaan Dosanjh, and Eamon Milne for CPAN213 Cross Platform Mobile App Dev. The class is taught by Harshdeep Singh. Thanks for reading!
            </CustomText>
        </CustomView>
    );
}
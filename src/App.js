import logo from "./logo.svg";
import "@aws-amplify/ui-react/styles.css";
import {Amplify} from "aws-amplify";
import {Authenticator} from "@aws-amplify/ui-react";
import {ThemeProvider} from "@aws-amplify/ui-react";
import {Button, Heading, Image, View, Card} from "@aws-amplify/ui-react";
import awsExports from "./aws-exports";

Amplify.configure(awsExports);


export default function App({signOut}) {
    return (
        <Authenticator>
            {/*<View className="App">*/}
            {/*    <Card>*/}
            {/*        <Image src={logo} className="App-logo" alt="logo"/>*/}
            {/*        <Heading level={1}>We now have Auth!</Heading>*/}
            {/*    </Card>*/}
            {/*    <Button onClick={signOut}>Sign Out</Button>*/}
            {/*</View>*/}
        </Authenticator>
    );
}



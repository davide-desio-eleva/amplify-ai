import {View} from "@aws-amplify/ui-react";

const Footer = () => {
    return (
        <View className="footer">
            &copy; All Rights Reserved.<br/>
            <div className="warning">Attenzione: i dati transitano e<br/> vengono salvati in N.Virginia, USA.</div>
            Made with ❤️ by <a href="https://eleva.it" target="_blank">Eleva</a>
        </View>
    );
};

export default Footer;
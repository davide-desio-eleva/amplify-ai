import {View} from "@aws-amplify/ui-react";

const Footer = () => {
    return (
        <View className="footer">
            &copy; All Rights Reserved.<br/>
            <div className="warning hint">Attenzione: i dati transitano e<br/> vengono salvati in N.Virginia, USA.</div>
            <a href="https://www.privacylab.it/informativa.php?10249341815">Privacy Policy | Terms of Service</a><br/>
            Made with ❤️ by <a href="https://eleva.it" target="_blank">Eleva</a>
        </View>
    );
};

export default Footer;
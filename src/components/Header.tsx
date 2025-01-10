import {View} from "@aws-amplify/ui-react";

const Header = () => {
    return (
        <View className="header hint">
            <a href="https://eleva.it" target="_blank">
                <img style={{background:'#d64942',height:"50px",padding:"5px",borderRadius:"50%"}}
                     alt="Amplify logo"
                     src="https://eleva.it/assets/imgs/eleva-logo-white.svg"
                />
            </a>
        </View>
    );
};

export default Header;
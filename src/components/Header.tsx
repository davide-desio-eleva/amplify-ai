import {View} from "@aws-amplify/ui-react";
import {signOut} from "@aws-amplify/auth";
import { getCurrentUser } from 'aws-amplify/auth';
import {useEffect, useState} from "react";

const Header = () => {

    const [isLogged, setLogged] = useState(false);
    const [loginId, setLoginId] = useState('');

    useEffect(() => {
        const fetchUserDetails = async () => {
            try {
                const { signInDetails } = await getCurrentUser();
                if(signInDetails && signInDetails.loginId){
                    setLoginId(signInDetails.loginId);
                }
                setLogged(true);
            } catch (error) {
                setLoginId('');
                setLogged(false);
            }
        };

        fetchUserDetails();
    }, []);

    const handleSignOut = async () => {
        await signOut()
    }

    return (
        <View className="header hint">
            <a href="https://eleva.it" target="_blank">
                <img style={{background:'#d64942',height:"50px",padding:"5px",borderRadius:"50%"}}
                     alt="Amplify logo"
                     src="https://eleva.it/assets/imgs/eleva-logo-white.svg"
                />
            </a>
            {isLogged &&
                <>
                    {loginId &&
                        <span id="user-name">
                            {loginId}
                        </span>
                    }
                    <button id="sign-out" type="button" onClick={handleSignOut}>
                        Sign out
                    </button>
                </>
            }
        </View>
    );
};

export default Header;
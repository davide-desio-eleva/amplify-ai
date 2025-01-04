import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";
import {Authenticator, useTheme, View} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { I18n } from 'aws-amplify/utils';
import { translations } from '@aws-amplify/ui-react';
I18n.putVocabularies(translations);
I18n.setLanguage('it');

Amplify.configure(outputs);

const components = {
    Header() {
        const {tokens} = useTheme();

        return (
            <View textAlign="center" padding={tokens.space.large}>
                <img style={{background:'#d64942',height:"100px"}}
                    alt="Amplify logo"
                    src="https://eleva.it/assets/imgs/eleva-logo-white.svg"
                />
            </View>
        );
    },

    Footer() {
        const {tokens} = useTheme();

        return (
            <View className="footer" textAlign="center" padding={tokens.space.large}>
                &copy; All Rights Reserved.
                Made with ❤️ by <a href="https://eleva.it" target="_blank">Eleva</a>
            </View>
        );
    },
}

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Authenticator components={components}>
            <App />
        </Authenticator>
    </React.StrictMode>
);

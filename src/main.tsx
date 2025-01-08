import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";
import {Authenticator} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { I18n } from 'aws-amplify/utils';
import { translations } from '@aws-amplify/ui-react';
import Header from "./components/Header";
import Footer from "./components/Footer";
I18n.putVocabularies(translations);
I18n.setLanguage('it');

Amplify.configure(outputs);

const components = {
    Header() {
        return (
            <Header/>
        );
    },

    Footer() {
        return (
            <Footer/>
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

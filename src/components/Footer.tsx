import { useState } from 'react';
import { View } from "@aws-amplify/ui-react";
import { deleteUser } from 'aws-amplify/auth';

const Footer = ({
                    isLogged
                }: {
    isLogged?: boolean;
}) => {
    const [showModal, setShowModal] = useState(false);

    async function handleDeleteUser() {
        try {
            await deleteUser();
            setShowModal(false);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <View className="footer">
            &copy; All Rights Reserved.<br />
            <div className="warning hint">Attenzione: i dati transitano e<br /> vengono salvati in N.Virginia, USA.</div>
            <a href="https://www.privacylab.it/informativa.php?10249341815">Privacy Policy | Terms of Service</a><br />
            Made with ❤️ by <a href="https://eleva.it" target="_blank" rel="noopener noreferrer">Eleva</a>
            {isLogged && (
                <>
                    <button id="delete-user" type="button" onClick={() => setShowModal(true)}>
                        Delete your account
                    </button>

                    {showModal && (
                        <div className="modal">
                            <div className="modal-content">
                                <p>Sei sicuro di voler cancellare il tuo account?</p>
                                <button onClick={handleDeleteUser}>Si, cancella il mio account</button>
                                <button onClick={() => setShowModal(false)}>No, mantengo il mio account</button>
                            </div>
                        </div>
                    )}
                </>
            )}
        </View>
    );
};

export default Footer;

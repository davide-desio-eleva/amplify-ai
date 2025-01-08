const Loader = ({ cringeLevel }: { cringeLevel: number }) => {
    let message = '';

    if (cringeLevel <= 25) {
        message = 'Stiamo generando idee raffinate e sobrie. 🍸';
    } else if (cringeLevel <= 50) {
        message = 'Attenzione: potrebbero arrivare propositi con un pizzico di ironia. 😉';
    } else if (cringeLevel <= 75) {
        message = 'Prepara i meme, questi buoni propositi sono in arrivo! 🐙';
    } else {
        message = 'Stiamo raggiungendo il livello SUPER CRINGE... tieniti forte! 🚀';
    }

    return (
        <div className="loader-view" style={{ textAlign: 'center', padding: '20px' }}>
            <div style={{ fontSize: '18px', marginBottom: '10px' }}>
                {message}
            </div>
            <div style={{ fontSize: '14px', color: '#888', marginBottom: '20px' }}>
                Stiamo generando i tuoi buoni propositi...
            </div>
            <div className="spinner" style={{ margin: 'auto', width: '50px', height: '50px' }}>
                <div
                    style={{
                        width: '100%',
                        height: '100%',
                        border: '4px solid #ccc',
                        borderTop: '4px solid #d64942',
                        borderRadius: '50%',
                        animation: 'spin 1s linear infinite',
                    }}
                ></div>
            </div>

            {/* CSS Animation */}
            <style>
                {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
            </style>
        </div>
    );
};

export default Loader;
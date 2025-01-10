import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import {useState} from "react";

const Post = ({
                  chatLog,
                  userName,
                  userTitle,
              }: {
    chatLog: string;
    userName: string;
    userTitle: string;
}) => {
    const [notification, setNotification] = useState<string | null>(null);
    const copyToClipboard = () => {
        const postContent = document.querySelector("#post-container .post-content");
        if (postContent) {
            const textToCopy = postContent.textContent || ""; // Get plain text content
            navigator.clipboard
                .writeText(textToCopy)
                .then(() => {
                    setNotification("Testo copiato, puoi incollarlo su LinkedIn");
                    setTimeout(() => setNotification(null), 3000); // Clear notification after 3 seconds
                })
                .catch((err) => {
                    console.error("Failed to copy text: ", err);
                });
        }
    };

    const prompt = "Una bella immagine per LinkedIn";

    return (
        <div id="post-container" style={{ position: "relative" }}>
            {notification && (
                <div
                    className="notification"
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        marginLeft: "-150px",
                        backgroundColor: "#d64942",
                        color: "#fff",
                        padding: "10px 15px",
                        borderRadius: "5px",
                        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
                        zIndex: 1000,
                        fontSize: "14px",
                    }}
                >
                    {notification}
                </div>
            )}
            <div className="post">
                {/* Copy button */}
                <button
                    className="button-53"
                    onClick={copyToClipboard}
                >
                    Copia per LinkedIn
                </button>
                <div className="post-user-info">
                    <div className="post-user-icon">
                        <img src={"https://image.pollinations.ai/prompt/" + prompt + "?width=50&height=50&seed=` + uuid + `&nologo=true"} alt="User icon" />
                    </div>
                    <div>
                        <div className="post-user-name">{userName}</div>
                        <div className="post-user-title">{userTitle}</div>
                        <div className="post-time">2h • 🌍</div>
                    </div>
                </div>
                <div className="post-content">
                    <Markdown rehypePlugins={[rehypeHighlight]}>{chatLog}</Markdown>
                </div>
                <div className="post-engagement">
                    <div>👍 256 • 💬 48 • 🔄 12</div>
                    <div>15 comments</div>
                </div>
            </div>
        </div>
    );
};

export default Post;

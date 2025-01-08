import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";

const Post = ({chatLog}:{chatLog:string}) => {
    return (
        <div id="post-container">
            <div className="post">
                <div className="post-user-info">
                    <img src="https://via.placeholder.com/50" alt="Profile"/>
                    <div>
                        <div className="post-user-name">You</div>
                        <div className="post-user-title">Your title</div>
                        <div className="post-time">2h • 🌍</div>
                    </div>
                </div>
                <div className="post-content">
                    <Markdown rehypePlugins={[rehypeHighlight]}>
                        {chatLog}
                    </Markdown>
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
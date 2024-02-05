import { useNavigate } from "react-router-dom";
import { Post } from "./Posts";

interface PostProps {
    post: Post
    index: number;
    id: string; // Assuming id is of type string, adjust if necessary
    title: string;
    desc: string;
    views: number;
    likes: number;
    time: string; // Assuming time is of type string, adjust if necessary
}

const PostCard = ({ post, index, id, title, desc, views, likes, time }: PostProps) => {

    const navigate = useNavigate();

    const addView = (post: Post) => {
        // const userId = sessionStorage.getItem("userId")
        const newPost = { views: post.views + 1 };

        fetch(`http://localhost:8080/view/${post.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newPost),
        })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                } else {
                    throw new Error("Network response was not ok");
                }
            })
            .then((data) => {
                console.log("Server response:", data);
            })
            .catch((error) => {
                console.error("Fetch error", error);
            });
    };

    return (
        <div className="md:w-30 bg-card p-4 rounded-lg">
            <div key={index} className="">
                <img className="mypost__item__image" src={`http://localhost:8080/images/${id}`} alt="Uploaded Image" />
                <p>Title: {title}</p>
                <p>Message: {`${desc}...`}</p>
                <p>Views: {views}</p>
                <p>Likes: {likes}</p>
                <p>Time: {time}</p>
            </div>

            <button
                onClick={() => {
                    addView(post);
                    navigate("/Readmore", {
                        state: {
                            id: post.id,
                            title: post.title,
                            description: post.description,
                            dateTime: post.dataTime,
                            likes: post.likes,
                        },
                    });
                }}
            >
                Read More
            </button>
            <div></div>
        </div>
    )
}

export default PostCard
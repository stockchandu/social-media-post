import { useSelector } from "react-redux";
import "./showfeed.css";

export const ShowFeed = () => {
    const { data: { loading, userPost } } = useSelector(store => store.userpost);
    return (
        <>

            {loading ? "Loading..." : userPost.map(({ postname, usergifurl }) => {
                return (
                    <>
                        <div className="showfeed__parent">
                            <div>{postname}</div>
                            <img src={usergifurl} alt={postname} />
                        </div>
                    </>
                )
            })}

        </>
    )
}
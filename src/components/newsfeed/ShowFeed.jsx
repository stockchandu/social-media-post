import { useSelector } from "react-redux";
import "./showfeed.css"
export const ShowFeed = () => {
    const { data: { error, loading, userPost } } = useSelector(store => store.userpost);

    return (
        <>

            {userPost.map(({ postname, usergifurl }) => {
                return (
                    <>
                        <div className="showfeed__parent">
                            <div>{postname}</div>
                            <img src={usergifurl} alt="" />
                        </div>
                    </>
                )
            })}

        </>
    )
}
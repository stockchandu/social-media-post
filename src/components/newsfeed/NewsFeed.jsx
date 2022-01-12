import "./newsfeed.css";
import { useState } from "react";
import { ShowFeed } from "./ShowFeed"
import { UserPostBox } from "./UserPostBox"
export const NewsFeed = () => {

    const [showPopup, setshowPopup] = useState(false);

    let showMind = "What's on your mind, Chandan ?";
    let userPhoto = "https://scontent.fbbi1-2.fna.fbcdn.net/v/t1.6435-9/151735755_2924668874479012_2601276756322750381_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=5fEOD8ELoRkAX9CmYBn&_nc_ht=scontent.fbbi1-2.fna&oh=00_AT--MYZpSLTz6I6arcicoBpY-FtGdK33-E_iKCdOGjiCLg&oe=6205B460";

    const showPopUserPost = () => {
        showPopup ? setshowPopup(false) : setshowPopup(true);
    }

    return (
        <>
            <div className="whats__mind-parent">
                <div className="profile__user">
                    <img src={userPhoto} alt="" />
                </div>
                <div className="user__mind">
                    <div
                        onClick={showPopUserPost}
                    >
                        {showMind}
                    </div>

                </div>

            </div>
            <div>
                {
                    showPopup ?  <UserPostBox handlepopup={showPopUserPost}/> : null
                }

            </div>

            <div>
                <ShowFeed />
            </div>

        </>
    )
}
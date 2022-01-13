import {  useState } from "react";
import { GifSearch } from "./GifSearch";
import { useDispatch, useSelector } from "react-redux";
import { postLoading, postSuccess } from "../../redux/userpost/action";
import { gifUrl } from "../../redux/gifstore/action";
import "./userpostbox.css";

export const UserPostBox = ({ handlepopup }) => {
    const userName = "Chandan";
    const [showGif, setGif] = useState(false);
    const [userInput,setUserInput] = useState("");
    const dispatch = useDispatch();
    const { data: { gifurl } } = useSelector(store => store.gif);

    //toggle gif search input
    const handleGifSearch = () => {
        showGif ? setGif(false) : setGif(true);
    }

    //it handle the user post
    const handleUserPost = () => {
        dispatch(postLoading(true));
        const payload={
            postname:userInput,
            usergifurl:gifurl
        }
        dispatch(postSuccess(payload));
        dispatch(gifUrl(""))
    }

    return (
        <>
            <div className="userpost__box-parent">

                <div className="createpost__close">
                    <div>Create Post</div>
                    <div onClick={handlepopup}>X</div>
                </div>
                <hr />

                <div className="createpost__input-box">
                    <input type="text" placeholder={`Whats on your mind, ${userName}`}  onChange={(event)=>{setUserInput(event.target.value)}} />
                </div>

                <div className="createpost__show-gif" style={gifurl === "" ? { display: "none" } : { display: "block" }}>
                    <img src={gifurl} alt={gifurl} />
                </div>

                <div className="createpost__add-gif">
                    <div>Tag friends</div>
                    <div>Check in</div>
                    <div onClick={handleGifSearch}>GIF</div>
                    <div>Tag Event</div>
                </div>

                <div>
                    {
                        showGif ? <GifSearch handlegif={handleGifSearch} /> : null
                    }

                </div>

                <div className="createpost__btn">
                    <button onClick={()=>{handleUserPost(); handlepopup()}}>Post</button>
                </div>

            </div>

        </>
    )
}
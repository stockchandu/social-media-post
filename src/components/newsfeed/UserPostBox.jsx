import "./userpostbox.css";
import { useRef, useEffect, useState } from "react";
import { GifSearch } from "./GifSearch";
import { useDispatch, useSelector } from "react-redux";
import { postLoading, postSuccess } from "../../redux/userpost/action";
import { gifUrl } from "../../redux/gifstore/action"

export const UserPostBox = ({ handlepopup }) => {
    const userName = "Chandan";
    const [showGif, setGif] = useState(false);
    const [userInput,setUserInput] = useState("")
    const postInput = useRef(null);
    const dispatch = useDispatch();
    const { data: { gifurl } } = useSelector(store => store.gif);

    // useEffect(() => {
    //     postInput.current.focus()
    // })

    const handleGifSearch = () => {
        showGif ? setGif(false) : setGif(true);
    }

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
                    <input type="text" placeholder={`Whats on your mind, ${userName}`} ref={postInput} onChange={(event)=>{setUserInput(event.target.value)}} />
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
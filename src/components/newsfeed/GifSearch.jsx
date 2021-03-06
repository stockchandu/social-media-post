import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { gifLoading, gifSuccess,gifUrl } from "../../redux/gifstore/action";
import { GifbaseUrl } from "./utils";
import "./gifsearch.css";

export const GifSearch = ({ handlegif }) => {

    const [gifsearch, setGifSearch] = useState("");
    const { data: { loading, gifStore} } = useSelector(store => store.gif);
    const dispatch = useDispatch();
    const gifInput = useRef(null);

    //when gifinput change , it runs
    useEffect(() => {
        delayAPIcall(handleGIFSearch, 2000)
    }, [gifsearch])

    //to delay the api call 
    let timer;
    const delayAPIcall = (fun, delay) => {
        if (timer) {
            clearTimeout(timer)
        }

        timer = setTimeout(() => {
            fun()
        }, delay)

    }

    //search the gif 
    const handleGIFSearch = async () => {
        if (!gifsearch) {
            dispatch(gifLoading(true))
            const result = await axios.get(`${GifbaseUrl}&q=funny&limit=20&offset=0&rating=g&lang=en`)
            const { data: { data } } = result;
            dispatch(gifSuccess(data));
        } else {
            dispatch(gifLoading(true))
            const result = await axios.get(`${GifbaseUrl}&q=${gifsearch}&limit=20&offset=0&rating=g&lang=en`)
            const { data: { data } } = result;
            dispatch(gifSuccess(data));
        }
    }

    //to show the preview of the gif
    const handleGifPreview = (url) => {
        dispatch(gifUrl(url))
    }

    return (
        <>

            <div className="gif__parent">
                <input type="text"
                    ref={gifInput}
                    placeholder="search gif"
                    onChange={(event) => { setGifSearch(event.target.value) }}
                />

                <div className="show__gif-parent">
                    {loading ? "loading..." : gifStore.map(({ images: { preview_gif: { url } } }) => {
                        return (
                            <>
                                <div className="gif__image">
                                <img src={url} alt={url}
                                    onClick={() => { handleGifPreview(url);handlegif() }} />
                                </div>

                            </>
                        )

                    })}
                </div>
            </div>



        </>
    )
}
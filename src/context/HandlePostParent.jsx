import { createContext, useState } from "react";

export const handlePost = createContext();

export const HandlePostParent = ({ children }) => {

    const [postData, setPostData] = useState({
        postName: "",
        postImage: ""
    })

    const handlePostGlobal = (postname, postimage) => {
        setPostData({
            ...postData,
            postName: postname,
            postImage: postimage
        })
    }


    return <handlePost.Provider value={{ handlePostGlobal, postData }}>
        {children}
    </handlePost.Provider>

}
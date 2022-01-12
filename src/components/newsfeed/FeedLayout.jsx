import "./feedlayout.css"
import { NewsFeed } from "./NewsFeed"
export const FeedLayout = () => {
    return (
        <>
            <div className="feedlayout__parent">
                <NewsFeed />
            </div>
        </>
    )
}
import { useContext } from "react";
import { AssetContext } from "../Grandpa/Grandpa";

const Friend = () => {
    const gift = useContext(AssetContext)
    return (
        <div>
            <h2>Friend</h2>
            <p>hass: {gift}</p>
        </div>
    );
};

export default Friend;
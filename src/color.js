import { useState } from "react";
import Box from "./box";

function Colors() {
    const [colors, setColors] = useState([{ color: "" }, { color: "" }, { color: "" }, { color: "" }, { color: "" }]);
    const colorArray = ["red", "blue", "green", "skyblue", "brown", "yellow"];
    function onClick(index) {
        const upDateArray = colors.map((ele, i) => {
            if (index === i) {
                return {
                    color: colorArray[Math.floor(Math.random() * colors.length)]
                }
            } else {
                return ele
            }
        })
        setColors(upDateArray);
    }

    return (
        colors.map((ele, i) => (
            <Box index={i} color={ele.color} onClick={onClick} />
        ))

    )

}
export default Colors;
import React from "react";
import { useInput } from "./hooks";
import { useColors } from "./ColorProvider";

export default function AddColorForm() {
    const [titlleProps, resetTitle] = useInput("");
    const [colorProps, resetColor] = useInput("#000000");
    const { addColor } = useColors();

    const submit = e => {
        e.preventDefault();
        addColor(titlleProps.value, colorProps.value);
        resetTitle();
        resetColor();
    };

    return (
        <form onSubmit={submit}>
            <input
                {...titlleProps}
                type="text"
                placeholder="color title..."
                required
            />
            <input
                {...colorProps}
                type="color"
                required
            />
            <button>ADD</button>
        </form>
    );
}
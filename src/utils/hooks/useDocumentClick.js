import { useEffect } from "react";

export function useDocumentClick() {
    

    useEffect(() => {
        const handleClickListener = (e) => {
            console.log("Clicked Document");
        }

        document.addEventListener("click", handleClickListener);

        return (() => {
            document.removeEventListener("click", handleClickListener);
        });
    });
}
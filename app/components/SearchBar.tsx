import React, { useState } from "react";
import "./SearchBar.css";

const SearchBar = () => {
    const [url, setUrl] = useState("");
    const [submittedUrl, setSubmittedUrl] = useState<string | null>(null);


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmittedUrl(url);
        console.log("URL à vérifier : ", url);
        // Faire l'appel API au backend
    }

    return (
        <div className="search-wrapper">
            <form className={"search-bar"} onSubmit={handleSubmit}>
                <input
                    className={"input"}
                    type="url"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="http://example.com"
                    required
                />
                <button className={"icon"} type="submit">
                    🔍
                </button>
            </form>
            {url && (
                <p>{submittedUrl}</p>
            )
            }
        </div>
    )
}

export default SearchBar;
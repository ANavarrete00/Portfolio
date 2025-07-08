import { useEffect, useState } from "react";

export default function TurnstileGate() {
    const [token, setToken] = useState("");
    const [verified, setVerified] = useState(false);

    useEffect(() => {
        // Load Turnstile script
        const script = document.createElement("script");
        script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js"
        script.async = true;
        document.body.appendChild(script);
    }, []);

    const handleToken = async (token) => {
        const response = await fetch("/.netlify/functions/verify-turnstile", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ token })
        });

        const result = await response.json();

        if (result.success) {
            document.cookie = "verified=true; path=/; maxAge=1440";
            setVerified(true);
        }
    };

    if(verified) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center">
            <div
                className="cf-turnstile"
                data-siteKey={process.env.SITE_KEY}
                data-callback={(token) => setToken(token)}/>
        </div>
    )
}
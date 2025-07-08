import { useEffect, useState } from "react";

export default function TurnstileGate() {
    const [verified, setVerified] = useState(false);
    const SITE_KEY = process.env.REACT_APP_TURNSTILE_SITE_KEY;

    useEffect(() => {
        // Load Turnstile script
        const script = document.createElement("script");
        script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js"
        script.async = true;
        document.body.appendChild(script);

        if(verified) {
            window.location.reload();
        }
        window.onTurnstileSuccess = async function (token){
            try {
                const response = await fetch("/.netlify/functions/verify-turnstile", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ token })
                });

                const json = await response.json()
                if(json.success){
                    document.cookie = "verified=true; path=/; max-age=3600";
                    setVerified(true);
                }
            }
            catch (e) {
                console.error("Verification failed: ", e);
            }
        };

        return () => {
            delete window.onTurnstileSuccess;
        };
    }, [verified]);

    if(verified) return null;

    return (
        <div className="flex items-center justify-center w-full h-full">
            <div
                className="cf-turnstile"
                data-sitekey={SITE_KEY}
                data-callback="onTurnstileSuccess"
                data-theme="dark"/>
        </div>
    )
}
import { useEffect, useState } from "react";

export default function TurnstileGate() {
    const [token, setToken] = useState("");
    const [status, setStatus] = useState("idle");

    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js"
        script.async = true;
        document.head.appendChild(script);
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("verifying");

        const response = await fetch("/.netlify/functions/verify-turnstile", {
            method: "POST",
            body: JSON.stringify({ token })
        });

        const result = await response.json();

        if (result.success) {
            document.cookie = "verified=true; path=/; maxAge=1440";
            window.location.href = "/";
        }
        else {
            setStatus("failed");
        }
    };

    return (
        <div>
            <h1>Human Verification</h1>
            <form onSubmit={handleSubmit}>
                <div
                    className="cf-turnstile"
                    data-siteKey={process.env.SITE_KEY}
                    data-callback={(token) => setToken(token)}
                ></div>
                <button type="submit" disabled={!token || status === "verifying"}>
                    {status === "verifying" ? "Verifying..." : "Continue"}
                </button>
                {status === "failed" && <p>Verification failed. Try again.</p>}
            </form>
        </div>
    )
}
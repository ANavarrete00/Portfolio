import { useEffect, useState } from "react";

export default function TurnstileGate() {
    const [verified, setVerified] = useState(false);
    const SECRET_KEY = process.env.SECRET_KEY;

    useEffect(() => {
        // Load Turnstile script
        const script = document.createElement("script");
        script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js"
        script.async = true;
        document.body.appendChild(script);
    }, []);

    async function handleToken(token){
        try {
            const response = await request.formData();
            const token = body.get("cf-turnstile-response");
            const ip = request.headers.get("CF-Connecting-IP");
            let formData = new FormData();
            formData.append("secret", SECRET_KEY);
            formData.append("response", token);
            formData.append("remoteip", ip);

            const url = "https://challenges.cloudflare.com/turnstile/v0/siteverify";
            const result = await fetch(url, {
                body: formData,
                method: "POST",
            })

            const outcome = await result.json();
            if (outcome.success) {
                document.cookie = "verified=true; path=/; maxAge=3600";
                setVerified(true);
                window.location.reload();
            }
        }
        catch (e) {
            console.error("Verification failed: ", e);
        }
    };

    if(verified) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center">
            <div
                className="cf-turnstile"
                data-siteKey={process.env.SITE_KEY}
                data-callback={handleToken}/>
        </div>
    )
}
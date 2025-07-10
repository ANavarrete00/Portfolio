import { useEffect, useState, useRef } from "react";
import { Turnstile } from '@marsidev/react-turnstile'

export default function TurnstileGate() {
    const [verified, setVerified] = useState(false);
    const SITE_KEY = process.env.REACT_APP_TURNSTILE_SITE_KEY;
    const ref = useRef();

    async function handle(event) {
        try {
            event.preventDefault();
            const formData = new FormData();
            const token = formData.get("cf-turnstile-response");

            const response = await fetch("/.netlify/functions/verify-turnstile", {
                method: "POST",
                body: JSON.stringify({token}),
                headers: {
                    "content-type": "application/json",
                }
            });

            const data = await response.json()
            if (data.success) {
                const widget = document.querySelector(".cf-turnstile");
                if (widget) {
                    widget.remove();
                }

                const script = document.querySelector('script[src*="turnstile"]');
                if (script) {
                    script.remove();
                }
                setVerified(true);
            }
            console.log("Manual cookie set: ", document.cookie);
        } catch (e) {
            console.error("Verification failed: ", e);
        }
    }

    function handleSuccess(event) {
        document.cookie = "verified=true; max-age=3600; path=/; SameSite=Lax";
        setVerified(true);
    }

    return (
        <div onLoad={handle}>
            <Turnstile siteKey={ SITE_KEY } onSuccess={handleSuccess} />
        </div>
    )
}
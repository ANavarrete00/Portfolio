import { Turnstile } from '@marsidev/react-turnstile'

export default function TurnstileGate() {
    const SITE_KEY = process.env.REACT_APP_TURNSTILE_SITE_KEY;

    async function handle(token) {
        try {
            const response = await fetch("/.netlify/functions/verify-turnstile", {
                method: "POST",
                body: JSON.stringify({ token }),
                headers: {
                    "content-type": "application/json",
                }
            });

            const data = await response.json()
            if (data.success) {
                // on success code here
                window.location.reload();
                console.log("Server verified token successfully.");
            }
        } catch (e) {
            console.error("Verification failed: ", e);
        }
    }

    return (
        <>
            <Turnstile siteKey={ SITE_KEY } onSuccess={ handle } />
        </>
    )
}
import { Turnstile } from '@marsidev/react-turnstile'

export default function TurnstileGate() {
    const SITE_KEY = process.env.REACT_APP_TURNSTILE_SITE_KEY;

    async function handle(token) {
        try {
            const response = await fetch("/functions/verify-turnstile", {
                method: "POST",
                credentials: "include",
                body: JSON.stringify({ token }),
                headers: {
                    "Content-Type": "application/json",
                }
            });

            const data = await response.json()
            if (data.success) {
                // on success code here
                console.log("Server verified token successfully.");
                window.location.reload();
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
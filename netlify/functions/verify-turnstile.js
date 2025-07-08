export async function handler(event) {
    const SECRET_KEY = process.env.TURNSTILE_SECRET_KEY;

    if (!SECRET_KEY) {
        return {
            statusCode: 500,
            body: JSON.stringify({
                success: false,
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    success: false,
                    message: "Missing Turnstile secret key.",
                })
            }),
        };
    }

    try {
        const { token } = JSON.parse(event.body || "{}");
        if(!token) {
            return {
                statusCode: 400,
                body: JSON.stringify({ success: false, message: "Token is invalid." }),
            };
        }

        const fromData = new URLSearchParams();
        fromData.set("secret", SECRET_KEY);
        fromData.set("response", token);
        fromData.set("remoteip", event.headers["x-nf-client-connection-ip" || ""]);

        const result = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
            method: "POST",
            body: fromData,
        });

        const outcome = await result.json();

        return {
            status: 200,
            body: JSON.stringify({success: outcome.success}),
        }
    }
    catch (e) {
        console.error("Verification failed: ", e);

        return {
            status: 500,
            body: JSON.stringify({ success: false, message: "Error verifying Turnstile token." }),
        };
    }
}
const fetch = require("node-fetch");

export async function handler(event) {

    const SECRET_KEY = process.env.REACT_APP_TURNSTILE_SECRET_KEY;

    try {
        const {token} = JSON.parse(event.body);
        const fromData = new URLSearchParams();
        fromData.set("secret", SECRET_KEY);
        fromData.set("response", token);
        fromData.set("remoteip", event.headers["x-nf-client-connection-ip"]);

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
const fetch = require("node-fetch");

export async function handler(event) {
    const { token } = JSON.parse(event.body);
    const SECRET_KEY = process.env.SECRET_KEY;

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
        body: JSON.stringify({ success: outcome.success }),
    }
}
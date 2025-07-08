const fetch = require("node-fetch");

exports.handler = async (event) => {
    const { token } = JSON.parse(event.body || "{}");
    const secretKey = process.env.SECRET_KEY;

    const result = await fetch(`https://challenges.cloudflare.com/turnstile/v0/siteverify`, {
        method: "POST",
        body: new URLSearchParams({
            secretKey: secretKey,
            response: token,
        }),
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
    })

    const data = await result.json();

    return {
        status: 200,
        body: JSON.stringify({ success: data.success }),
    }
}
const SECRET_KEY = process.env.TURNSTILE_SECRET_KEY;
const verifyEndpoint = "https://challenges.cloudflare.com/turnstile/v0/siteverify"

export async function handler(event) {
    const { token } = JSON.parse(event.body);

    if(!token) {
        return {
            statusCode: 400,
            body: JSON.stringify({ success: false, message: "Token is invalid." }),
        };
    }

    const result = await fetch(verifyEndpoint, {
        method: "POST",
        body: `secret=${encodeURIComponent(SECRET_KEY)}&response=${encodeURIComponent(token)}`,
        headers: {
            "content-type": "application/x-www-form-urlencoded"
        },
    });

    const data = await result.json();

    return {
        statusCode: data.success ? 200 : 400,
        headers: {
            "content-type": "application/json",
            "Set-Cookie": "verified=true; Path=/; HttpOnly; Max-Age=3600; SameSite=Lax; Secure",
        },
        body: JSON.stringify({ success: true }),
    }
}
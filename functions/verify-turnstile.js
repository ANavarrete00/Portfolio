const SECRET_KEY = process.env.TURNSTILE_SECRET_KEY;
const verifyEndpoint = "https://challenges.cloudflare.com/turnstile/v0/siteverify"

export async function onRequest({ request }) {
    const { token } = JSON.parse(request.body);

    if(!token) {
        return {
            statusCode: 400,
            body: JSON.stringify({success: false, message: "Token is invalid."}),
        }
    }

    const result = await fetch(verifyEndpoint, {
        method: "POST",
        body: `secret=${encodeURIComponent(SECRET_KEY)}&response=${encodeURIComponent(token)}`,
        headers: {
            "content-type": "application/x-www-form-urlencoded",
        },
    });

    const data = await result.json();

    if(data.success) {
        data.headers.append(
            "set-cookie",
            "verified=true; Path=/; Max-Age=3600; SameSite=Lax"
        );
    }

    return new Response({
        statusCode: data.success ? 200 : 400,
        headers: {
            "content-type": "application/json",
            "set-cookie": "verified=true; Path=/; Max-Age=3600; SameSite=Lax; Secure",
        },
        body: JSON.stringify({ success: true }),
    });
}
const SECRET_KEY = process.env.TURNSTILE_SECRET_KEY;
const verifyEndpoint = "https://challenges.cloudflare.com/turnstile/v0/siteverify"

export async function onRequest({ request }) {
    const { token } = JSON.parse(request.body);

    if(!token) {
        return new Response(
            JSON.stringify({ success: false }),
            { status: 400 }
        );
    }

    const result = await fetch(verifyEndpoint, {
        method: "POST",
        headers: {
            "content-type": "application/x-www-form-urlencoded",
        },
        body: `secret=${encodeURIComponent(SECRET_KEY)}&response=${encodeURIComponent(token)}`,
    });

    const headers = new Headers({
        "content-type": "application/json",
    });

    const data = await result.json();

    if(data.success) {
        headers.append(
            "Set-Cookie",
            "verified=true; Path=/; Max-Age=3600; SameSite=Lax"
        );
    }

    return new Response(
        JSON.stringify({ success: data.success }),
        { status: data.success ? 200 : 400, headers}
    );
}
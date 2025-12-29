export async function onRequest({ request }) {
    const SECRET_KEY = env.TURNSTILE_SECRET_KEY;
    const verifyEndpoint = "https://challenges.cloudflare.com/turnstile/v0/siteverify"
    const { token } = JSON.parse(request.body);

    if(!token) {
        return new Response(JSON.stringify({ success: false }),
            { statusCode: 400 }
        );
    }

    const result = await fetch(verifyEndpoint, {
        method: "POST",
        body: new URLSearchParams({
            secret: SECRET_KEY,
            response: token,
        }),
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
    });

    const data = await result.json();

    const headers = new Headers({
        "Content-Type": "application/json",
    });

    if(data.success) {
        headers.append(
            "Set-Cookie",
            "verified=true; Path=/; Max-Age=3600; SameSite=Lax"
        );
    }

    return new Response( JSON.stringify({ success: data.success }),
        { status: data.success ? 200 : 400, headers }
    );
}
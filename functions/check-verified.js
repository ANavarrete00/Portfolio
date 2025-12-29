export async function onRequest({ request }) {
    const cookie = request.headers.get("cookie");
    const verified = cookie.includes("verified=true");

    return new Response(verified, {
        statusCode: 200,
        body: JSON.stringify({ verified }),
    });
}
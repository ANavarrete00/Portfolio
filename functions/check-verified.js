export async function onRequest({ request }) {
    const cookie = request.headers.get("cookie");
    const verified = cookie.includes("verified=true");

    return new Response(JSON.stringify({ verified }), {
        statusCode: 200,
        body: JSON.stringify({ verified }),
    });
}
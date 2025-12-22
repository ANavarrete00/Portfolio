export async function handler({ request }) {
    const cookieHeader = request.headers.get("Cookie") || "";
    const verified = cookieHeader.includes("verified=true");

    return new Response(JSON.stringify({ verified }),
        {
            headers: { "Content-Type": "application/json" },
        }
    );
}
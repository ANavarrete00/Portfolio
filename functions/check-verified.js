export async function handler({ request }) {
    const cookie = request.headers.cookie || "";
    const verified = cookie.includes("verified=true");

    return {
        statusCode: 200,
        body: JSON.stringify({ verified }),
    }
}
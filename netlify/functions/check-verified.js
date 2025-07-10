export async function handleVerified(event) {
    const cookies = event.headers.cookie;
    const verified = cookies.includes("verified=true");

    return {
        statusCode: 200,
        body: JSON.stringify({ verified }),
    }
}
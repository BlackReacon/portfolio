export async function GET(request: Request) {
  return new Response(JSON.stringify({
    message: "pong" 
}), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

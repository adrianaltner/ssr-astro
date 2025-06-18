export async function GET() {
  const timestamp = new Date().toISOString();
  
  return Response.json({
    timestamp,
    message: "This data was generated on the server",
    randomNumber: Math.floor(Math.random() * 1000)
  });
}

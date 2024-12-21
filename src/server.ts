// server.ts
import express, { Request, Response } from "express";

const app = express();
const port = 3000;

// Define a simple route
app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript!");
});

// Start the server
if (require.main === module) {
  app.listen(port, () => {
    console.log(`sssServer is running at http://localhost:${port}`);
  });
}

export default app;

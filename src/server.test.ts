// server.test.ts
import request from "supertest";
import app from "./server";

describe("GET /", () => {
  it("should return Hello, TypeScript!", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
    expect(response.text).toBe("Hello, TypeScript!");
  });
});

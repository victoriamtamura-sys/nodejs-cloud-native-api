process.env.DATABASE_URL ??= "postgres://app:app@localhost:5432/cloudnative";
import { test } from "node:test";
import assert from "node:assert/strict";
const { app } = await import("./app.js");
test("GET /health returns ok without a database connection", async () => {
  const server = app.listen(0);
  try {
    const address = server.address();
    if (!address || typeof address === "string") throw new Error("No TCP address");
    const response = await fetch(`http://127.0.0.1:${address.port}/health`);
    assert.equal(response.status, 200);
    assert.deepEqual(await response.json(), { status: "ok" });
  } finally {
    await new Promise<void>((resolve, reject) => server.close(error => error ? reject(error) : resolve()));
  }
});
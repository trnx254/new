const request = require("supertest");
const POST = require("@/app/api/(auth)/users/login/route"); // Import your Next.js API route function

describe("POST /api/login", () => {
    // Test case for successful login
    it("should login with valid credentials", async () => {
        const res = await request(POST).post("/api/login").send({
            email: "valid_email@example.com",
            password: "valid_password",
        });

        expect(res.status).toBe(200);
        expect(res.body.message).toBe("Login successful");
        expect(res.headers["set-cookie"]).toBeDefined(); // Ensure token cookie is set
    });

    // Test case for user not found
    it("should return error for user not found", async () => {
        const res = await request(POST).post("/api/login").send({
            email: "nonexistent_email@example.com",
            password: "password",
        });

        expect(res.status).toBe(400);
        expect(res.body.error).toBe("User not found");
    });

    // Test case for invalid password
    it("should return error for invalid password", async () => {
        const res = await request(POST).post("/api/login").send({
            email: "valid_email@example.com",
            password: "invalid_password",
        });

        expect(res.status).toBe(400);
        expect(res.body.error).toBe("Invalid Password");
    });

    // You can add more test cases for other scenarios like internal server error, missing request body, etc.
});

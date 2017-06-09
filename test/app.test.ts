import * as supertest from "supertest";
import { app } from "../api/app";
// const request = supertest("https://www.baidu.com/");

describe("GET /", () => {
  it("should return 200 OK", (done) => {
    // request.get("/a")
    //   .expect(200)
    //   .end(done);
    supertest(app)
      .get('/user')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});
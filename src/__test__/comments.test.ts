import { viewComment } from "../controller/comments";
import { prismaMock } from "../../src/prisma/singleton";

describe("View Comment /", () => {
  describe("comment/:id", () => {
    it("should views details of single comment ", async () => {
      const comment = {
        id: 100,
        description: "Richi Rich",
        rate: 4,
        userId: 1,
        resourceId: 1,
        createdAt: new Date("2023-03-29"),
        updatedAt: new Date("2023-03-29")
      };

      prismaMock.comment.findUnique.mockResolvedValueOnce(comment);

      await expect(viewComment(comment.id)).resolves.toEqual(comment);
    });
  });
});

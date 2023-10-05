import prisma from "../prisma/client";

export async function viewComment(id: number) {
  const comment = await prisma.comment.findUnique({
    where: {
      id: Number(id)
    }
  });

  return comment;
}

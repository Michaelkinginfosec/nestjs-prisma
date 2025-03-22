-- CreateTable
CREATE TABLE "UserOnGroupPosts" (
    "userId" INTEGER NOT NULL,
    "groupPostsId" INTEGER NOT NULL,

    CONSTRAINT "UserOnGroupPosts_pkey" PRIMARY KEY ("userId","groupPostsId")
);

-- CreateTable
CREATE TABLE "GroupPost" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "discription" TEXT NOT NULL,

    CONSTRAINT "GroupPost_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "UserOnGroupPosts" ADD CONSTRAINT "UserOnGroupPosts_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserOnGroupPosts" ADD CONSTRAINT "UserOnGroupPosts_groupPostsId_fkey" FOREIGN KEY ("groupPostsId") REFERENCES "GroupPost"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

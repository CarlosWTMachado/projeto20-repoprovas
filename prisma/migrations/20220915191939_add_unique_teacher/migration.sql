/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `categories` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[teacherId,disciplineId]` on the table `teachersDisciplines` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "categories_name_key" ON "categories"("name");

-- CreateIndex
CREATE UNIQUE INDEX "teachersDisciplines_teacherId_disciplineId_key" ON "teachersDisciplines"("teacherId", "disciplineId");

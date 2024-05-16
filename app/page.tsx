"use client";

import { SButton } from "@/src/components/SButton.style";
import { StudentsList } from "@/src/components/students-list/StudentsList";
import { useStudentsStore } from "@/src/store/students.store";

export default function Home() {
  const { studentsList1, studentsList2, reset } = useStudentsStore();

  return (
    <main>
      <SButton onClick={reset}>Reset</SButton>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "flex-start",
          flexWrap: "wrap",
        }}
      >
        <StudentsList students={studentsList1} listNumber={1} />
        <StudentsList students={studentsList2} listNumber={2} />
      </div>
    </main>
  );
}

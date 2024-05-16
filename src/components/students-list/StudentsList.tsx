import React from "react";
import { useStudentsStore } from "@/src/store/students.store";
import { StudentCard } from "../student-card/StudentCard";
import { Student } from "@/src/helper/students";
import { SButton } from "../SButton.style";

interface StudentsListProps {
  students: Student[];
  listNumber: 1 | 2;
}

export const StudentsList: React.FC<StudentsListProps> = ({
  students,
  listNumber,
}) => {
  const { transferStudents, selectStudent, errorMessage, sourceList } =
    useStudentsStore();

  const handleTransferStudents = (fromList: string, toList: string) => {
    transferStudents(fromList, toList);
  };

  return (
    <div
      style={{
        width: 350,
        marginTop: 34,
        boxShadow: "0 0 15px #cccccc7b",
        borderRadius: 8,
        padding: 34,
      }}
    >
      {errorMessage && sourceList === `studentsList${listNumber}` && (
        <p style={{ color: "red", marginBlock: 34 }}>{errorMessage}</p>
      )}
      <SButton
        onClick={() =>
          handleTransferStudents(
            `studentsList${listNumber}`,
            `studentsList${3 - listNumber}`
          )
        }
      >
        {listNumber > 1 ? "← Send to first list" : "Send to second list →"}
      </SButton>
      {students.map((student) => (
        <StudentCard
          key={student.id}
          student={student}
          onSelect={() =>
            selectStudent(`studentsList${listNumber}`, student.id)
          }
        />
      ))}
    </div>
  );
};

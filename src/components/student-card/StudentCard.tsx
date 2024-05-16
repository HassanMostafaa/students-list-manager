// StudentCard.tsx
import React from "react";
import { Student } from "@/src/helper/students";
import { Card, Content, Checkbox, Text, Marks } from "./SStudentCard.style";

interface StudentCardProps {
  student: Student;
  onSelect: () => void;
}

export const StudentCard: React.FC<StudentCardProps> = ({
  student,
  onSelect,
}) => {
  return (
    <Card onClick={onSelect}>
      <Content>
        <Marks highlighted={student.marks > 90}>{student.marks}</Marks>
        <Text>{student.name}</Text>
        <Text>{student.studentClass}</Text>
      </Content>
      <Checkbox
        type="checkbox"
        checked={student.selected}
        onChange={(e) => e.stopPropagation()}
      />
    </Card>
  );
};

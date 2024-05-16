// StudentCard.tsx
import React from "react";
import { Student } from "@/src/helper/students";
import { Card, Content, Checkbox, Text } from "./SStudentCard.style";
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

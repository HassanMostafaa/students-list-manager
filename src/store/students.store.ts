import { create } from "zustand";

import {
  Student,
  studentsList1,
  studentsList2,
  TransferStudentsFn,
} from "../helper/students";

interface StudentsStore {
  studentsList1: Student[];
  studentsList2: Student[];
  selectStudent: (list: "studentsList1" | "studentsList2", id: number) => void;
  transferStudents: TransferStudentsFn;
  reset: () => void;
  errorMessage: string | null;
  sourceList: "studentsList1" | "studentsList2" | null;
}

export const useStudentsStore = create<StudentsStore>((set) => ({
  studentsList1: studentsList1.map((student) => ({ ...student })),
  studentsList2: studentsList2.map((student) => ({ ...student })),
  selectStudent: (list, id) =>
    set((state: StudentsStore) => ({
      ...state,
      // @ts-ignore
      [list]: state[list as keyof StudentsStore["studentsList1"]].map(
        (student: { id: number; selected: any }) =>
          student.id === id
            ? { ...student, selected: !student.selected }
            : student
      ),
    })),
  transferStudents: (fromList, toList) =>
    // @ts-ignore
    set((state: StudentsStore) => {
      // @ts-ignore
      const fromStudents = state[fromList];
      // @ts-ignore
      const toStudents = state[toList];
      const selectedStudents = fromStudents.filter(
        (student: { selected: any }) => student.selected
      );

      // Check for duplicates only in the target list
      const duplicates = selectedStudents.filter((student: { id: any }) =>
        toStudents.some((s: { id: any }) => s.id === student.id)
      );
      if (duplicates.length > 0) {
        return {
          ...state,
          errorMessage: `Duplicates found in the target list: ${duplicates
            .map((s: { name: any }) => s.name)
            .join(", ")}`,
          sourceList: fromList,
        };
      }

      // Filter out selected students from the source list
      const newFromStudents = fromStudents.filter(
        (student: { selected: any }) => !student.selected
      );

      // Add selected students to the target list
      const newToStudents = selectedStudents.map((student: { lists: any }) => ({
        ...student,
        lists: [...student.lists, Number(toList.charAt(toList.length - 1))],
      }));

      return {
        ...state,
        studentsList1:
          fromList === "studentsList1"
            ? newFromStudents
            : [...toStudents, ...newToStudents],
        studentsList2:
          fromList === "studentsList2"
            ? newFromStudents
            : toList === "studentsList2"
            ? [...toStudents, ...newToStudents]
            : toStudents,
        errorMessage: null,
        sourceList: null,
      };
    }),
  reset: () =>
    set({
      studentsList1: studentsList1.map((student) => ({ ...student })),
      studentsList2: studentsList2.map((student) => ({ ...student })),
      errorMessage: null,
      sourceList: null,
    }),
  errorMessage: null,
  sourceList: null,
}));

export interface Student {
  id: number;
  name: string;
  studentClass: string;
  marks: number;
  lists: number[];
  selected: boolean;
}

export type TransferStudentsFn = (fromList: string, toList: string) => void;

export type ListNumber = 1 | 2;
export const studentsList1: Student[] = [
  {
    id: 1,
    name: "John Doe",
    studentClass: "10A",
    marks: 85,
    lists: [1],
    selected: false,
  },
  {
    id: 2,
    name: "Jane Smith",
    studentClass: "9B",
    marks: 78,
    lists: [1],
    selected: false,
  },
  {
    id: 3,
    name: "Michael Johnson",
    studentClass: "11C",
    marks: 92,
    lists: [1, 2],
    selected: false,
  },
  {
    id: 4,
    name: "Emily Brown",
    studentClass: "8D",
    marks: 65,
    lists: [1, 2],
    selected: false,
  },
  {
    id: 5,
    name: "David Wilson",
    studentClass: "12E",
    marks: 80,
    lists: [1],
    selected: false,
  },
  {
    id: 6,
    name: "Sarah Lee",
    studentClass: "10A",
    marks: 70,
    lists: [1, 2],
    selected: false,
  },
  {
    id: 8,
    name: "Emma Garcia",
    studentClass: "11C",
    marks: 75,
    lists: [1, 2],
    selected: false,
  },
  {
    id: 10,
    name: "Olivia Hernandez",
    studentClass: "12E",
    marks: 83,
    lists: [1, 2],
    selected: false,
  },
];

export const studentsList2: Student[] = [
  {
    id: 6,
    name: "Sarah Lee",
    studentClass: "10A",
    marks: 70,
    lists: [1, 2],
    selected: false,
  },
  {
    id: 7,
    name: "Daniel Kim",
    studentClass: "9B",
    marks: 88,
    lists: [2],
    selected: false,
  },
  {
    id: 8,
    name: "Emma Garcia",
    studentClass: "11C",
    marks: 75,
    lists: [1, 2],
    selected: false,
  },
  {
    id: 9,
    name: "Matthew Martinez",
    studentClass: "8D",
    marks: 95,
    lists: [1],
    selected: false,
  },
  {
    id: 10,
    name: "Olivia Hernandez",
    studentClass: "12E",
    marks: 83,
    lists: [1, 2],
    selected: false,
  },
];

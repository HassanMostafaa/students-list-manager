export interface Student {
  id: number;
  name: string;
  studentClass: string;
  lists: number[];
  selected: boolean;
}

export type TransferStudentsFn = (fromList: string, toList: string) => void;

export type ListNumber = 1 | 2;

export const studentsList1 = [
  {
    id: 1,
    name: "John Doe",
    studentClass: "10A",
    lists: [1, 2],
    selected: false,
  },
  {
    id: 3,
    name: "Michael Johnson",
    studentClass: "11C",
    lists: [1],
    selected: false,
  },
  {
    id: 4,
    name: "Emily Brown",
    studentClass: "8D",
    lists: [1],
    selected: false,
  },
  {
    id: 5,
    name: "David Wilson",
    studentClass: "12E",
    lists: [1],
    selected: false,
  },
  {
    id: 6,
    name: "Sarah Lee",
    studentClass: "10A",
    lists: [2],
    selected: false,
  },
  {
    id: 7,
    name: "Daniel Kim",
    studentClass: "9B",
    lists: [2],
    selected: false,
  },
  {
    id: 9,
    name: "Matthew Martinez",
    studentClass: "8D",
    lists: [1, 2],
    selected: false,
  },
  {
    id: 10,
    name: "Olivia Hernandez",
    studentClass: "12E",
    lists: [1, 2],
    selected: false,
  },
];

export const studentsList2 = [
  {
    id: 1,
    name: "John Doe",
    studentClass: "10A",
    lists: [1, 2],
    selected: false,
  },
  {
    id: 2,
    name: "Jane Smith",
    studentClass: "9B",
    lists: [2],
    selected: false,
  },
  {
    id: 8,
    name: "Emma Garcia",
    studentClass: "11C",
    lists: [2],
    selected: false,
  },
  {
    id: 9,
    name: "Matthew Martinez",
    studentClass: "8D",
    lists: [1, 2],
    selected: false,
  },
  {
    id: 10,
    name: "Olivia Hernandez",
    studentClass: "12E",
    lists: [1, 2],
    selected: false,
  },
];

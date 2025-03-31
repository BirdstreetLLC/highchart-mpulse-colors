export const colors = [
  "#00CDD1",
  "#106EF6",
  "#294CF6",
  "#49CCCE",
  "#627BF4",
  "#6E9DDF",
  "#9773EE",
  "#A689ED",
  "#FB729F",
  "#FD0052",
  "#FDDD77",
  "#FFA133",
  "#FFB864",
  "#FFD449",
  "#001738",
  "#192E94",
  "#5B458F",
  "#007B7D",
  "#7F94FA",
  "#C1ABF5",
  "#66E1E3",
  "#FE6697",
  "#980031",
  "#FFE592",
  "#997F2C"
];

export const data: any = colors.map((color, index) => ({
  name: `Color ${color}`,
  data: Array.from({ length: 1 }, (_, i) => Math.random() * 10),
  type: "column"
}));
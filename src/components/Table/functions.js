import { ASC, DESC } from "./constants";

export const tableSort = (rows, sort) => {
  if (!sort) return rows;
  const [key, order] = sort;
  return rows.sort((a, b) => {
    const kA = a.sortVal || a[key];
    const kB = b.sortVal || b[key];
    if (order === DESC) {
      if (kA > kB) return -1;
      if (kB > kA) return 1;
    }
    if (order === ASC) {
      if (kA > kB) return 1;
      if (kB > kA) return -1;
    }
    return -1;
  });
};

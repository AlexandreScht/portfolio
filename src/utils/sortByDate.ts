type DateSortable = {
  startDate: string;
  endDate?: string;
};

export const sortByDate = <T extends DateSortable>(items: T[]): T[] => {
  return [...items].sort((a, b) => {
    if (a.endDate === 'Présent') return -1;
    if (b.endDate === 'Présent') return 1;

    if (a.endDate && b.endDate) {
      const endDateComparison = b.endDate.localeCompare(a.endDate);
      if (endDateComparison !== 0) return endDateComparison;
    }

    return b.startDate.localeCompare(a.startDate);
  });
};

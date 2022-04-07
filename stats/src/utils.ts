export const dateStringToDate = (date: string): Date => {
  const dateParts = date.split('/').map(
    (value: string): number => parseInt(value)
  );

  return new Date(dateParts[2], dateParts[1]-1, dateParts[0]);
};

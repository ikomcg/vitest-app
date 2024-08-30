export const isPassedGrade = (grade: number, isExempted?: boolean): boolean => {
   if (grade >= 75 || isExempted) return true;

   return false;
};

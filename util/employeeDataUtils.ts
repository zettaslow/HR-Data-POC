import { DepartmentData } from "../lib/departments";
import { Employee } from "../lib/employees";

// hook that creates a slice of department data to take some load off of the render runtime of DepartmentInformationTable.tsx
export function useDepartmentDataSlice(departments: DepartmentData[], currentEmployee: Employee, currentPage: number): DepartmentData[] {
  const pageIndexStart = (currentPage-1) * 8;
  const pageIndexEnd = currentPage * 8 > currentEmployee.reports.length ? currentEmployee.reports.length : currentPage * 8;

  return departments.slice(pageIndexStart, pageIndexEnd);
}
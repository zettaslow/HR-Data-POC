import { Employee } from "./employees";
import { DepartmentData } from "./departments"

export function EmployeeDataManager() {
  const getEmployeeCount = function(deptLeader: Employee, count: number): number {
    if (deptLeader.reports.length === 0) {
      return 1;
    }

    for (let i = 0; i < deptLeader.reports.length; i++) {
      count += getEmployeeCount(deptLeader.reports[i], 1);
    }

    return count;
  }

  // Returns a list of all sub-department data under a given targetEmployee as a DepartmentData[] object. 
  // Returns department data in order of number of employees in each department
  const getDepartmentData = function(targetEmployee: Employee): DepartmentData[] {
    let departments: DepartmentData[] = [];

    let departmentLeads: Employee[] = targetEmployee.reports;

    departments = departmentLeads.map((lead) => {
      return {
        departmentHead: lead,
        departmentHeadId: lead.employeeId,
        numEmployees: getEmployeeCount(lead, 1),
        name: lead.department
      }
    });

    departments = departments.sort((deptA, deptB) => {
      return deptB.numEmployees - deptA.numEmployees
    });

    return departments;
  }

  return {
    getDepartmentData: getDepartmentData
  }
}
import { Employee } from "./employees"

export interface DepartmentData {
	departmentHeadId: string;
	departmentHead: Employee;
	name: string;
	numEmployees: number;
}
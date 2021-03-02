import React from "react";
import DepartmentInformationTable from "../../components/hr-data/DepartmentInformationTable";
import { EmployeeDataManager } from '../../lib/EmployeeDataManager';
import employees, { Employee } from "../../lib/employees";
import { DepartmentData } from "../../lib/departments";

interface DepartmentInformationProps {

}

interface DepartmentInformationState {
  currentHeadEmployee: Employee;
}

const dataManager = EmployeeDataManager();

// This class based component acts as a wrapper to feed data into the DepartmentInformationTable component, mainly handling data manipulation
export default class DepartmentInformation extends React.Component<DepartmentInformationProps, DepartmentInformationState> {
  constructor(props: DepartmentInformationProps) {
    super(props);

    this.state = {
      currentHeadEmployee: employees[0],
    }
  }

  buildDepartmentData(employee: Employee): DepartmentData[] {
    return dataManager.getDepartmentData(employee);
  }

  handleCurrentHeadEmployeeChange = (employee: Employee) => {
    this.setState({
      currentHeadEmployee: employee
    });
  }

  render() {
    return (
      <DepartmentInformationTable
        departmentInfo={this.buildDepartmentData(this.state.currentHeadEmployee)}
        currentHeadEmployee={this.state.currentHeadEmployee}
        totalPages={Math.ceil(this.state.currentHeadEmployee.reports.length / 8.0)}
        handleCurrentEmployeeChange={this.handleCurrentHeadEmployeeChange}
      />
    )
  }
}
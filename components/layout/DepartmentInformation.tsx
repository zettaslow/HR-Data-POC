// Sets layout and manages data being passed down to child components

// Passes Department Data and Lead data down to Department.ts

import EmployeeDataManager from '../../lib/EmployeeDataManager';
import EmployeeData from "../hr-data/EmployeeData";
import { DepartmentData } from '../../lib/departments';
import Department from '../hr-data/Department';
import styles from "./DepartmentInformation.module.scss";
import employees from '../../lib/employees';
import { Employee } from '../../lib/employees';
import { useState } from 'react';
import Colors from "./DepartmentInformation.module.scss";

enum ColorEnums {
  grapeSoda = 0,
  blueRaspberry,
  mintToothpaste,
  kiwiGreen,
  limeGreen,
  jalapenoPopper,
  butternutSquash,
  pumpkinPie,
}

export default function DepartmentInformation() {

  const [currentHeadEmployee, setCurrentHeadEmployee] = useState(employees[0]);
  const dataManager = EmployeeDataManager();


  const onDepartmentClick = (departmentHead: Employee) => {
    if (departmentHead.reports.length !== 0) {
      setCurrentHeadEmployee(departmentHead);
    }
  }

  // proportional width to largest department group
  const calcWidth = (numEmployees: number, highestEmployeeCount: number) => {
    return ((numEmployees / highestEmployeeCount) * 100.0).toString() + "%";
  }

  const calcHeight= (index: number) => {
    return (15 + (10 * (index+1))).toString() + "%"
  }

  const buildEmployeeData = (departments: DepartmentData[]): typeof Department[] => {
    let results = [];

    let highestEmp = departments[0].numEmployees;
    results = departments.map((department, index) => {
  
      return (
        <Department 
          departmentHead={department.departmentHead}
          departmentName={department.name}
          children={[EmployeeData({
            name: department.departmentHead.firstName + " " + department.departmentHead.lastName,
            department: department.departmentHead.department,
            employees: department.numEmployees,
            employeeId: department.departmentHead.employeeId
          })]}
          color={Colors[ColorEnums[index % (Object.keys(ColorEnums).length / 2)]]}
          width={calcWidth(department.numEmployees, highestEmp)}
          height={calcHeight(index)}
          key={department.departmentHead.employeeId}
          handleClick={onDepartmentClick}
        />
      );
    });
  
    return results;
  }

  let deptData = dataManager.getDepartmentData(currentHeadEmployee);
  let employeeData = buildEmployeeData(deptData);
  return (
    <div>
      <h2>Departments</h2>
      <div className={styles.departments}>
        {employeeData}
      </div>
    </div>
  )
}
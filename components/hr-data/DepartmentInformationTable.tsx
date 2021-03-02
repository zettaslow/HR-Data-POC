// Sets layout and manages data being passed down to child components

// Passes Department Data and Lead data down to Department.ts
import { useState } from 'react';

import Colors from "./DepartmentInformationTable.module.scss";
import { calcWidth, calcHeight } from '../../util/tableUtils';
import { DepartmentData } from '../../lib/departments';
import { Department } from '../../components/hr-data/Department';
import styles from "./DepartmentInformationTable.module.scss";
import { Employee } from '../../lib/employees';
import { PageButton } from '../../components/navigation/PageButton';
import { useDepartmentDataSlice } from '../../util/employeeDataUtils';

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

export interface DepartmentInformationTableProps {
  departmentInfo: DepartmentData[];
  currentHeadEmployee: Employee;
  totalPages: number;
  handleCurrentEmployeeChange: (employee: Employee) => void;
}

const buildEmployeeData = (departments: DepartmentData[], deptClickHandler: (deptHead: Employee) => void) => {
  return departments.map((department, index) => {
    return (
      <Department 
        departmentInfo={department}
        color={Colors[ColorEnums[index % (Object.keys(ColorEnums).length / 2)]]}
        width={calcWidth(department.numEmployees, departments[0].numEmployees)}
        height={calcHeight(index)}
        key={department.departmentHead.employeeId}
        handleClick={deptClickHandler}
      />
    )
  })
}

export default function DepartmentInformationTable(props: DepartmentInformationTableProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const deptData = useDepartmentDataSlice(props.departmentInfo, props.currentHeadEmployee, currentPage);

  const onDepartmentClick = (departmentHead: Employee) => {
    if (departmentHead.reports.length !== 0) {
      setCurrentPage(1);
      props.handleCurrentEmployeeChange(departmentHead);
    }
  }

  const onPageClick = (direction: string) => {
    switch(direction) {
      case("LEFT"): {
        setCurrentPage(currentPage - 1);
        break;
      }
      case("RIGHT"): {
        setCurrentPage(currentPage + 1);
        break;
      }
      default:
        break;
    }
  }

  return (
    <div>
      <h2>Departments</h2>
      <div className={styles.departmentTable}>
        {currentPage > 1 ? 
          <PageButton
            direction={"LEFT"}
            handleClick={onPageClick}
          />
          :
          ""
        }
        <div className={styles.departments}>
          {buildEmployeeData(deptData, onDepartmentClick)}
        </div>
        {currentPage < props.totalPages ? 
          <PageButton
            direction={"RIGHT"}
            handleClick={onPageClick}
          />
          :
          ""
        }
      </div>
    </div>
  )
}
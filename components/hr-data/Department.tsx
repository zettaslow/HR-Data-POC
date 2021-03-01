// functional object wrapping around a generic child component list (typically a single EmployeeData component)
// Holds an Employee object and passes that prop down to the EmployeeData object 
import styles from "./Department.module.scss";
import {Employee} from "../../lib/employees";
import { DepartmentData } from '../../lib/departments';
import { EmployeeData } from "./EmployeeData";

export interface DepartmentProps {
  departmentInfo: DepartmentData;
  color: string;
  width: string;
  height: string;
  handleClick?: (departmentHead: Employee) => void;
}

export function Department(props: DepartmentProps) {
  return (
    <div 
      className={styles.department} 
      onClick={() => props.handleClick(props.departmentInfo.departmentHead)}
      style={
        {
          borderColor: props.color,
          width: props.width,
          maxHeight: props.height
        }}
    >
      <EmployeeData 
        name={props.departmentInfo.departmentHead.firstName + " " + props.departmentInfo.departmentHead.lastName}
        employeeCount={props.departmentInfo.numEmployees}
        employeeId={props.departmentInfo.departmentHead.employeeId}
        department={props.departmentInfo.name}
      />
    </div>
  )
}
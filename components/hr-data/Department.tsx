// functional object wrapping around a generic child component list (typically a single EmployeeData component)
// Holds an Employee object and passes that prop down to the EmployeeData object 
import styles from "./Department.module.scss";
import {Employee} from "../../lib/employees";

export interface DepartmentProps {
  departmentHead: Employee;
  departmentName: string;
  color: string;
  width: string;
  height: string;
  children: JSX.Element[];
  handleClick?: (deptHead: Employee) => void;
}

export default function Department(props: DepartmentProps) {
  return (
    <div 
      className={styles.department} 
      onClick={() => props.handleClick(props.departmentHead)}
      style={
        {
          borderColor: props.color,
          width: props.width,
          maxHeight: props.height
        }}
    >
      {props.children}
    </div>
  )
}
// plain functional object that just holds information about an employee
import Styles from "./EmployeeData.module.scss";

export interface EmployeeDataProps {
  name: string
  employeeCount: number; 
  department: string;
  employeeId: string;
}

export function EmployeeData(props: EmployeeDataProps) {
  return (
    <div key={props.employeeId} className={Styles.employeeInfoTooltip + " " + Styles.employeeData}>
      <div className={Styles.employeeInfo}>
        <h5>{props.department}</h5>
        <div>{props.name}</div>
        <div>{props.employeeCount + (props.employeeCount === 1 ? " employee": " employees")}</div>
      </div>
      <div className={Styles.employeeInfoTooltipText}>
        {props.department}<br/>
        {props.name}<br/>
        {props.employeeCount + " employees"}
      </div>
    </div>
  )
}
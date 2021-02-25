// This will get reworked to TS and then to hold the full page layout. 

import MainLayout from "../components/layout/MainLayout"
import DepartmentInformation from "../components/layout/DepartmentInformation"
export default function Home() {
  return (
    <MainLayout>
      <div>
        <DepartmentInformation/>
      </div>
    </MainLayout>
  )
}

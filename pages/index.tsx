import { MainLayout } from "../components/layout/MainLayout"
import DepartmentInformation from "../pages/hr-data/DepartmentInformation"
export default function Home() {
  return (
    <MainLayout>
      <div>
        <DepartmentInformation/>
      </div>
    </MainLayout>
  )
}

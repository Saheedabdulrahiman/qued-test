import Header from "../components/Dash-board/Layouts/Header";
import MainContent from "../components/Dash-board/Layouts/MainContent";
import SideBar from "../components/Dash-board/Layouts/SideBar";



export default function DashBoard() {
  return (
    <>
    <Header/>
    
     <main className=" flex flex-row">
     <SideBar/>
      <MainContent/>
    
      </main>
    
    </>
  )
}

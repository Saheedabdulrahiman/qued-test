import LoginBtn from "../../Login/LoginBtn";

export default function Header(){
    return(
        <>
        <header className=" flex md:justify-evenly mx-4 my-1 justify-cente sm:flex flex-row   ">
            <div className="flex my-auto ">
            <h2 className=" capitalize font-semibold">good morning, </h2>
            <p>klara</p>
            </div>
            <div className=" flex my-auto justify-evenly px-4 ">
            <input type="text" placeholder="search" className=" px-2 border-2 rounded-lg mr-4 my-auto   " />
            <LoginBtn name="+ post  need"/>
            {/* <span>bell icon</span>
            <span>cash icon</span> */}
            <span><img src="" alt="" /></span>
            </div>
        </header>
        </>
    )
}
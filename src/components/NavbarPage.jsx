import NavbarLogo from "../assets/paytmbank.svg";
export const NavbarPage = () => {
    return (
        <>
            <div className="flex bg-white justify-between p-4 shadow-md">
                <div className="p-4">
                    <img src= {NavbarLogo} alt="logo" className="w-40" />
                </div>
                <div className="flex ">
                    <div className="p-4">Personal Banking</div>
                    <div className="p-4" >Bussiness Banking</div>
                    <div className="p-4">Company</div>
                    <div className="p-4">Support</div>
                </div>
                <div className="p-2 ">
                    <button className="px-4 py-2 border-2 border-black text-black bg-white rounded-lg hover:bg-black hover:text-white transition duration-300 mr-4">Download App</button>
                    <button className="px-4 py-2 border-2 border-black text-black bg-white rounded-lg hover:bg-black hover:text-white transition duration-300">Login</button>
                </div>
            </div>
        </>
    );
};
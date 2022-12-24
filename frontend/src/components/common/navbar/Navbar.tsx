import NavItems from "./NavItems";

const Navbar = () => {
  return (
    <div className="items-center justify-between min-h-[68px] flex flex-row lg:px-12">
      <div className="flex items-center justify-center ">
        <img src="/assets/rent-a-car-logo.png" alt="logo" className="h-9 md:h-14" />
        <span className="text-lg md:text-2xl text-black ml-1 font-bold">Rent a Car</span>
      </div>
      <NavItems />
    </div>
  );
};

export default Navbar;

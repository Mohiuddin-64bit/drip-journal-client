const Header = () => {
  return (
    <div>
      <section>
        {/* <div className="navbar bg-base-100 container mx-auto flex flex-col lg:flex-row lg:justify-between mt-7">
          <div>
          <img src="" alt="" />
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1 text-2xl font-bold">
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
            </ul>
          </div>
        </div> */}
        <div className="mt-12 text-center">
        <img className="w-64 mx-auto" src={`https://i.ibb.co/wSbpCDJ/Logo.png`} alt="" />
        </div>
      </section>
    </div>
  );
};

export default Header;

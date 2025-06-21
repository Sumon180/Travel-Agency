const Footer = ({ footerAPI }: any) => {
  const { titles, links, sociallinks } = footerAPI;

  return (
    <>
      <footer className="bg-gradient-to-b from-emerald-400 to-green-300 pt-24 pb-7">
        <div className="grid items-center grid-cols-3 justify-items-center">
          {titles?.map((val: any, i: any) => (
            <div key={i} className="grid items-center justify-items-center">
              <h1 className="text-xl lg:text-base uppercase font-semibold">
                {val.title}
              </h1>
            </div>
          ))}
          {links?.map((list: any, i: any) => (
            <ul
              key={i}
              className="grid items-center justify-items-center gap-1"
            >
              {list?.map((val: any, i: any) => (
                <li key={i} className="font-mono text-sm sm:text-xs">
                  {val.link}
                </li>
              ))}
            </ul>
          ))}
        </div>
        <div className="w-7/12 lg:w-[95vw] m-auto mt-9">
          <div className="h-[0.1vh] bg-black/30 my-7 md:my-5"></div>
          <div className="flex items-center justify-between px-7 md:px-0 md:gap-5 md:flex-col-reverse">
            <p className="text-sm md:text-center">
              Copyright<sup className="text-base font-bold">&copy;</sup> All
              Reserved Rights 2022{" "}
            </p>
            <div className="flex items-center gap-3">
              {sociallinks?.map((val: any, i: any) => (
                <img
                  key={i}
                  src={val.icon}
                  alt="social/icons"
                  className="w-5 h-5"
                />
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

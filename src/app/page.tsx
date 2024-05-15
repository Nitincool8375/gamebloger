export default function Home() {
  return (
    <>
      <div>
        <div className="relative mb-16">
          <div className="border-zinc-500 w-full h-[332px] rounded-[32px]">
            <img src="/images/background.png" alt="" className="w-full h-full" />
          </div>
          <div className="absolute bottom-[-4rem] left-[4rem] border border-black w-[150px] h-[150px] rounded-full">
            <img src="/images/user.png" alt="" />
          </div>
        </div>
        <div className="pt-12 h-auto">
          <div className="flex items-baseline gap-3">
            <h1 className="font-bold text-[40px] leading-[51.04px]">Ananta Gupta</h1>
            <span className="font-bold text-[20px] leading-[25.52px] text-[#45f882]">(Dora)</span>
          </div>
          <span className="font-medium text-[16px] leading-[24px] text-[#45f882] text-shahow-[0 2.1px black]">Game Developer, explorer</span>
          <p className="pt-5 font-medium text-[16px] leading-[25px] text-[#ffffffb3]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit</p>
          <button className="my-8 bg-[#45f882] px-10 py-3 rounded-lg text-[#302c2c] text-[16px] leading-[21.78px] font-bold" style={{ boxShadow: '5.03px 5.03px 0 rgba(0, 0, 0, 1)' }}>CONTACT ME</button>
        </div>
      </div>
    </>
  );
}

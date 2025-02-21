const Hero = () => {
  return (
    <div
      className="h-screen w-full bg-black flex flex-col justify-center items-center"
      style={{ backgroundImage: `url("/assets/herobg.jpg")` }}
    >
      <h1 className="text-[100px] font-bold">Frontend II Shop</h1>
      <p className="text-white text-4xl">Buy the best products for your home</p>
    </div>
  );
};

export default Hero;

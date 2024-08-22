export const Hero = () => {
  return (
    <div className=" gap-x-48">
      <div>
        <div>
          <img className="  px-4 pt-16 pb-16 " src="/pic.png" />
        </div>
        <p className="font-bold text-6xl mt-0 ml-3">Hi, Im Tom 👋</p>
        <p className="font-normal  text-base ml-3">
          I specialize in full stack development, particularly with React.js and
          Node.js. My main goal is to create exceptional digital experiences
          that are fast, visually appealing, and accessible to everyone. With
          over 7 years of experience in web development, I continue to find joy
          in crafting innovative solutions and designs.
        </p>
        <div className="flex  flex-col mt-20">
          <div className="flex">
            <img src="/loc.png" />
            Ulaanbaatar, Mongolia
          </div>
          <div className="flex ">
            <img src="/icon.png" />
            Available for new projects
          </div>
        </div>
        <div className="flex  mt-20  ">
          <img className="p-2" src="/neg.png" />
          <img className="p-2" src="/hoyor.png" />
          <img className="p-2" src="/duruv.png" />
        </div>
      </div>
    </div>
  );
};

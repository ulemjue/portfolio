export const Experience = () => {
  return (
    <div className="">
      <div>
        <p className="bg-gray-200 w-28 rounded-xl h-7  mb-10 flex  justify-center text-center m-auto mt-10">
          Experience
        </p>
        <p className=" flex justify-center text-center font-normal text-lg  ">
          Here is a quick summary of my most recent experiences:
        </p>
      </div>
      <div>
        <div className="bg-white w-80 h-96  rounded-xl	m-auto">
          <img className="mb-5 ml-5 mt-5" src="/greentext.png" />
          <p className="mb-3  ml-5">Nov 2021 - Present</p>
          <p className="mb-3 ml-5  font-semibold	">Sr. Frontend Developer</p>
          <div className="ml-5">
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
            <li>Ut pretium arcu et massa semper, id fringilla leo semper.</li>
            <li>Sed quis justo ac magna.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          </div>
        </div>
      </div>
      <div className="bg-white w-80 h-96  rounded-xl	m-auto">
        <img className="mb-5 ml-5 mt-5" src="/greentext.png" />
        <p className="mb-3  ml-5">Jul 2017 - Oct 2021</p>
        <p className="font-semibold	 ml-5">Team Lead</p>
        <div className="ml-5">
          <li>Sed quis justo ac magna. </li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li>Sed quis justo ac magna. </li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
        </div>
      </div>
      <div className="bg-white w-80 h-96  rounded-xl	m-auto">
        <img className="mb-5 ml-5 mt-5" src="/greentext.png" />
        <p className="mb-3 ml-5 ">Dec 2015 - May 2017 </p>
        <p className="font-semibold ml-5 mb-3">Full Stack Developer</p>
        <div className="ml-5">
          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit.
          </li>
        </div>
      </div>
    </div>
  );
};

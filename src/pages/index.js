// // import { Header } from "../components/Header";
// // import { Hero } from "../components/Hero";
// // import { About } from "../components/About";
// // import { Skills } from "../components/Skills";
// // import { Experience } from "../components/Experience";
// // import { Work } from "../components/Work";
// import { State } from "../components/State";

// export default function Home() {
//   return (
//     <div className="max-w-[1440px] mx-auto bg-gray-100">
//       {/* <Header />
//       <Hero />
//       <About />
//       <Skills />
//       <Experience />
//       <Work /> */}
//       <State />
//     </div>
//   );
// }
// import { useState } from "react";
// const userList = [" tergeltengis", "Dashnyam", " dash"];
// export default function App() {
//   const [index, setIndex] = useState(0);
//   const [user, setUser] = useState(userList);
//   const handlePLUS = () => {
//     SETindex(index + 1);
//   };
//   const handleMinus = () => {
//     SETindex(index - 1);
//   };
//   return (
//     <div className="text-center , flex  flex-col gap-10">
//       <button onClick={handlePLUS}>nemh</button>
//       <p>{index}</p>
//       <button onClick={handleMinus}>hasah</button>

//       {user.map((element) => (
//         <p>{element}</p>
//       ))}
//       <button>darkMode</button>
//     </div>
//   );
// }

// import { preconnect } from "next/dist/server/app-render/entry-base";
import { useState } from "react";
const messages = ["learn react", "apply jobs", "invest your new income"];

const StepPage = () => {
  const [step, StepPage] = useState(0);
  const [isHideSteps, setIsHideSteps] = useState(true);
  const incrementStep = () => {
    if (step < 3) {
      setStep((prevStep) => prevStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (step > 0) {
      setStep((prevStep) => prevStep - 1);
    }
  };
  const toggleSteps = () => {
    setIsHideSteps(!isHideSteps);
  };
  return (
    <div className="w-[500px] mx-auto border border-solid">
      <div
        onClick={toggleSteps}
        className="flex items-center justify-center w-10 h-10 bg-blue-200 rounded-full"
      >
        X
      </div>
      {isHideSteps && (
        <div>
          <div className="flex justify-between mb-10">
            <div
              className="flex items-center justify-center w-10 h-10 text-white rounded-full"
              style={{
                backgroundColor: step >= 2 ? "purple" : "gray",
              }}
            >
              1
            </div>
            <div
              style={{ backgroundColor: step >= 2 ? "purple" : "gray" }}
              className="flex items-center justify-center w-10 h-10 text-white rounded-full"
            >
              2
            </div>
            <div
              style={{ backgroundColor: step >= 3 ? "purple" : "gray" }}
              className="flex items-center justify-center w-10 h-10 text-white rounded-full"
            >
              3
            </div>
          </div>
          <p className="mb-10 text-center"> {messages[step - 1]} </p>
          <div className="flex gap-2">
            <button onClick={handlePrevStep}>prev</button>
            <button onClick={incrementStep}>next</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default StepPage;

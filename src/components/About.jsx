export const About = () => {
  return (
    <div>
      <div className="flex  justify-center text-center ">
        <p className="bg-gray-200 w-28 rounded-xl h-7    mb-10">About me </p>
      </div>
      <div>
        <img className="h-80  w-72" src="/tomm.png" />
        <div>
          <div className="mb-10">
            <p className="font-semibold	 text-gray-900">
              Curious about me? Here you have it:
            </p>
          </div>
          <div className="mb-10 ml-3">
            Im a designer turned full stack developer, passionate about React.js
            and Node.js. I excel in blending technical and visual aspects to
            craft exceptional digital products, prioritizing user experience,
            precise design, and optimized code.
          </div>

          <div className="mb-10 ml-3">
            Since starting my web development journey in 2015, Ive embraced
            challenges and kept up with the latest tech trends. Now in my early
            thirties, seven years in, Im building cutting-edge web apps using
            Next.js, TypeScript, Nestjs, Tailwindcss, Supabase, and more.
          </div>

          <div className="mb-10 ml-3 ">
            {" "}
            With a progressive mindset, I enjoy the entire product development
            process, from ideation to execution. Off duty, youll find me on
            Twitter, tracking startup journeys, or unwinding. Follow me for tech
            insights and public project updates on Twitter or GitHub.
          </div>
          <div className="mb-10 ml-3">Finally, some quick bits about me.</div>
          <div className="mb-10  text-base  font-normal">
            <li>B.E. in Computer Engineering</li>
            <li>Full time freelancer</li>
            <li>Avid learner</li>
          </div>
          <div className="mb-10">
            One last thing, Im available for freelance work, so feel free to
            reach out and say hello! I promise I dont bite 😉
          </div>
        </div>
      </div>
    </div>
  );
};

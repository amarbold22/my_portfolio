import React from "react";

export default function Home() {
  return (
    <main className="bg-violet-200 h-full px-40 py-10">
      <div className="flex flex-col h-screen gap-8">
          <div className="flex flex-[0.5] gap-8">
            <div className="flex flex-1 bg-gray-900 rounded-xl p-12 gap-4 ">
              <div className="flex-1 h-full w-full justify-between items-center rounded-xl">
                <img src="https://images.unsplash.com/photo-1654110455429-cf322b40a906?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2960&q=80" alt="photo"/>
              </div>
              <div className="flex flex-1 flex-col justify-around my-12">
                <div className="flex-1">A WEB DEVELOPER</div>
                <div className="flex-1">AMARBOLD B.</div>
                <div className="flex-1">I am FrontEnd & BackEnd Master</div>
              </div>
            </div>
            <div className="flex flex-col gap-6 flex-1">
              <div className="flex flex-[0.2] bg-gray-900 align-center justify-between items-center bg-black rounded-xl text-white overflow-scroll px-8 py-4">
                I AM AVAILABLE FOR FREELANCE WORK
              </div>
             <div className="flex flex-[0.8] gap-4">
                <div className="flex flex-col flex-[0.5] items-center flex-1 bg-gray-900 rounded-xl px-4 py-2">
                  <div className="flex flex-1 bg-white w-[80px] rounded-full overflow-hidden mt-6">
                    <img src="data:image/png;base64,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"></img>
                  </div>
                  <div className="flex flex-1 w-full flex-col items-start justify-evenly py-6">
                    <div className="text-md text-gray-500">Hire Me</div>
                    <div className="text-2xl text-white text-bold">Fiverr</div>
                  </div>
                </div>
                <div className="flex flex-col flex-[0.5] justify-between items-center flex-1 bg-gray-900 rounded-xl p-8">
                  <div className="flex flex-1 overflow-hidden">
                    <img src="https://cdn2.vectorstock.com/i/1000x1000/33/11/laptop-rotated-position-mockup-and-website-design-vector-27203311.jpg" alt="" />
                  </div>
                  <div className="flex flex-1">Link</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-[0.3] flex-col rounded-xl bg-gray-900">
            <div className="mx-auto mt-6 text-3xl font-bold">
              <div>What I'm good at</div>
            </div>
            <div className="flex px-20 py-6 font-bold">
              <div className="flex flex-1 flex-wrap gap-4">
              <button className="rounded-md h-10 px-6 py-2 bg-blue-500">HTML</button>
              <button className="rounded-md h-10 px-6 py-2 bg-blue-500">CSS</button>
              <button className="rounded-md h-10 px-6 py-2 bg-blue-500">JavaScript</button>
              <button className="rounded-md h-10 px-6 py-2 bg-blue-500">React</button>
              <button className="rounded-md h-10 px-6 py-2 bg-blue-500">Next.js</button>
              <button className="rounded-md h-10 px-6 py-2 bg-blue-500">TailWind</button>
              </div>
              <div className="flex flex-1">

              </div>
            </div>
            
          </div>
          <div className="flex flex-col flex-[0.2] justify-center items-start gap-1 rounded-xl bg-orange-300 pl-20">
            <div className="text-3xl text-white font-bold">Let's</div>
            <div className="flex">
              <div className="text-3xl text-white font-bold">work</div>
              <div className="text-3xl text-blue-800 font-bold"> Together</div>
            </div>
          </div>
      </div>
    </main>
  );
}

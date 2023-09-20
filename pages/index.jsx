import Layout from "@/components/Layout";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  return (
    <main>
      <div className="flex w-screen bg-white justify-center">
        <div className="w-[1600px] items-center bg-blue-900 h-screen flex flex-col">
          <div className="flex bg-red-800 mt-20 w-full h-[400px]">
            <div className="bg-black w-[500px] rounded-[30px]">
              <div className="w-100px h-100px overflow:hidden">
                <img width="100px" height="200px" src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=4160&q=80" alt="photo" />
              </div>
              <div>
                <div>1</div>
                <div>
                  <div>2</div>
                  <div>3</div>
                </div>
              </div>
              </div>
          <div>
            <div>Download</div>
            <div>Services Offering</div>
            <div>Profiles</div>
          </div>
          <div>
            <div>Exp</div>
            <div>Let's work together</div>
          </div>
        </div>
      </div>
      </div>
    </main>
  );
}

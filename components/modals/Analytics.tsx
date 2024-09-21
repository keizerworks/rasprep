import { Button } from "@/components/ui/button";
import SyllabusTracker from "../analytics/SyllabusTracker";
import Marks from "../analytics/Marks";
import Streak from "../analytics/Streak";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function DialogDemo() {
  return (
    
      
      <div className=" bg-[#365496] ">
        <p className="text-white">Analytics</p>

        <div className="w-full flex flex-col gap-2 h-[60vh] overflow-y-scroll no-scrollbar">
          <SyllabusTracker/>
          <Marks/>
          <Streak/>
        </div>
      </div>
  );
}

import { Button } from "@/components/ui/button";
import SyllabusTracker from "@/components/analytics/SyllabusTracker";
import Marks from "@/components/analytics/Marks";
import Streak from "@/components/analytics/Streak";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function DialogDemo() {
  return (
    
      
      <div className="mx-auto w-[50%]">

        <div className="w-full flex flex-col gap-2 overflow-y-scroll h-[89vh] no-scrollbar">
          <SyllabusTracker/>
          <Marks/>
          <Streak/>
        </div>
      </div>
  );
}

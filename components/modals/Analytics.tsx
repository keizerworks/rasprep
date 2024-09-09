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
    
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="bg-transparent hover:bg-transparent outline-none py-0 pl-0  h-6 border-none w-full pr-20 "
        >
          Analytics
        </Button>
      </DialogTrigger>
      <DialogContent className="w-auto bg-blue-200 min-w-[30%] max-w-[40%]">
        <DialogTitle>Analytics</DialogTitle>

        <div className="w-full flex flex-col gap-2 h-[60vh] overflow-y-scroll no-scrollbar">
          <SyllabusTracker/>
          <Marks/>
          <Streak/>
        </div>
      </DialogContent>
    </Dialog>
  );
}

import { Button } from "@/components/ui/button"
import MyQueries from "../remedials/MyQueries"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import ComQueries from "../remedials/CommunityQueries"

export default function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="bg-transparent hover:bg-transparent outline-none py-0 pl-0  h-6 border-none w-full pr-20">Remedials</Button>
      </DialogTrigger>
      <DialogContent className="w-auto bg-blue-200 min-w-[40%] max-w-[40%]">
      <DialogTitle>Remedials</DialogTitle>
      <div className="w-full flex flex-col gap-2 h-[60vh] overflow-y-scroll no-scrollbar">
      <MyQueries/>
      <ComQueries/>
      </div>


       
      </DialogContent>
    </Dialog>
  )
}

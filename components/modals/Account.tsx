import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";

export default function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="bg-transparent hover:bg-transparent outline-none py-0 pl-0  h-6 border-none w-full pr-20"
        >
          Account
        </Button>
      </DialogTrigger>
      <DialogContent className="w-auto bg-blue-200">
      <DialogTitle>Account</DialogTitle>
        <div className="w-full flex flex-col">
          <div className="border flex justify-between gap-4  border-neutral-200 bg-white/80 rounded-md mt-3 p-3">
            <div className="h-full space-y-1">
            <p>
  <span className="font-semibold">Name:</span> Rahul Sain
</p>
<p>
  <span className="font-semibold">Phone no:</span> 979345034
</p>
<p>
  <span className="font-semibold">Email:</span> rahulsain@something.com
</p>
<p>
  <span className="font-semibold">Billing Address:</span> Chandigarh University
</p>

            </div>

            <Image
              height={1000}
              width={1000}
              alt="profile picture"
              src={"https://avatars.githubusercontent.com/u/129046143?v=4"}
              className="size-32 border border-slate-300 rounded-md"
            />
          </div>

          <div className="border justify-between gap-2  flex flex-col border-neutral-200 bg-white/80 rounded-md mt-3 p-3">
            <div className="font-bold underline underline-offset-2">Prelims</div>
            <div className="flex gap-4">
            <p><span className="font-semibold">Start date:</span> 12/03/2025</p>
            <p><span className="font-semibold">End date:</span> 12/03/2025</p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

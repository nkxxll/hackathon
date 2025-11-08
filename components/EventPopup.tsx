import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export interface EventProps {
  open: boolean;
  imageSource: string;
  navigation: string;
  label: string;
  onClose: () => void;
}

export function Event({
  open,
  imageSource,
  onClose,
  navigation,
  label,
}: EventProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Event Details</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col space-y-4">
          <img
            src={imageSource}
            alt="Event Image"
            className="w-full h-48 object-cover rounded-lg"
          />
          <div className="space-y-2">
            <h2 className="text-xl font-semibold">{label}</h2>
            <p className="text-sm text-muted-foreground">
              Date: Placeholder Date
            </p>
            <p className="text-sm text-muted-foreground">
              Time: Placeholder Time
            </p>
            <p className="text-sm text-muted-foreground">
              Location: Placeholder Location
            </p>
            <p className="text-sm text-muted-foreground">
              Description: This is a placeholder description for the event. More
              details will be added here.
            </p>
          </div>
          <Link href={navigation}>
            <Button>
              Navigation <ArrowRight />
            </Button>
          </Link>
        </div>
      </DialogContent>
    </Dialog>
  );
}

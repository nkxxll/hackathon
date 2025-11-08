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
              Date: 09 November 2025
            </p>
            <p className="text-sm text-muted-foreground">
              Time: 10:00 am - about 2:00 pm
            </p>
            <p className="text-sm text-muted-foreground">
              Location: Barbarossa Bäckerei, Rheinallee 1, 67061 Ludwigshafen am
              Rhein
            </p>
            <p className="text-sm text-muted-foreground">
              Description: Thanksgiving brunch with a selection of various
              delicacies from our bakery
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

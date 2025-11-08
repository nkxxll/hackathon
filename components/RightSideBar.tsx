import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { pins } from "@/data/pins";

const chatMock = [
  { id: 1, name: "Alice", lastMessage: "Hey, are you going to the event?" },
  { id: 2, name: "Bob", lastMessage: "See you at the park!" },
  { id: 3, name: "Charlie", lastMessage: "Thanks for the info!" },
];

const groupMock = [
  { id: 1, name: "Hackaton Team", members: 8 },
  { id: 2, name: "Local Explorers", members: 15 },
  { id: 3, name: "Tech Enthusiasts", members: 22 },
];

const friendsMock = [
  { id: 1, name: "Alice", status: "Online" },
  { id: 2, name: "Bob", status: "Offline" },
  { id: 3, name: "Charlie", status: "Online" },
];

const favoritesMock = pins.slice(0, 5).map((pin) => ({
  id: pin.id,
  name: pin.label || pin.id,
  type: "Place",
}));

export default function RightSideBar({
  category,
  onClose,
}: {
  category: string | null;
  onClose: () => void;
}) {
  let data: any[] = [];
  let title = "";

  switch (category) {
    case "chats":
      data = chatMock;
      title = "Chats";
      break;
    case "groups":
      data = groupMock;
      title = "Groups";
      break;
    case "friends":
      data = friendsMock;
      title = "Friends";
      break;
    case "favorites":
      data = favoritesMock;
      title = "Favorites";
      break;
    default:
      data = [];
      title = "";
  }

  return (
    <Sheet open={!!category} onOpenChange={(open) => !open && onClose()}>
      <SheetContent side="right" className="w-[80vw] md:w-128 lg:w-128">
        <SheetHeader>
          <SheetTitle>{title}</SheetTitle>
        </SheetHeader>
        <ul className="space-y-2">
          {data.map((item) => (
            <li key={item.id} className="p-2 border rounded">
              <div className="font-medium">{item.name}</div>
              {item.lastMessage && (
                <div className="text-sm text-muted-foreground">
                  {item.lastMessage}
                </div>
              )}
              {item.members && (
                <div className="text-sm text-muted-foreground">
                  {item.members} members
                </div>
              )}
              {item.status && (
                <div className="text-sm text-muted-foreground">
                  {item.status}
                </div>
              )}
              {item.type && (
                <div className="text-sm text-muted-foreground">{item.type}</div>
              )}
            </li>
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  );
}

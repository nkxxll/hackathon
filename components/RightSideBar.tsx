import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

const chatMock = [
  { id: 1, name: "Chat 1", lastMessage: "Hello there!" },
  { id: 2, name: "Chat 2", lastMessage: "How are you?" },
];

const groupMock = [
  { id: 1, name: "Group 1", members: 5 },
  { id: 2, name: "Group 2", members: 10 },
];

const friendsMock = [
  { id: 1, name: "Friend 1", status: "Online" },
  { id: 2, name: "Friend 2", status: "Offline" },
];

const favoritesMock = [
  { id: 1, name: "Favorite 1", type: "Place" },
  { id: 2, name: "Favorite 2", type: "Event" },
];

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
      <SheetContent side="right" className="w-128">
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

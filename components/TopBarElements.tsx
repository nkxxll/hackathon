import { Button } from "@/components/ui/button";
import { Heart, Users, UsersRound, MessageCircle, Group } from "lucide-react";

export function Favorites({ onClick }: { onClick: () => void }) {
  return (
    <Button className="p-4" variant="secondary" onClick={onClick}>
      Favorites
      <Heart className="h-4 w-4" />
    </Button>
  );
}

export function Friends({ onClick }: { onClick: () => void }) {
  return (
    <Button className="p-4" variant="secondary" onClick={onClick}>
      Friends
      <Users className="h-4 w-4" />
    </Button>
  );
}

export function Groups({ onClick }: { onClick: () => void }) {
  return (
    <Button variant="secondary" onClick={onClick}>
      Group
      <Group className="h-4 w-4" />
    </Button>
  );
}

export function Chats({ onClick }: { onClick: () => void }) {
  return (
    <Button className="p-4" variant="secondary" onClick={onClick}>
      Chats <MessageCircle className="h-4 w-4" />
    </Button>
  );
}

export default function TopBar({
  onCategorySelect,
}: {
  onCategorySelect: (category: string) => void;
}) {
  return (
    <div className="fixed top-1 left-15 p-4 flex gap-2 z-20 max-w-[80vw] overflow-auto">
      <Favorites onClick={() => onCategorySelect("favorites")} />
      <Groups onClick={() => onCategorySelect("groups")} />
      <Friends onClick={() => onCategorySelect("friends")} />
      <Chats onClick={() => onCategorySelect("chats")} />
    </div>
  );
}

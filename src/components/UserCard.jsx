// src/components/UserCard.jsx
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";

const UserCard = ({ user, onRequestSwap }) => {
  return (
    <Card className="rounded-2xl shadow hover:shadow-md">
      <CardHeader>
        <div className="flex items-center gap-4">
          <img
            src={user.profilePhoto || "https://api.dicebear.com/6.x/initials/svg?seed=" + user.name}
            className="w-16 h-16 rounded-full object-cover"
          />
          <div>
            <CardTitle>{user.name}</CardTitle>
            <p className="text-sm text-muted-foreground">{user.location}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="mb-2">
          <p className="text-sm font-semibold">Offers:</p>
          <div className="flex gap-2 flex-wrap">
            {user.skillsOffered.map((skill) => (
              <span key={skill} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div className="mb-2">
          <p className="text-sm font-semibold">Wants:</p>
          <div className="flex gap-2 flex-wrap">
            {user.skillsWanted.map((skill) => (
              <span key={skill} className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                {skill}
              </span>
            ))}
          </div>
        </div>
        <p className="text-sm text-muted-foreground mb-2">Availability: {user.availability}</p>
        <Button className="w-full mt-2" onClick={() => onRequestSwap(user)}>Request Swap</Button>
      </CardContent>
    </Card>
  );
};

export default UserCard;

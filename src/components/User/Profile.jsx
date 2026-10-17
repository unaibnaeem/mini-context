import { useUser } from "../../context/UserContext";

function Profile() {
  const { user } = useUser();

  if (!user) return <div className="p-4">Please Log In</div>;

  return <div>Welcome {user.username}</div>;
}

export default Profile;

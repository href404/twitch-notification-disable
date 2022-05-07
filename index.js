import { ClientCredentialsAuthProvider } from "@twurple/auth";
import { ApiClient } from "@twurple/api";
import dotenv from "dotenv";

dotenv.config();

const authProvider = new ClientCredentialsAuthProvider(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET
);

const apiClient = new ApiClient({ authProvider });

async function main() {
  const user = await apiClient.users.getUserByName("href404");
  const follows = await user.getFollows();
  console.log("Follows counter :", follows.total);

  // Waiting room for possibility to MR and/or improvments from Twitch ✨
  // follows.data.forEach((follow) => follow.setLiveNotification(false));
}

main();

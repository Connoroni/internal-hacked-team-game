import { gameType } from "@/types/gameType";
import { usersType } from "@/types/usersType";

export default async function ScoresForm() {
  async function getGames() {
    const response = await fetch("http://localhost:3000/api/games");
    const games = await response.json();
    return games;
  }

  async function getUsers() {
    const response = await fetch("http://localhost:3000/api/staff");
    const users = await response.json();
    return users;
  }

  const users = await getUsers();
  const games = await getGames();

  //   function handleSubmit() {
  //     "use server";

  //   }
  return (
    <div>
      <form>
        <fieldset>
          <legend>Score sheet</legend>
          <select name="" id="">
            <option value="" hidden>
              What game did you play?
            </option>
            {games.map((game: gameType) => (
              <option key={game.id} value={game.game_name}>
                {game.game_name}
              </option>
            ))}
          </select>

          <select name="" id="">
            <option value="" hidden>
              What is your name?
            </option>
            {users.map((user: usersType) => (
              <option key={user.id} value={user.user_name}>
                {user.user_name}
              </option>
            ))}
          </select>
        </fieldset>
        <button type="submit">Submit score</button>
      </form>
    </div>
  );
}

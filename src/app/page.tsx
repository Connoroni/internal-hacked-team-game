import Leaderboard from "@/components/Leaderboard";

export default function HomePage() {
  return (
    <>
      <h1>Home Page</h1>
      <Leaderboard
        title="Leaderboard"
        results={[
          ["1", "Bertie"],
          ["2", "Manny"],
          [3, "Connor"],
          [4, "Akshat"],
          [5, "Jaz"],
        ]}
        displayPodium
      />
    </>
  );
}

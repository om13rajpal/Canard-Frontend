import React, { useEffect, useState } from "react";
import axios from "axios";

const LeaderBoard = () => {
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getTeam();
  }, []);

  async function getTeam() {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(`https://api.mlsc.tech/team/leaderboard`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = res.data;
      console.log("API Response:", data);

      if (data?.data?.teamsData) {
        setLeaderboardData(data.data.teamsData);
      } else if (Array.isArray(data)) {
        setLeaderboardData(data);
      } else {
        console.error("Unexpected API response format:", data);
        setError("Invalid response format.");
      }
    } catch (error) {
      console.error("Error fetching leaderboard:", error);
      setError("Failed to load leaderboard.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-black text-white relative">
      {/* Full-screen background video */}
      <video
        src="/back.mp4"
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Scrollable leaderboard container */}
      <div className="relative w-full h-full bg-opacity-80 flex flex-col items-center justify-center p-4 translate-y-[8vh]">
        <h1 className="text-4xl font-bold mb-4 text-center font-alien opacity-75">LEADERBOARD</h1>

        {loading ? (
          <p className="text-center text-lg">Loading...</p>
        ) : error ? (
          <p className="text-center text-red-500 text-lg">{error}</p>
        ) : leaderboardData.length === 0 ? (
          <p className="text-center text-lg">No teams available.</p>
        ) : (
          <div className="w-full h-[80vh] overflow-auto">
            <table className="w-full text-left border-collapse border border-gray-400 bg-zinc-900 opacity-80">
              <thead className="sticky top-0 bg-gray-800 text-white">
                <tr className="border border-gray-400">
                  <th className="p-4 border border-gray-400 text-lg font-team">#</th>
                  <th className="p-4 border border-gray-400 text-lg font-team">TEAM NAME</th>
                  <th className="p-4 border border-gray-400 text-lg font-team">SCORE</th>
                </tr>
              </thead>
              <tbody>
                {leaderboardData.map((team, index) => (
                  <tr key={index} className="border border-gray-400 hover:bg-gray-700 transition">
                    <td className="p-4 border border-gray-400 text-center font-alien uppercase">{index + 1}</td>
                    <td className="p-4 border border-gray-400 font-alien uppercase">{team.name}</td>
                    <td className="p-4 border border-gray-400 text-center font-alien uppercase">{team.score}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default LeaderBoard;

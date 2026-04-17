import React, { useContext, useMemo } from "react";
import { FriendContext } from "../../Context/FriendProvider";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";

const COLORS = ["#1a4d3a", "#8b5cf6", "#34a853"];

const Stats = () => {
  const { storedFriends } = useContext(FriendContext);

  const chartData = useMemo(() => {
    const count = {
      Text: 0,
      Call: 0,
      Video: 0,
    };

    storedFriends.forEach((friend) => {
      if (count[friend.type] !== undefined) {
        count[friend.type] += 1;
      }
    });

    return [
      { name: "Text", value: count.Text, color: COLORS[0] },
      { name: "Call", value: count.Call, color: COLORS[1] },
      { name: "Video", value: count.Video, color: COLORS[2] },
    ];
  }, [storedFriends]);

  const totalCount = chartData.reduce((sum, item) => sum + item.value, 0);

  return (
    <>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <div className="flex-1 w-full p-4 md:p-8 pb-6 max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Your Activity Stats</h1>

          {totalCount === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-500 text-xl">No activities yet</p>
            </div>
          ) : (
            <>
              <div className="bg-base-100 rounded-2xl p-6 shadow-sm">
                <ResponsiveContainer width="100%" height={420}>
                  <PieChart>
                    <Pie
                      data={chartData}
                      cx="50%"
                      cy="50%"
                      innerRadius={90}
                      outerRadius={160}
                      dataKey="value"
                      nameKey="name"
                      labelLine={false}
                    >
                      {chartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend
                      verticalAlign="bottom"
                      height={40}
                      iconType="circle"
                      iconSize={10}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              <div className="grid grid-cols-3 gap-4 mt-8 text-center">
                {chartData.map((item, index) => (
                  <div key={index} className="bg-base-100 p-4 rounded-xl">
                    <div
                      className="text-3xl font-bold"
                      style={{ color: item.color }}
                    >
                      {item.value}
                    </div>
                    <div className="text-sm text-gray-500">{item.name}</div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Stats;

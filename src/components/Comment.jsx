
import { UserRound } from "lucide-react";

const Comments = ( {data} ) => {
    const {id,channelName,comment} = data;

  return (
    <div className="flex gap-4 text-white items-start my-6 bg-zinc-900 p-4 rounded-lg">

      {/* User Avatar */}
      <div className="w-10 h-10 shrink-0 rounded-full bg-zinc-700 flex items-center justify-center">
        <UserRound size={22} color="#d4d4d8" />
      </div>

      {/* Comment Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <h3 className="text-sm font-semibold">
            {channelName}
          </h3>

          <span className="text-xs text-gray-400">
            2 days ago
          </span>
        </div>

        <p className="text-sm leading-6 text-zinc-200">
          {comment}
        </p>

        <div className="flex gap-5 mt-3 text-sm text-zinc-400">
          <button className="hover:text-white">👍 24</button>
          <button className="hover:text-white">👎</button>
          <button className="font-semibold hover:text-white">Reply</button>
        </div>
      </div>

    </div>
  );
};

export default Comments;

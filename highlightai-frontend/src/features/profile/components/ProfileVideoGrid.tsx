import { Link } from "react-router-dom";
import type { ProfileVideo } from "../hooks/useProfile";

export default function ProfileVideoGrid({
  videos,
}: {
  videos: ProfileVideo[];
}) {
  if (!videos.length) {
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-4">🎥</div>
        <p className="text-slate-400 text-sm">No videos yet</p>
        <p className="text-slate-500 text-xs mt-2">
          Upload your first highlight to get started
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-3 gap-2">
      {videos.map((video) => (
        <Link
          key={video.videoId}
          to={`/video/${video.videoId}`}
          className="group relative aspect-square overflow-hidden rounded-lg bg-slate-900"
        >
          <video
            src={video.filename}
            muted
            className="h-full w-full object-cover transition group-hover:scale-105"
          />
          
          {/* Hover overlay with stats */}
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <div className="text-white text-xs space-y-1">
              <div className="flex items-center gap-1">
                <span>♥</span>
                <span>{video.likeCount}</span>
              </div>
              <div className="flex items-center gap-1">
                <span>💬</span>
                <span>{video.commentCount}</span>
              </div>
              <div className="flex items-center gap-1">
                <span>👁</span>
                <span>{video.viewCount}</span>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
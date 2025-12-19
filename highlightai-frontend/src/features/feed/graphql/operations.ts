import { gql } from "@apollo/client";

/**
 * Fetch feed videos
 * NOTE:
 * - Schema does NOT support cursor pagination yet
 * - We paginate by increasing `limit`
 */
export const LIST_VIDEOS = gql`
  query ListVideos($limit: Int!) {
    listVideos(limit: $limit) {
      videoId
      filename
      s3Key
      status
      createdAt
      likeCount
      commentCount
      viewCount
    }
  }
`;

/**
 * Engagement mutations
 */
export const LIKE_VIDEO = gql`
  mutation LikeVideo($videoId: ID!) {
    likeVideo(videoId: $videoId) {
      likeCount
      commentCount
      viewCount
    }
  }
`;

export const UNLIKE_VIDEO = gql`
  mutation UnlikeVideo($videoId: ID!) {
    unlikeVideo(videoId: $videoId) {
      likeCount
      commentCount
      viewCount
    }
  }
`;

export const RECORD_VIEW = gql`
  mutation RecordView($videoId: ID!) {
    recordView(videoId: $videoId) {
      likeCount
      commentCount
      viewCount
    }
  }
`;

/**
 * Realtime engagement updates (per video)
 */
export const ON_ENGAGEMENT_UPDATE = gql`
  subscription OnEngagementUpdate($videoId: ID!) {
    onVideoEngagementUpdate(videoId: $videoId) {
      likeCount
      commentCount
      viewCount
    }
  }
`;
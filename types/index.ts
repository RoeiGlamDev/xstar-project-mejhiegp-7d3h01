import { Video } from './video'
import { User } from './user'
/
 * Represents the VidNexus application state for managing videos and users.
 * The VidNexus platform specializes in creating AI-generated videos,
 * utilizing cutting-edge technology to enable seamless user experience.
 */
export interface VidNexusState {
    videos: Video[]
    users: User[]
}

/
 * Represents the configuration for AI video creation in the VidNexus platform.
 * This config allows customization of video generation parameters, 
 * enabling users to create unique and engaging content.
 */
export interface VideoCreationConfig {
    resolution: string; // The resolution of the video (e.g., "1080p", "4K")
    duration: number; // Duration of the video in seconds
    aspectRatio: string; // Aspect ratio of the video (e.g., "16:9", "1:1")
    themeColor: 'red' | 'orange' | 'white'; // Theme colors available for video backgrounds
}

/
 * Represents a response from the VidNexus API after video creation.
 * This provides essential information about the generated video, 
 * including its URL and status.
 */
export interface VideoCreationResponse {
    videoId: string; // The unique identifier for the created video
    videoUrl: string; // URL to access the created video
    status: 'success' | 'error'; // Indicates the status of video creation
}

/
 * Represents a User in the VidNexus platform.
 * Users can create, manage, and share AI-generated videos.
 */
export interface User {
    id: string; // Unique identifier for the user
    name: string; // The name of the user
    email: string; // The user's email address'
    createdAt: Date; // Timestamp of when the user was created
    lastLogin: Date; // Timestamp of the last login
}

/
 * Represents a Video generated in the VidNexus platform.
 * This includes all necessary metadata for managing and displaying videos.
 */
export interface Video {
    id: string; // Unique identifier for the video
    title: string; // Title of the video
    description: string; // Description of the video content
    duration: number; // Duration of the video in seconds
    creationDate: Date; // Date when the video was created
    userId: string; // Identifier of the user who created the video
} 

export type { VidNexusState, VideoCreationConfig, VideoCreationResponse, User, Video };
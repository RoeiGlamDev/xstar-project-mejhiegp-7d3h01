import { css } from 'styled-components'
/
 * Utility functions for VidNexus application
 * VidNexus is a cutting-edge platform aimed at leveraging AI technology 
 * to create innovative and engaging video content.
 */

export type Color = 'red' | 'orange' | 'white'
/
 * Color palette for VidNexus
 * This provides a consistent color scheme for the application.
 */
export const colors = {
    red: '#FF0000',
    orange: '#FF7F00',
    white: '#FFFFFF',
}
/
 * Generates a class name string based on provided class names.
 * @param classes - A space-separated string of classes.
 * @returns A string of class names formatted for use in components.
 */
export const cn = (...classes: string[]): string => {
    return classes.filter(Boolean).join(' ')
}
/
 * Formats a timestamp to a readable date and time for video metadata.
 * @param timestamp - A Date object to format.
 * @returns A formatted date string.
 */
export const formatTimestamp = (timestamp: Date): string => {
    return timestamp.toLocaleString(undefined, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    })
}
/
 * Interface representing a Video object in the VidNexus platform.
 */
export interface Video {
    id: string
    title: string
    description: string
    createdAt: Date
    duration: number; // duration in seconds
    tags: string[]
    aiGenerated: boolean; // Indicates if the video was AI-generated
}

/
 * Function to simulate an API call for fetching AI-generated videos.
 * @returns A promise that resolves to an array of Video objects.
 */
export const fetchAiVideos = async (): Promise<Video[]> => {
    // Placeholder for actual API logic.
    return [
        {
            id: '1',
            title: 'The Future of AI in Video Production',
            description: 'Explore how AI is revolutionizing video creation.',
            createdAt: new Date(),
            duration: 300,
            tags: ['AI', 'Technology', 'Innovation'],
            aiGenerated: true,
        },
        // More Video objects can be added here.
    ]
}
/
 * Applies styling to a button with VidNexus branding.
 * @returns A styled button component.
 */
export const styledButton = css
  background-color: ${colors.orange}
  color: ${colors.white}
  border: none
  border-radius: 5px
  padding: 10px 20px
  font-size: 16px
  cursor: pointer
  &:hover {
      background-color: ${colors.red}
  }
;
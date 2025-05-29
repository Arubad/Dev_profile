import type { MDXComponents } from "mdx/types"
import Image, { type ImageProps } from "next/image"

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Use next/image for better performance
    img: (props) => (
      <Image
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
        {...(props as ImageProps)}
        alt={props.alt || "Image"} // Ensure alt is passed
      />
    ),

    // Embed YouTube videos with custom <YouTube id="..." />
    YouTube: ({ id }: { id: string }) => (
      <div className="aspect-video my-6">
        <iframe
          src={`https://www.youtube.com/embed/${id}`}
          title="YouTube video player"
          className="w-full h-full"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    ),

    // Audio support with fallback
    Audio: ({ src }: { src: string }) => (
      <div className="my-6">
        <audio controls className="w-full">
          <source src={src} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
    ),

    // Video support with fallback
    Video: ({ src }: { src: string }) => (
      <div className="my-6">
        <video controls className="w-full rounded-lg shadow">
          <source src={src} type="video/mp4" />
          Your browser does not support the video element.
        </video>
      </div>
    ),

    ...components,
  }
}

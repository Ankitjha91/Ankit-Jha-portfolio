'use client'

import { useRef, useState, useEffect } from 'react'
import { Play, Volume2, VolumeX } from 'lucide-react'

/* ---------------- TYPES ---------------- */

interface VideoProject {
    id: number
    title: string
    client: string
    description: string
    videoUrl: string
    tags: string[]
}

interface VideoCardProps {
    project: VideoProject
    isPlaying: boolean
    onPlay: () => void
}

/* ---------------- DATA ---------------- */

const videoProjects: VideoProject[] = [
    {
        id: 1,
        title: 'Data Science Roadmap',
        client: 'Education',
        description: 'Structured roadmap video with dynamic text overlays.',
        videoUrl: '/video/Learn Data Science & Analytics directly from - IIT professors!Best and affordable courses.Commen.mp4',
        tags: ['Education', 'Roadmap']
    },
    {
        id: 2,
        title: 'Python Certification',
        client: 'Course Review',
        description: 'Review and guide for Google IT Automation course.',
        videoUrl: '/video/Free python Certification course from google that you should not miss in 2024.Google IT Automati.mp4',
        tags: ['Review', 'Python']
    },
    {
        id: 3,
        title: 'Featured Intro',
        client: 'Personal Brand',
        description: 'Professional introduction and showcase video.',
        videoUrl: '/video/ankit-video.mp4',
        tags: ['Personal', 'Showcase']
    }
]

/* ---------------- MAIN COMPONENT ---------------- */

export default function FreelanceVideo() {
    const [playingId, setPlayingId] = useState<number | null>(null)

    return (
        <section id="freelance-video" className="py-20 bg-gray-900 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center space-y-4 mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-white">
                        Video Editing{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                            Portfolio
                        </span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Engaging short-form content designed for social media impact.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
                    {videoProjects.map((project) => (
                        <VideoCard
                            key={project.id}
                            project={project}
                            isPlaying={playingId === project.id}
                            onPlay={() => setPlayingId(project.id)}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

/* ---------------- VIDEO CARD ---------------- */

function VideoCard({ project, isPlaying, onPlay }: VideoCardProps) {
    const videoRef = useRef<HTMLVideoElement>(null)
    const [isMuted, setIsMuted] = useState(true)

    const togglePlay = () => {
        if (!videoRef.current) return

        if (videoRef.current.paused) {
            videoRef.current.play()
            onPlay()
        } else {
            videoRef.current.pause()
        }
    }

    const toggleMute = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation()
        if (!videoRef.current) return
        videoRef.current.muted = !videoRef.current.muted
        setIsMuted(!isMuted)
    }

    useEffect(() => {
        if (!videoRef.current) return
        if (!isPlaying) {
            videoRef.current.pause()
            videoRef.current.currentTime = 0
        }
    }, [isPlaying])

    return (
        <div
            onClick={togglePlay}
            className="relative w-full max-w-[280px] aspect-[9/16] bg-black rounded-2xl overflow-hidden border border-gray-800 shadow-2xl cursor-pointer"
        >
            <video
                ref={videoRef}
                src={project.videoUrl}
                className="w-full h-full object-cover"
                loop
                playsInline
                muted={isMuted}
            />

            {!isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center text-white">
                        <Play size={24} />
                    </div>
                </div>
            )}

            <button
                onClick={toggleMute}
                className="absolute bottom-20 right-4 w-8 h-8 bg-black/50 rounded-full flex items-center justify-center text-white"
            >
                {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
            </button>

            <div className="absolute bottom-0 p-4 text-white">
                <p className="text-xs text-purple-400 uppercase">{project.client}</p>
                <h3 className="text-lg font-bold">{project.title}</h3>

                <div className="flex gap-1 mt-2 flex-wrap">
                    {project.tags.map((tag, i) => (
                        <span key={i} className="text-[10px] bg-white/10 px-2 py-0.5 rounded">
                            #{tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    )
}

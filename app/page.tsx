const page: React.FC = () => {
    return (
        <div className="bg-white text-gray-800">
            {/ Hero Section /}
            <header className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-red-500 to-orange-500 text-white">
                <div
                    className="text-5xl font-bold mb-4"
                   }
                   }
                   }

                    Welcome to VidNexus
                </div>
                <div
                    className="text-xl mb-8"
                   }
                   }
                   }

                    Revolutionizing AI Video Creation
                </div>
                <div
                    className="bg-white text-red-500 font-semibold py-2 px-4 rounded-lg shadow-lg hover:bg-gray-200 transition-colors duration-300"
                   }
                   }

                    Get Started
                </div>
            </header>

            {/ Features Section /}
            <section className="py-16 px-4">
                <h2 className="text-3xl font-bold text-center text-red-500 mb-8">
                    Features of VidNexus
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div
                        className="bg-orange-500 text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-2"
                       }
                       }
                       }

                        <h3 className="text-xl font-semibold">Intelligent Video Editing</h3>
                        <p>
                            Our AI-driven platform automates the video editing process,
                            allowing you to focus on creativity without the hassle.
                        </p>
                    </div>
                    <div
                        className="bg-orange-500 text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-2"
                       }
                       }
                       }

                        <h3 className="text-xl font-semibold">Seamless Collaboration</h3>
                        <p>
                            Collaborate with your team in real time, making it easy to
                            share ideas and feedback for the best results.
                        </p>
                    </div>
                    <div
                        className="bg-orange-500 text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-2"
                       }
                       }
                       }

                        <h3 className="text-xl font-semibold">Insightful Analytics</h3>
                        <p>
                            Gain valuable insights on viewer engagement and performance
                            metrics to enhance your video strategy.
                        </p>
                    </div>
                </div>
            </section>

            {/ Luxury Design Section /}
            <section className="bg-red-500 text-white py-16">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-4">Elevate Your Video Experience</h2>
                    <p className="mb-8">
                        With VidNexus, you gain access to unparalleled tools for creating,
                        editing, and sharing AI-driven videos that captivate and engage.
                    </p>
                    <div
                        className="bg-white text-red-500 font-semibold py-2 px-4 rounded-lg shadow-lg hover:bg-gray-200 transition-colors duration-300"
                       }
                       }

                        Explore More
                    </div>
                </div>
            </section>

            {/ Footer /}
            <footer className="bg-gray-800 text-white py-4 text-center">
                <p>&copy; {new Date().getFullYear()} VidNexus. All rights reserved.</p>
            </footer>
        </div>
    )
}
export default page
)

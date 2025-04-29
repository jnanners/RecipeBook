

const Hero = ({title="Your Personal Recipe Database", subtitle="Never forget another meal :)"}) => {
    return (
        <section className="bg-amber-500 py-15 mb-4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
                <div className="text-center">
                    <h1 className="text-4xl font-extrabold text-gray-200 sm:text-5xl md:text-6xl">{title}</h1>
                    <p className="my-4 text-2xl text-gray-200">{subtitle}</p>
                </div>
            </div>
        </section>
    )
}

export default Hero;
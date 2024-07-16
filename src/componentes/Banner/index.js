export default function Banner() {
    
    return(
        <div
            className="hero min-h-screen"
            style={{ backgroundImage: `url("/img/banner-home.jpg")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">¡Hola!</h1>
                    <p className="text-4xl mb-5">
                        Aqui puedes encontrar los mejores videos.
                    </p>
                    <button className="btn btn-primary">¡Empecemos!</button>
                </div>
            </div>
        </div>
    )
}
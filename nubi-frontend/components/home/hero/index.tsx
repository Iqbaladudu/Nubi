export default function Hero() {
  return (
    <div className="hero min-h-screen bg-base-100 z-0">
      <div className="hero-content flex-col lg:flex-row-reverse w-[90%]">
        <img
          src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">Grow Together!</h1>
          <p className="py-6">
            Nubi Academy adalah platform pengembangan diri yang berfokus di
            bidang pengetahuan dan keterampilan soft skill dan hard skill
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
}

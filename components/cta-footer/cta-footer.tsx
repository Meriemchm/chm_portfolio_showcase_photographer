export default function CtaFooter() {
  return (
    <section className="w-full bg-[#611618] text-white py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 items-center">

        <div className="flex flex-col text-4xl font-bold leading-none tracking-wide">
          <span>RO</span>
          <span>MAN</span>
          <span>TIC</span>
          <span>SOUL</span>
        </div>

        <div className="w-full h-full flex justify-center">
          <img
            src="/images/cta-footer.png"
            alt="Portrait"
            className="object-cover w-full h-full max-h-96 grayscale"
          />
        </div>

        <div className="space-y-8 text-xs leading-relaxed max-w-xs">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dictum
            lectus, mattis quis dapibus vitae, varius id purus. Maecenas lorem.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dictum
            lectus, mattis quis dapibus vitae, varius id purus.
          </p>
        </div>
      </div>
    </section>
  );
}

export default function GridBackground() {
  return (
    <div className="fixed inset-0 -z-50 h-full w-full bg-white dark:bg-neutral-950 transition-colors duration-500 pointer-events-none overflow-hidden">
      
      {/* The Neon Grid (Fades out at the bottom using a radial mask) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#10b98115_1px,transparent_1px),linear-gradient(to_bottom,#10b98115_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_100%_100%_at_50%_0%,#000_60%,transparent_100%)]"></div>
      
      {/* Top Ambient Neon Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-emerald-400/10 dark:bg-emerald-500/15 rounded-[100%] blur-[120px] pointer-events-none"></div>
      
      {/* Subtle Side Glows for wider screens */}
      <div className="hidden lg:block absolute top-1/4 -left-64 w-[500px] h-[500px] bg-emerald-500/5 dark:bg-emerald-500/10 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="hidden lg:block absolute top-1/4 -right-64 w-[500px] h-[500px] bg-emerald-500/5 dark:bg-emerald-500/10 rounded-full blur-[150px] pointer-events-none"></div>
      
    </div>
  );
}
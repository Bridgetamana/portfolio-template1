import {
  Figma,
  DribbbleIcon,
  Linkedin,
  FileText,
  Mail,
  ExternalLink,
} from "lucide-react";

const Portfolio = () => {
  const createGoogleSearchUrl = (query) => {
    return `https://www.google.com/search?q=${encodeURIComponent(query)}`;
  };

  return (
    <main className="flex min-h-screen items-center justify-center p-4 bg-white">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-3 max-w-[500px] w-full">
        <div className="relative">
          <div className="w-30 h-30 rounded-full overflow-hidden border-2 border-zinc-100 shadow-sm">
            <img
              src="https://img.freepik.com/premium-photo/black-woman-portrait-smile-with-arms-crossed-studio-with-casual-style-fashion-confidence-happy-young-female-model-empowerment-happiness-with-hair-braids-beauty-pride-nigeria_590464-124307.jpg?ga=GA1.1.2025607660.1740638809&semt=ais_country_boost&w=740"
              alt="Jane Doe"
              className="object-cover"
            />
          </div>
          <div className="absolute bottom-3 right-3 w-3 h-3 bg-green-400 rounded-full border-2 border-white animate-pulse" />
        </div>

        <div className="flex flex-col gap-4 flex-1">
          <div>
            <h1 className="text-2xl font-semibold text-zinc-900">Jane Doe</h1>
            <h2 className="text-zinc-600">
              Product Designer & UI/UX Specialist
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            <a
              href={createGoogleSearchUrl("Jane Doe")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-1 bg-zinc-100 border border-zinc-200 rounded-lg p-2 text-zinc-800 hover:-translate-y-0.5 transition-all group"
            >
              <span className="text-sm">Who is Jane</span>
              <div className="text-zinc-400 group-hover:text-zinc-600 transition-transform hover:translate-x-1">
                <ExternalLink className="w-3.5 h-3.5" />
              </div>
            </a>
            <a
              href="#"
              className="flex items-center justify-between gap-1 bg-zinc-100 border border-zinc-200 rounded-lg p-2 text-zinc-800 hover:-translate-y-0.5 transition-all group"
            >
              <span className="text-sm">Blog</span>
              <div className="text-zinc-400 group-hover:text-zinc-600 transition-transform hover:translate-x-1">
                <FileText className="w-3.5 h-3.5" />
              </div>
            </a>
            <a
              href="#"
              className="flex items-center justify-between gap-1 bg-zinc-100 border border-zinc-200 rounded-lg p-2 text-zinc-800 hover:-translate-y-0.5 transition-all group"
            >
              <span className="text-sm">LinkedIn</span>
              <div className="text-zinc-400 group-hover:text-zinc-600 transition-transform hover:translate-x-1">
                <Linkedin className="w-3.5 h-3.5" />
              </div>
            </a>
            <a
              href="#"
              className="flex items-center justify-between gap-1 bg-zinc-100 border border-zinc-200 rounded-lg p-2 text-zinc-800 hover:-translate-y-0.5 transition-all group"
            >
              <span className="text-sm">Behance</span>
              <div className="text-zinc-400 group-hover:text-zinc-600 transition-transform hover:translate-x-1">
                <DribbbleIcon className="w-3.5 h-3.5" />
              </div>
            </a>
            <a
              href="#"
              className="flex items-center justify-between gap-1 bg-zinc-100 border border-zinc-200 rounded-lg p-2 text-zinc-800 hover:-translate-y-0.5 transition-all group"
            >
              <span className="text-sm"> Templates</span>
              <div className="text-zinc-400 group-hover:text-zinc-600 transition-transform translate-x-1">
                <Figma className="w-3.5 h-3.5" />
              </div>
            </a>
            <a
              href="mailto:jane@example.com"
              className="flex items-center justify-between gap-1 bg-zinc-100 border border-zinc-200 rounded-lg p-2 text-zinc-800 hover:-translate-y-0.5 transition-all group"
            >
              <span className="text-sm">Email</span>
              <div className="text-zinc-400 group-hover:text-zinc-600 transition-transform translate-x-1">
                <Mail className="w-3.5 h-3.5" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Portfolio;

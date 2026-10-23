import { useEffect, useState } from "react";
import { Link, NavLink, Route, Routes, useParams } from "react-router-dom";
import {
  ArrowRight,
  BookOpen,
  ChevronRight,
  FlaskConical,
  Grid2X2,
  LayoutDashboard,
  Moon,
  Sun,
  Zap,
} from "lucide-react";
import { modules, type LearningModule } from "../modules/registry";
import { readTheme, saveTheme } from "../storage/preferences";
function ModuleCard({ module: m }: { module: LearningModule }) {
  const Icon = m.icon;
  return (
    <Link className="module-card" to={`/modules/${m.id}`}>
      <div className="card-top">
        <span className="module-icon">
          <Icon size={24} />
        </span>
        <span className="tag">Coming soon</span>
      </div>
      <p className="eyebrow">{m.category}</p>
      <h3>{m.title}</h3>
      <p>{m.description}</p>
      <span className="card-link">
        Explore module <ArrowRight size={16} />
      </span>
    </Link>
  );
}
function Directory({ dashboard = false }: { dashboard?: boolean }) {
  return (
    <>
      <header className="page-heading">
        <p className="eyebrow">
          {dashboard ? "YOUR ENGINEERING WORKSPACE" : "EXPLORE THE LIBRARY"}
        </p>
        <h1>{dashboard ? "A place to understand." : "Learning modules"}</h1>
        <p>
          {dashboard
            ? "Explore the principles. Connect the ideas. Build your understanding of electrical engineering."
            : "Independent topics, connected by the fundamentals of electrical engineering."}
        </p>
      </header>
      {dashboard && (
        <section className="welcome-panel">
          <div>
            <span className="panel-label">
              <FlaskConical size={16} /> BUILT FOR EXPLORATION
            </span>
            <h2>From theory to intuition.</h2>
            <p>
              Your workspace for electrical engineering. Start with a topic and
              discover what’s taking shape.
            </p>
            <Link className="primary-link" to="/modules">
              Browse modules <ArrowRight size={17} />
            </Link>
          </div>
          <div className="wave-art" aria-hidden="true">
            <svg viewBox="0 0 400 180">
              <path className="grid-line" d="M0 90H400M200 0V180" />
              {[0, 1, 2].map((n) => (
                <path
                  key={n}
                  className={`wave wave-${n}`}
                  d={`M0 ${90 + Math.sin(n * 2.094) * 58} ${Array.from({ length: 81 }, (_, i) => `L${i * 5} ${90 + Math.sin((i / 80) * Math.PI * 4 + n * 2.094) * 58}`).join(" ")}`}
                />
              ))}
            </svg>
            <span>IDEAS IN PHASE</span>
          </div>
        </section>
      )}
      <div className="section-heading">
        <div>
          <h2>{dashboard ? "Find your starting point" : "All modules"}</h2>
          <p>Four topics. A foundation for much more.</p>
        </div>
        {dashboard ? (
          <Link to="/modules">
            View all <ArrowRight size={15} />
          </Link>
        ) : (
          <span className="count">{modules.length} modules</span>
        )}
      </div>
      <section className="module-grid" aria-label="Learning modules">
        {modules.map((m) => (
          <ModuleCard key={m.id} module={m} />
        ))}
      </section>
      <aside className="note">
        <BookOpen size={20} />
        <p>
          <strong>A growing learning platform</strong>
          <br />
          This is the first chapter of PowerLab. Calculators, simulations, and
          guided examples will arrive in future updates.
        </p>
      </aside>
    </>
  );
}
function ModulePage() {
  const { id } = useParams();
  const m = modules.find((m) => m.id === id);
  if (!m) return <NotFound />;
  const Icon = m.icon;
  return (
    <>
      <Link className="back-link" to="/modules">
        ← All modules
      </Link>
      <header className="page-heading">
        <span className="module-icon">
          <Icon size={28} />
        </span>
        <p className="eyebrow">{m.category}</p>
        <h1>{m.title}</h1>
        <p>{m.description}</p>
      </header>
      <section className="detail-panel">
        <span className="tag">Coming soon</span>
        <h2>A new space for exploration.</h2>
        <p>
          This module is a preview. Calculations, interactive visualizations,
          and exercises are not implemented yet.
        </p>
        <h3>Planned topics</h3>
        <ul>
          {m.topics.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </section>
    </>
  );
}
function NotFound() {
  return (
    <section className="page-heading">
      <h1>Page not found</h1>
      <p>This workspace does not exist.</p>
      <Link to="/">Return to dashboard</Link>
    </section>
  );
}
export function App() {
  const [theme, setTheme] = useState(readTheme);
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    saveTheme(theme);
  }, [theme]);
  return (
    <div className="app">
      <aside className="sidebar">
        <Link className="brand" to="/">
          <span>
            <Zap size={23} fill="currentColor" />
          </span>
          PowerLab<span className="brand-dot">.</span>
        </Link>
        <p className="sidebar-label">WORKSPACE</p>
        <nav aria-label="Main navigation">
          <NavLink to="/" end>
            <LayoutDashboard size={19} />
            Dashboard
          </NavLink>
          <NavLink to="/modules">
            <Grid2X2 size={19} />
            Modules
          </NavLink>
        </nav>
        <div className="sidebar-bottom">
          <div className="edition">
            <span className="status-dot" /> Foundation release <span>v0.1</span>
          </div>
          <button
            className="theme-toggle"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}Switch
            to {theme === "light" ? "dark" : "light"} theme
          </button>
        </div>
      </aside>
      <div className="content">
        <div className="topbar">
          <span>
            Workspace <ChevronRight size={14} /> <span>PowerLab</span>
          </span>
          <span className="topbar-label">LEARN · EXPLORE · UNDERSTAND</span>
        </div>
        <main>
          <Routes>
            <Route path="/" element={<Directory dashboard />} />
            <Route path="/modules" element={<Directory />} />
            <Route path="/modules/:id" element={<ModulePage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <footer>
            PowerLab <span>Electrical engineering, one idea at a time.</span>
          </footer>
        </main>
      </div>
    </div>
  );
}

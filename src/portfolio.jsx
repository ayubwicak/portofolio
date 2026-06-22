import { useState, useEffect } from "react";

const NAV_LINKS = ["Tentang", "Keahlian", "Sertifikat", "Proyek", "Kontak"];

const SKILLS = [
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "Tailwind CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "MongoDB"],
  },
  { category: "Tools", items: ["Git", "Docker", "Figma", "VS Code"] },
  {
    category: "Soft Skills",
    items: ["Problem Solving", "Kolaborasi Tim", "UI/UX Thinking"],
  },
];

const PROJECTS = [
  {
    title: "Kolaborasi Backend Portofolio",
    desc: "Mengembangkan aplikasi berbasis web menggunakan PHP dan MySQL secara berkelompok dengan menerapkan konsep Object-Oriented Programming (OOP)",
    longDesc:
      "Mengembangkan aplikasi berbasis web menggunakan PHP dan MySQL secara berkelompok dengan menerapkan konsep Object-Oriented Programming (OOP), pengelolaan database, serta autentikasi pengguna. Berkontribusi dalam pembuatan fitur back-end, pengolahan data, dan integrasi antara antarmuka pengguna dengan database.",
    tech: ["Vue.js", "Bootstrap"],
    year: "2024",
    color: "#C8A96E",
    link: "https://github.com/MuhamadAdhiWinata/backend_portofolio.git",
    demo: "https://example.com",
  },
  {
    title: "Inventaris Toko",
    desc: "Aplikasi dilengkapi dengan fitur autentikasi pengguna (login, registrasi, dan logout), manajemen produk, pengelolaan kategori barang, pencatatan barang masuk dan barang keluar, serta dashboard untuk memantau data inventaris.",
    longDesc:
      "Sistem Inventaris Toko merupakan aplikasi berbasis web yang dirancang untuk membantu pengelolaan stok barang secara digital. Sistem ini memungkinkan admin dan pengguna untuk memantau ketersediaan barang, mencatat transaksi barang masuk dan barang keluar, serta mengelola data produk, kategori, dan pengguna secara terpusat.",
    tech: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    year: "2024",
    color: "#C8A96E",
    link: "https://github.com/ayubwicak/inventaris-toko",
    demo: "https://example.com",
  },
];

const SOCIALS = [
  {
    label: "GitHub",
    handle: "github.com/Ayub Wicaksono",
    url: "https://github.com/ayubwicak",
    icon: "⌨️",
  },
  {
    label: "LinkedIn",
    handle: "linkedin.com/in/ayub-wicaksono",
    url: "https://www.linkedin.com/in/ayub-wicaksono-474394402/?skipRedirect=true",
    icon: "💼",
  },
  {
    label: "Email",
    handle: "ayub@example.com",
    url: "ayubwicak27@gmail.com",
    icon: "✉️",
  },
];

const CERTIFICATES = [
  {
    id: "sertif1",
    image: "/sertifikat/sertif1.jpeg",
    title: "Belajar Dasar Pemrograman Web",
    issuer: "CODEPOLITAN",
    year: "2025",
    desc: "Mempelajari HTML, CSS, dan dasar-dasar pembangunan halaman web responsif.",
    color: "#C8A96E",
  },
  {
    id: "sertif2",
    image: "/sertifikat/sertif2.jpeg",
    title: "Belajar Dasar JavaScript",
    issuer: "CODEPOLITAN",
    year: "2025",
    desc: "Memahami fundamental JavaScript, termasuk variabel, fungsi, dan DOM manipulation.",
    color: "#C8A96E",
  },
  {
    id: "sertif3",
    image: "/sertifikat/sertif3.jpeg",
    title: "Belajar Membuat Aplikasi Back-End",
    issuer: "CODEPOLITAN",
    year: "2025",
    desc: "Membangun REST API menggunakan Node.js dengan Express dan pengelolaan database.",
    color: "#C8A96E",
  },
  {
    id: "sertif4",
    image: "/sertifikat/sertif4.jpeg",
    title: "Belajar Dasar Database",
    issuer: "CODEPOLITAN",
    year: "2025",
    desc: "Memahami konsep database relasional, SQL, dan perancangan skema data.",
    color: "#C8A96E",
  },
];

// ── Modal Proyek ──────────────────────────────────────────────
function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 200,
        background: "rgba(0,0,0,0.75)",
        backdropFilter: "blur(6px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "#16161F",
          border: `1px solid ${project.color}44`,
          borderRadius: 10,
          padding: "2.5rem",
          maxWidth: 560,
          width: "100%",
          position: "relative",
          boxShadow: `0 32px 80px rgba(0,0,0,0.6)`,
        }}
      >
        {/* Top accent */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 3,
            background: project.color,
            borderRadius: "10px 10px 0 0",
          }}
        />

        {/* Close */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: 16,
            right: 16,
            background: "rgba(255,255,255,0.05)",
            border: "none",
            cursor: "pointer",
            color: "#9090A0",
            fontSize: 18,
            width: 36,
            height: 36,
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "background 0.2s, color 0.2s",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.background = "rgba(255,255,255,0.1)";
            e.currentTarget.style.color = "#F0EDE6";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.background = "rgba(255,255,255,0.05)";
            e.currentTarget.style.color = "#9090A0";
          }}
        >
          ✕
        </button>

        <div
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 11,
            letterSpacing: 3,
            color: project.color,
            marginBottom: 12,
            fontWeight: 700,
          }}
        >
          {project.year}
        </div>
        <h2
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 26,
            fontWeight: 800,
            color: "#F0EDE6",
            margin: "0 0 16px",
            letterSpacing: -0.5,
          }}
        >
          {project.title}
        </h2>
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 15,
            color: "#8A8A9A",
            lineHeight: 1.75,
            margin: "0 0 24px",
          }}
        >
          {project.longDesc}
        </p>

        <div
          style={{
            display: "flex",
            gap: 8,
            flexWrap: "wrap",
            marginBottom: 28,
          }}
        >
          {project.tech.map((t) => (
            <span
              key={t}
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 11,
                fontWeight: 600,
                color: project.color,
                background: project.color + "18",
                padding: "5px 12px",
                borderRadius: 3,
                letterSpacing: 0.5,
              }}
            >
              {t}
            </span>
          ))}
        </div>

        <div style={{ display: "flex", gap: 12 }}>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: project.color,
              color: "#0A0A0F",
              padding: "12px 24px",
              borderRadius: 4,
              textDecoration: "none",
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: 13,
              letterSpacing: 0.5,
              transition: "opacity 0.2s",
            }}
            onMouseOver={(e) => (e.currentTarget.style.opacity = "0.85")}
            onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
          >
            Live Demo →
          </a>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "transparent",
              color: "#F0EDE6",
              padding: "12px 24px",
              borderRadius: 4,
              textDecoration: "none",
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 600,
              fontSize: 13,
              border: "1px solid rgba(255,255,255,0.15)",
              transition: "border-color 0.2s",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.borderColor = project.color)
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)")
            }
          >
            GitHub ↗
          </a>
        </div>
      </div>
    </div>
  );
}

// ── Typewriter ────────────────────────────────────────────────
function TypewriterText({ text, delay = 0 }) {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(t);
  }, [delay]);
  useEffect(() => {
    if (!started) return;
    let i = 0;
    const iv = setInterval(() => {
      if (i < text.length) {
        setDisplayed(text.slice(0, i + 1));
        i++;
      } else clearInterval(iv);
    }, 60);
    return () => clearInterval(iv);
  }, [started, text]);
  return (
    <span>
      {displayed}
      {displayed.length < text.length && started && (
        <span
          style={{ animation: "blink 1s step-end infinite", color: "#C8A96E" }}
        >
          |
        </span>
      )}
    </span>
  );
}

// ── NavBar ────────────────────────────────────────────────────
function NavBar({ active }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled ? "rgba(10,10,15,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(200,169,110,0.12)" : "none",
        transition: "all 0.4s ease",
        padding: "0 2rem",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 64,
        }}
      >
        {/* Logo — klik scroll ke atas */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: 20,
            color: "#C8A96E",
            letterSpacing: 1,
            transition: "opacity 0.2s",
          }}
          onMouseOver={(e) => (e.currentTarget.style.opacity = "0.7")}
          onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
        >
          {"<Dev />"}
        </button>
        <div style={{ display: "flex", gap: "2rem" }} className="desktop-nav">
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link.toLowerCase())}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: active === link.toLowerCase() ? "#C8A96E" : "#F0EDE6",
                fontFamily: "'Inter', sans-serif",
                fontSize: 14,
                fontWeight: 500,
                letterSpacing: 0.5,
                transition: "color 0.2s",
                padding: "4px 0",
                borderBottom:
                  active === link.toLowerCase()
                    ? "1px solid #C8A96E"
                    : "1px solid transparent",
              }}
            >
              {link}
            </button>
          ))}
        </div>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="hamburger"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            display: "none",
            color: "#F0EDE6",
            fontSize: 24,
          }}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>
      {menuOpen && (
        <div
          style={{
            background: "rgba(10,10,15,0.97)",
            padding: "1rem 2rem 2rem",
          }}
        >
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link.toLowerCase())}
              style={{
                display: "block",
                width: "100%",
                textAlign: "left",
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "#F0EDE6",
                fontFamily: "'Inter', sans-serif",
                fontSize: 18,
                padding: "12px 0",
                borderBottom: "1px solid rgba(255,255,255,0.05)",
              }}
            >
              {link}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}

// ── Hero ──────────────────────────────────────────────────────
function HeroSection() {
  const downloadCV = () => {
    const a = document.createElement("a");
    a.href = "/cv-ayub-wicaksono.pdf";
    a.download = "cv-ayub-wicaksono.pdf";
    document.body.appendChild(a);
    a.click();
    a.remove();
  };

  return (
    <section
      id="tentang"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        background:
          "linear-gradient(135deg, #0A0A0F 0%, #12121A 60%, #0F0E18 100%)",
        position: "relative",
        overflow: "hidden",
        padding: "0 2rem",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          backgroundImage:
            "linear-gradient(rgba(200,169,110,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(200,169,110,0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "20%",
          right: "10%",
          width: 400,
          height: 400,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(200,169,110,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          width: "100%",
          paddingTop: 80,
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto",
            gap: "3rem",
            alignItems: "center",
          }}
        >
          <div>
            <div
              style={{
                display: "inline-block",
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: 3,
                color: "#C8A96E",
                marginBottom: 24,
                padding: "6px 14px",
                border: "1px solid rgba(200,169,110,0.3)",
                borderRadius: 2,
              }}
            >
              PORTOFOLIO — 2025
            </div>
            <h1
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(3rem, 8vw, 6rem)",
                fontWeight: 800,
                lineHeight: 1.05,
                margin: "0 0 24px",
                color: "#F0EDE6",
                letterSpacing: -2,
              }}
            >
              <TypewriterText text="Halo, Saya" delay={200} />
              <br />
              <span style={{ color: "#C8A96E" }}>
                <TypewriterText text="Ayub Wicaksono" delay={900} />
              </span>
            </h1>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 18,
                color: "#9090A0",
                lineHeight: 1.7,
                maxWidth: 520,
                marginBottom: 40,
              }}
            >
              Saya adalah seorang fresh graduate yang memiliki minat di bidang
              teknologi informasi, khususnya pengembangan web dan pengelolaan
              basis data. Memiliki pengalaman PKL di bidang percetakan stiker
              dan desain serta menguasai HTML, CSS, MySQL, dan Microsoft Office.
              Saya memiliki kemampuan teamwork dan komunikasi yang baik, serta
              selalu antusias untuk belajar dan berkembang dalam lingkungan
              kerja profesional.
            </p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <button
                onClick={() =>
                  document
                    .getElementById("proyek")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                style={{
                  background: "#C8A96E",
                  color: "#0A0A0F",
                  border: "none",
                  padding: "14px 32px",
                  cursor: "pointer",
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  fontSize: 14,
                  letterSpacing: 0.5,
                  borderRadius: 3,
                  transition: "transform 0.2s, box-shadow 0.2s",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 24px rgba(200,169,110,0.3)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "";
                  e.currentTarget.style.boxShadow = "";
                }}
              >
                Lihat Proyek →
              </button>
              {/* Download CV */}
              <button
                type="button"
                onClick={downloadCV}
                style={{
                  background: "transparent",
                  color: "#F0EDE6",
                  border: "1px solid rgba(240,237,230,0.25)",
                  padding: "14px 32px",
                  cursor: "pointer",
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 600,
                  fontSize: 14,
                  letterSpacing: 0.5,
                  borderRadius: 3,
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  transition: "border-color 0.2s, color 0.2s",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.borderColor = "#C8A96E";
                  e.currentTarget.style.color = "#C8A96E";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.borderColor = "rgba(240,237,230,0.25)";
                  e.currentTarget.style.color = "#F0EDE6";
                }}
              >
                ↓ Download CV
              </button>
            </div>
            <div style={{ marginTop: 56, display: "flex", gap: 32 }}>
              {[
                ["1+", "Tahun\nPengalaman"],
                ["2+", "Proyek\nSelesai"],
              ].map(([num, label]) => (
                <div key={num}>
                  <div
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: 32,
                      fontWeight: 800,
                      color: "#C8A96E",
                    }}
                  >
                    {num}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 12,
                      color: "#6B6B7A",
                      whiteSpace: "pre-line",
                      marginTop: 4,
                    }}
                  >
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div
            className="hero-avatar"
            style={{
              width: 260,
              height: 320,
              flexShrink: 0,
              background: "linear-gradient(135deg, #1A1A25 0%, #222230 100%)",
              border: "1px solid rgba(200,169,110,0.2)",
              borderRadius: 8,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <img
              src="/profil.jpeg"
              alt="Ayub Wicaksono"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: 3,
                background:
                  "linear-gradient(90deg, transparent, #C8A96E, transparent)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Skills ────────────────────────────────────────────────────
function SkillsSection() {
  return (
    <section
      id="keahlian"
      style={{ background: "#0D0D14", padding: "6rem 2rem" }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ marginBottom: 56 }}>
          <div
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: 4,
              color: "#C8A96E",
              marginBottom: 16,
            }}
          >
            KEAHLIAN
          </div>
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 800,
              color: "#F0EDE6",
              margin: 0,
              letterSpacing: -1,
            }}
          >
            Teknologi yang
            <br />
            Saya Kuasai
          </h2>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
            gap: 20,
          }}
        >
          {SKILLS.map(({ category, items }) => (
            <div
              key={category}
              style={{
                background: "#12121C",
                border: "1px solid rgba(200,169,110,0.1)",
                borderRadius: 6,
                padding: "28px 24px",
                transition: "border-color 0.3s",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.borderColor = "rgba(200,169,110,0.35)")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.borderColor = "rgba(200,169,110,0.1)")
              }
            >
              <div
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: 3,
                  color: "#C8A96E",
                  marginBottom: 20,
                }}
              >
                {category.toUpperCase()}
              </div>
              {items.map((item) => (
                <div
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    marginBottom: 12,
                  }}
                >
                  <div
                    style={{
                      width: 5,
                      height: 5,
                      borderRadius: "50%",
                      background: "#C8A96E",
                      flexShrink: 0,
                    }}
                  />
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 14,
                      color: "#C0BFCC",
                    }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Certificate Modal ────────────────────────────────────────────
function CertificateModal({ cert, onClose }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 200,
        background: "rgba(0,0,0,0.75)",
        backdropFilter: "blur(6px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "#16161F",
          border: `1px solid ${cert.color}44`,
          borderRadius: 10,
          padding: "2.5rem",
          maxWidth: 480,
          width: "100%",
          position: "relative",
          textAlign: "center",
          boxShadow: `0 32px 80px rgba(0,0,0,0.6)`,
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: 16,
            right: 16,
            background: "rgba(255,255,255,0.05)",
            border: "none",
            cursor: "pointer",
            color: "#9090A0",
            fontSize: 18,
            width: 36,
            height: 36,
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "background 0.2s, color 0.2s",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.background = "rgba(255,255,255,0.1)";
            e.currentTarget.style.color = "#F0EDE6";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.background = "rgba(255,255,255,0.05)";
            e.currentTarget.style.color = "#9090A0";
          }}
        >
          ✕
        </button>
        <div
          style={{
            width: "100%",
            maxWidth: 360,
            margin: "0 auto 24px",
            borderRadius: 8,
            overflow: "hidden",
            border: "1px solid rgba(200,169,110,0.15)",
          }}
        >
          <img
            src={cert.image}
            alt={cert.id.toUpperCase()}
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        </div>
        <div
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 22,
            fontWeight: 800,
            color: "#F0EDE6",
            marginBottom: 6,
            letterSpacing: -0.5,
          }}
        >
          {cert.id.toUpperCase()}
        </div>
        <div
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 16,
            fontWeight: 600,
            color: "#C8A96E",
            marginBottom: 6,
          }}
        >
          {cert.title}
        </div>
        <div
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: 3,
            color: "#6B6B7A",
            marginBottom: 20,
          }}
        >
          {cert.issuer} — {cert.year}
        </div>
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 14,
            color: "#8A8A9A",
            lineHeight: 1.7,
            margin: 0,
          }}
        >
          {cert.desc}
        </p>
      </div>
    </div>
  );
}

// ── Certificates ───────────────────────────────────────────────
function CertificatesSection() {
  const [selected, setSelected] = useState(null);
  return (
    <section
      id="sertifikat"
      style={{ background: "#0D0D14", padding: "6rem 2rem" }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ marginBottom: 56 }}>
          <div
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: 4,
              color: "#C8A96E",
              marginBottom: 16,
            }}
          >
            SERTIFIKAT
          </div>
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 800,
              color: "#F0EDE6",
              margin: 0,
              letterSpacing: -1,
            }}
          >
            Kompetensi Saya
          </h2>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 20,
          }}
        >
          {CERTIFICATES.map((cert) => (
            <div
              key={cert.title}
              onClick={() => setSelected(cert)}
              style={{
                background: "#12121C",
                border: "1px solid rgba(200,169,110,0.1)",
                borderRadius: 6,
                padding: "28px 24px",
                cursor: "pointer",
                transition: "border-color 0.3s, transform 0.3s",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.borderColor = "rgba(200,169,110,0.35)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderColor = "rgba(200,169,110,0.1)";
                e.currentTarget.style.transform = "";
              }}
            >
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 6,
                  overflow: "hidden",
                  border: "1px solid rgba(200,169,110,0.15)",
                  marginBottom: 20,
                }}
              >
                <img
                  src={cert.image}
                  alt=""
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
              </div>
              <div
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: 3,
                  color: "#C8A96E",
                  marginBottom: 10,
                }}
              >
                {cert.issuer} — {cert.year}
              </div>
              <h3
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 18,
                  fontWeight: 700,
                  color: "#F0EDE6",
                  margin: "0 0 12px",
                  letterSpacing: -0.3,
                }}
              >
                {cert.title}
              </h3>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 14,
                  color: "#7A7A8C",
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                {cert.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
      {selected && (
        <CertificateModal cert={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}

// ── Project Card ──────────────────────────────────────────────
function ProjectCard({ project, index, onOpen }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onClick={() => onOpen(project)}
      onMouseOver={() => setHovered(true)}
      onMouseOut={() => setHovered(false)}
      style={{
        background: "#12121C",
        border: `1px solid ${hovered ? project.color + "55" : "rgba(255,255,255,0.06)"}`,
        borderRadius: 8,
        padding: 32,
        position: "relative",
        overflow: "hidden",
        cursor: "pointer",
        transition: "border-color 0.3s, transform 0.3s, box-shadow 0.3s",
        transform: hovered ? "translateY(-4px)" : "none",
        boxShadow: hovered ? "0 16px 40px rgba(0,0,0,0.4)" : "none",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 2,
          background: hovered ? project.color : "transparent",
          transition: "background 0.3s",
        }}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: 16,
        }}
      >
        <span
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 11,
            letterSpacing: 3,
            color: "#6B6B7A",
            fontWeight: 600,
          }}
        >
          PROYEK {String(index + 1).padStart(2, "0")}
        </span>
        <span
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 12,
            color: "#6B6B7A",
          }}
        >
          {project.year}
        </span>
      </div>
      <h3
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 22,
          fontWeight: 700,
          color: "#F0EDE6",
          margin: "0 0 12px",
          letterSpacing: -0.3,
        }}
      >
        {project.title}
      </h3>
      <p
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: 14,
          color: "#7A7A8C",
          lineHeight: 1.7,
          margin: "0 0 24px",
        }}
      >
        {project.desc}
      </p>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        {project.tech.map((t) => (
          <span
            key={t}
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 11,
              fontWeight: 600,
              color: project.color,
              background: project.color + "15",
              padding: "4px 10px",
              borderRadius: 2,
              letterSpacing: 0.5,
            }}
          >
            {t}
          </span>
        ))}
      </div>
      <div
        style={{
          marginTop: 24,
          display: "flex",
          alignItems: "center",
          gap: 6,
          color: hovered ? project.color : "#6B6B7A",
          transition: "color 0.3s",
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 13,
          fontWeight: 600,
        }}
      >
        Lihat Detail{" "}
        <span
          style={{
            display: "inline-block",
            transition: "transform 0.3s",
            transform: hovered ? "translateX(4px)" : "none",
          }}
        >
          →
        </span>
      </div>
    </div>
  );
}

// ── Projects ──────────────────────────────────────────────────
function ProjectsSection() {
  const [selected, setSelected] = useState(null);
  return (
    <section
      id="proyek"
      style={{ background: "#0A0A0F", padding: "6rem 2rem" }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ marginBottom: 56 }}>
          <div
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: 4,
              color: "#C8A96E",
              marginBottom: 16,
            }}
          >
            PORTOFOLIO
          </div>
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 800,
              color: "#F0EDE6",
              margin: 0,
              letterSpacing: -1,
            }}
          >
            Proyek Pilihan
          </h2>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 20,
          }}
        >
          {PROJECTS.map((p, i) => (
            <ProjectCard
              key={p.title}
              project={p}
              index={i}
              onOpen={setSelected}
            />
          ))}
        </div>
      </div>
      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}

// ── Contact ───────────────────────────────────────────────────
function ContactSection() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ nama: "", email: "", pesan: "" });
  const handleSend = () => {
    if (form.nama && form.email && form.pesan) setSent(true);
  };

  return (
    <section
      id="kontak"
      style={{ background: "#0D0D14", padding: "6rem 2rem" }}
    >
      <div style={{ maxWidth: 680, margin: "0 auto" }}>
        <div style={{ marginBottom: 48 }}>
          <div
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: 4,
              color: "#C8A96E",
              marginBottom: 16,
            }}
          >
            KONTAK
          </div>
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 800,
              color: "#F0EDE6",
              margin: "0 0 16px",
              letterSpacing: -1,
            }}
          >
            Mari Berkolaborasi
          </h2>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 16,
              color: "#7A7A8C",
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            Punya proyek menarik? Saya siap membantu mewujudkannya. Kirim pesan
            dan kita diskusikan lebih lanjut.
          </p>
        </div>

        {sent ? (
          <div
            style={{
              background: "rgba(200,169,110,0.08)",
              border: "1px solid rgba(200,169,110,0.3)",
              borderRadius: 8,
              padding: 48,
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: 48, marginBottom: 16 }}>✉️</div>
            <h3
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 22,
                color: "#C8A96E",
                margin: "0 0 12px",
              }}
            >
              Pesan Terkirim!
            </h3>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                color: "#7A7A8C",
                margin: "0 0 24px",
              }}
            >
              Saya akan segera menghubungi Anda kembali.
            </p>
            <button
              onClick={() => {
                setSent(false);
                setForm({ nama: "", email: "", pesan: "" });
              }}
              style={{
                background: "none",
                border: "1px solid rgba(200,169,110,0.3)",
                color: "#C8A96E",
                padding: "10px 24px",
                borderRadius: 4,
                cursor: "pointer",
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 13,
                fontWeight: 600,
              }}
            >
              Kirim Pesan Lain
            </button>
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              {
                key: "nama",
                label: "Nama Lengkap",
                type: "text",
                placeholder: "",
              },
              {
                key: "email",
                label: "Email",
                type: "email",
                placeholder: "",
              },
            ].map(({ key, label, type, placeholder }) => (
              <div key={key}>
                <label
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: 12,
                    fontWeight: 600,
                    letterSpacing: 1,
                    color: "#6B6B7A",
                    display: "block",
                    marginBottom: 8,
                  }}
                >
                  {label.toUpperCase()}
                </label>
                <input
                  type={type}
                  placeholder={placeholder}
                  value={form[key]}
                  onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                  style={{
                    width: "100%",
                    background: "#12121C",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: 4,
                    padding: "14px 16px",
                    color: "#F0EDE6",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 14,
                    outline: "none",
                    boxSizing: "border-box",
                    transition: "border-color 0.2s",
                  }}
                  onFocus={(e) =>
                    (e.target.style.borderColor = "rgba(200,169,110,0.5)")
                  }
                  onBlur={(e) =>
                    (e.target.style.borderColor = "rgba(255,255,255,0.08)")
                  }
                />
              </div>
            ))}
            <div>
              <label
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 12,
                  fontWeight: 600,
                  letterSpacing: 1,
                  color: "#6B6B7A",
                  display: "block",
                  marginBottom: 8,
                }}
              >
                PESAN
              </label>
              <textarea
                placeholder="Ceritakan proyek Anda..."
                value={form.pesan}
                onChange={(e) => setForm({ ...form, pesan: e.target.value })}
                rows={5}
                style={{
                  width: "100%",
                  background: "#12121C",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 4,
                  padding: "14px 16px",
                  color: "#F0EDE6",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 14,
                  outline: "none",
                  resize: "vertical",
                  boxSizing: "border-box",
                  transition: "border-color 0.2s",
                }}
                onFocus={(e) =>
                  (e.target.style.borderColor = "rgba(200,169,110,0.5)")
                }
                onBlur={(e) =>
                  (e.target.style.borderColor = "rgba(255,255,255,0.08)")
                }
              />
            </div>
            <button
              onClick={handleSend}
              style={{
                background: "#C8A96E",
                color: "#0A0A0F",
                border: "none",
                padding: "16px 40px",
                cursor: "pointer",
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: 14,
                letterSpacing: 1,
                borderRadius: 4,
                alignSelf: "flex-start",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow =
                  "0 8px 24px rgba(200,169,110,0.35)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "";
                e.currentTarget.style.boxShadow = "";
              }}
            >
              Kirim Pesan →
            </button>
          </div>
        )}

        {/* Social Links — semua bisa diklik */}
        <div
          style={{
            marginTop: 56,
            paddingTop: 40,
            borderTop: "1px solid rgba(255,255,255,0.06)",
            display: "flex",
            gap: 24,
            flexWrap: "wrap",
          }}
        >
          {SOCIALS.map(({ label, handle, url, icon }) => (
            <a
              key={label}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", transition: "transform 0.2s" }}
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = "translateY(-2px)")
              }
              onMouseOut={(e) => (e.currentTarget.style.transform = "")}
            >
              <div
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: 2,
                  color: "#6B6B7A",
                  marginBottom: 6,
                }}
              >
                {icon} {label.toUpperCase()}
              </div>
              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 13,
                  color: "#C8A96E",
                }}
              >
                {handle}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── App ───────────────────────────────────────────────────────
export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("tentang");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        }),
      { rootMargin: "-40% 0px -55% 0px" },
    );
    ["tentang", "keahlian", "sertifikat", "proyek", "kontak"].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700;800&family=Inter:wght@400;500;600&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { background: #0A0A0F; }
        @keyframes blink { 0%,100% { opacity: 1; } 50% { opacity: 0; } }
        @media (max-width: 680px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: block !important; }
          .hero-avatar { display: none !important; }
        }
        ::placeholder { color: #4A4A5A; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #0A0A0F; }
        ::-webkit-scrollbar-thumb { background: #2A2A35; border-radius: 3px; }
      `}</style>
      <NavBar active={activeSection} />
      <HeroSection />
      <SkillsSection />
      <CertificatesSection />
      <ProjectsSection />
      <ContactSection />
      <footer
        style={{
          background: "#0A0A0F",
          borderTop: "1px solid rgba(255,255,255,0.04)",
          padding: "24px 2rem",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 13,
            color: "#3A3A4A",
          }}
        >
          © 2026 Ayub Wicaksono · Dibuat dengan React.js & ❤️ ·{" "}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            style={{
              background: "none",
              border: "none",
              color: "#C8A96E",
              cursor: "pointer",
              fontFamily: "'Inter', sans-serif",
              fontSize: 13,
            }}
          >
            Kembali ke Atas ↑
          </button>
        </p>
      </footer>
    </>
  );
}

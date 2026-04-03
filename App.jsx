import React from "react";
const lessons = [
  {
    title: "Lesson 1",
    description: "PDF, audio, and images for Lesson 1.",
    links: [
      {
        label: "PDF",
        href: "https://drive.google.com/file/d/1ChGV2k9ZLfbRtVx9uyVJUuYItkaA8N1a/view?usp=drive_link"
      },
      {
        label: "Audio 1",
        href: "https://drive.google.com/file/d/1TSK2zTebCefCZCBgAETbR7h0yXAR7Dxf/view?usp=drive_link"
      },
      {
        label: "Image 1",
        href: "https://drive.google.com/file/d/1z5clWerY46-pHJAbMSKiLWi3AxJyaM2H/view?usp=drive_link"
      },
      {
        label: "Image 2",
        href: "https://drive.google.com/file/d/1mwvpfghzX2DJqlvL8aVgTEFD6Rk43FBr/view?usp=drive_link"
      }
    ]
  },
  {
    title: "Lesson 2",
    description: "Links will be added soon.",
    links: []
  },
  {
    title: "Lesson 3",
    description: "PDF, audio, and images for Lesson 3.",
    links: [
      {
        label: "PDF",
        href: "https://drive.google.com/file/d/1FhLO0KDkzw1a7RYz24Eqa4NLrbQtjCJs/view?usp=drive_link"
      },
      {
        label: "Audio 1",
        href: "https://drive.google.com/file/d/1wF51CTJkKArrt4vO1ET00BqyjLf6pMyh/view?usp=drive_link"
      },
      {
        label: "Audio 2",
        href: "https://drive.google.com/file/d/1GbmH2RN0JkObz-eMTEeHkYrDv8ygC7p3/view?usp=drive_link"
      },
      {
        label: "Audio 3",
        href: "https://drive.google.com/file/d/1bYgKvQfbrMAPEUnd4AHIg-GuydIqaMmb/view?usp=drive_link"
      },
      {
        label: "Audio 4",
        href: "https://drive.google.com/file/d/1XDFpQBpkOmFNrjr5skdajYeVoQLF25_k/view?usp=drive_link"
      },
      {
        label: "Image 1",
        href: "https://drive.google.com/file/d/1sGhyK8BtDF5Qjk8mpihSuh4B-ujBGwLc/view?usp=drive_link"
      },
      {
        label: "Image 2",
        href: "https://drive.google.com/file/d/1kYPjnx-fq_P6FLepD6M_2mm8P-1P9zPJ/view?usp=drive_link"
      }
    ]
  },
  {
    title: "Lesson 4",
    description: "PDF, audio, and images for Lesson 4.",
    links: [
      {
        label: "PDF",
        href: "https://drive.google.com/file/d/1JkcxMXZ_9xLz13EtVjubfIHN2DRHc_4W/view?usp=drive_link"
      },
      {
        label: "Audio 1",
        href: "https://drive.google.com/file/d/151bC-egLI_izd_DaOWXzBozLaxQXl88k/view?usp=drive_link"
      },
      {
        label: "Image 1",
        href: "https://drive.google.com/file/d/1IzJrTo6fFc3kULBw6aJsCTnuA4OT4Jmr/view?usp=drive_link"
      },
      {
        label: "Image 2",
        href: "https://drive.google.com/file/d/1ISF1eJNZzbVYLHnG0NzL4Gpx3W3J5Tec/view?usp=drive_link"
      },
      {
        label: "Image 3",
        href: "https://drive.google.com/file/d/1ilivtkCMWQdky8fKhIidHpg8399DTjal/view?usp=drive_link"
      }
    ]
  },
  {
    title: "Lesson 5",
    description: "PDF, audio, and images for Lesson 5.",
    links: [
      {
        label: "PDF",
        href: "https://drive.google.com/file/d/1J7QgpeuLlPBJ953FUJor2xeuzRHKgOti/view?usp=drive_link"
      },
      {
        label: "Audio 1",
        href: "https://drive.google.com/file/d/1yP6hD2w53m0ap-gbCMXivxfHplFZYmRu/view?usp=drive_link"
      },
      {
        label: "Audio 2",
        href: "https://drive.google.com/file/d/1WUsr28dERfjUVjw-P8qfDHhOO511wgvi/view?usp=drive_link"
      },
      {
        label: "Audio 3",
        href: "https://drive.google.com/file/d/1NS_gCSA_MNJvSOrqFyuDVUvmYwL4yaTm/view?usp=drive_link"
      },
      {
        label: "Image 1",
        href: "https://drive.google.com/file/d/1Zt2pHFQhdACxaT82RlAPAGOhcYSLzMhQ/view?usp=drive_link"
      },
      {
        label: "Image 2",
        href: "https://drive.google.com/file/d/19L4XD-0oZM-sNA6adRxv6bj_QHYgXL-z/view?usp=drive_link"
      }
    ]
  },
  {
    title: "Lesson 6",
    description: "PDF, audio, and images for Lesson 6.",
    links: [
      {
        label: "PDF",
        href: "https://drive.google.com/file/d/1pe2okP62UzErRi0PSrFo3hqGxPbHlans/view?usp=drive_link"
      },
      {
        label: "Audio 1",
        href: "https://drive.google.com/file/d/1WVLarIyGFLMmCofJIWTpOzK3wMhATmg-/view?usp=drive_link"
      },
      {
        label: "Audio 2",
        href: "https://drive.google.com/file/d/1Tk98tyCYpeQ52P16HJLP7AqI5tQbEm4e/view?usp=drive_link"
      },
      {
        label: "Audio 3",
        href: "https://drive.google.com/file/d/1CQlTTFtlKD2LxW4zyLpMOiQZm5Nao5sL/view?usp=drive_link"
      },
      {
        label: "Audio 4",
        href: "https://drive.google.com/file/d/1J1vqXiJJiTH9H5FWssbqZIZokStfolqr/view?usp=drive_link"
      },
      {
        label: "Image 1",
        href: "https://drive.google.com/file/d/1t_HnyFgYkF4YIg2blsbYz1_SroIcrlAg/view?usp=drive_link"
      },
      {
        label: "Image 2",
        href: "https://drive.google.com/file/d/16mfvurzfNrlNvg-S849oWtGlputvikRg/view?usp=drive_link"
      }
    ]
  },
  {
    title: "Lesson 7",
    description: "PDF, audio, and images for Lesson 7.",
    links: [
      {
        label: "PDF",
        href: "https://drive.google.com/file/d/1AnjSqZhj4SucLaMgxmWE72LC3wXGD0R7/view?usp=drive_link"
      },
      {
        label: "Audio 1",
        href: "https://drive.google.com/file/d/1QDTT4tABZVVMc7JMqXyHrduWezFRaOL6/view?usp=drive_link"
      },
      {
        label: "Image 1",
        href: "https://drive.google.com/file/d/1VtzVyhBpnlKhju99tNF8geJH2090Na8W/view?usp=drive_link"
      },
      {
        label: "Image 2",
        href: "https://drive.google.com/file/d/1xdnOqOBpEzLVqAMGpH9e1aEHGu5FVCap/view?usp=drive_link"
      }
    ]
  },
  {
    title: "Lesson 8",
    description: "PDF, audio, and images for Lesson 8.",
    links: [
      {
        label: "PDF",
        href: "https://drive.google.com/file/d/1SFv_13vlmLLuymnPnJSwpJ2k5iQL_pwO/view?usp=drive_link"
      },
      {
        label: "Audio 1",
        href: "https://drive.google.com/file/d/1w-mL3OuHBVjsOb_IhiXa_s_MYSLJ3RM2/view?usp=drive_link"
      },
      {
        label: "Audio 2",
        href: "https://drive.google.com/file/d/1Z5c8bqxc3GbwXEOaX5XPtBR7hB9txGjg/view?usp=drive_link"
      },
      {
        label: "Audio 3",
        href: "https://drive.google.com/file/d/1vRM5vRASuZnDPAMFgRQa5CVWaBS6FJl3/view?usp=drive_link"
      },
      {
        label: "Image 1",
        href: "https://drive.google.com/file/d/1blOcxFttQycZ9MEkKqDUi9Df7GKqVLvI/view?usp=drive_link"
      },
      {
        label: "Image 2",
        href: "https://drive.google.com/file/d/1dFKWkUdrR8DkRrkOLsny1h0XYdFde4eM/view?usp=drive_link"
      }
    ]
  },
  {
    title: "Lesson 9",
    description: "PDF, audio, and images for Lesson 9.",
    links: [
      {
        label: "PDF",
        href: "https://drive.google.com/file/d/1MeOelr16trSSwHPxXfu1Ll9Ik_RZY4RV/view?usp=drive_link"
      },
      {
        label: "Audio 1",
        href: "https://drive.google.com/file/d/1zPTOHBBo_iLwd5hsEV2W9LuZNAUBs1--/view?usp=drive_link"
      },
      {
        label: "Audio 2",
        href: "https://drive.google.com/file/d/1btcSoHw3tnRYxY6dv8iJUNIA0HyHZ7c5/view?usp=drive_link"
      },
      {
        label: "Image 1",
        href: "https://drive.google.com/file/d/1itL9ZL5MCauEdKSX2XcLncbjx5SjqVx2/view?usp=drive_link"
      },
      {
        label: "Image 2",
        href: "https://drive.google.com/file/d/1Lw05CKqz0R2ELtltTptp4IzDtG6Q-v3o/view?usp=drive_link"
      }
    ]
  },
  {
    title: "Lesson 10",
    description: "PDF, audio, and images for Lesson 10.",
    links: [
      {
        label: "PDF",
        href: "https://drive.google.com/file/d/1qMzNORAJMu2STtlqA_JA26x5gvBTqijy/view?usp=drive_link"
      },
      {
        label: "Audio 1",
        href: "https://drive.google.com/file/d/1i1GrysK5Pn6oTxEpfpnvcMXKibi1xs00/view?usp=drive_link"
      },
      {
        label: "Audio 2",
        href: "https://drive.google.com/file/d/1JlyQ7bWc0KdPPE_gM1lBkR-aI5JyXOsW/view?usp=drive_link"
      },
      {
        label: "Audio 3",
        href: "https://drive.google.com/file/d/186x888kvWTPssGESA646Xy8pmADdoW5b/view?usp=drive_link"
      },
      {
        label: "Image 1",
        href: "https://drive.google.com/file/d/1lIGrvO47fRUs-rOkXVHgU7wjm0YJCei5/view?usp=drive_link"
      },
      {
        label: "Image 2",
        href: "https://drive.google.com/file/d/1GiLpWRNRyUpPIIOxQXnPhdCuy-V4_4UN/view?usp=drive_link"
      }
    ]
  },
  {
    title: "Lesson 11",
    description: "PDF, audio, and images for Lesson 11.",
    links: [
      {
        label: "PDF",
        href: "https://drive.google.com/file/d/1g4Pukyxni0s8KZjzkw9xu2sgGGSZW2fu/view?usp=drive_link"
      },
      {
        label: "Audio 1",
        href: "https://drive.google.com/file/d/1ikBTId7GUtbG8l-ZEQWLJMemQWvkJf5J/view?usp=drive_link"
      },
      {
        label: "Image 1",
        href: "https://drive.google.com/file/d/1rLvUeSn11ppEwTe5XgtvBYC3yMrxJq50/view?usp=drive_link"
      },
      {
        label: "Image 2",
        href: "https://drive.google.com/file/d/1O0lxzlu2yM7n_6UeLhBu_vBQccCM-FRg/view?usp=drive_link"
      }
    ]
  }
];

function LessonCard({ lesson }) {
  return (
    <div className="card">
      <div className="card-top">
        <div>
          <p className="card-subtitle">English Homework</p>
          <h3>{lesson.title}</h3>
        </div>
        <span className="badge">Homework</span>
      </div>

      <p className="card-description">{lesson.description}</p>

      {lesson.links.length > 0 ? (
        <div className="links">
          {lesson.links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="link-btn"
            >
              {link.label}
            </a>
          ))}
        </div>
      ) : (
        <p className="empty-text">Links will be added soon.</p>
      )}
    </div>
  );
}

export default function App() {
  return (
    <div className="page">
      <header className="header">
        <div className="container header-inner">
          <div>
            <h1>Bekzad’s Homework Website</h1>
            <p>My English homework portfolio with PDFs, audio files, and images.</p>
          </div>
          <a href="#lessons" className="main-btn">
            Open Lessons
          </a>
        </div>
      </header>

      <main>
        <section className="hero container">
          <div className="hero-text">
            <span className="pill">Portfolio for Homework</span>
            <h2>All my lessons, files, and homework in one website</h2>
            <p>
              This website is made to present homework in a clear and professional way.
              It works well on phone, computer, and inside the Telegram browser.
            </p>
            <div className="hero-buttons">
              <a href="#lessons" className="main-btn">
                View Homework
              </a>
            </div>
          </div>

          <div className="hero-info">
            <div className="info-card">
              <p>Lessons</p>
              <strong>11</strong>
            </div>
            <div className="info-card">
              <p>Files</p>
              <strong>PDF / Audio / Images</strong>
            </div>
            <div className="info-card full">
              <p>Goal</p>
              <strong>To make my homework easy to open from one link.</strong>
            </div>
          </div>
        </section>

        <section id="lessons" className="container lessons-section">
          <div className="section-title">
            <h2>Lessons</h2>
            <p>Open each lesson and check the PDF files, audio materials, and images.</p>
          </div>

          <div className="lessons-grid">
            {lessons.map((lesson, index) => (
              <LessonCard key={index} lesson={lesson} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
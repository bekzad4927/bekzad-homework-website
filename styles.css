import React from "react";

const lessons = [
  {
    "title": "LESSON 1",
    "description": "New materials for Lesson 1.",
    "links": [
      {
        "label": "Presentation",
        "href": "/materials/lesson-1/presentation-1.pptx"
      },
      {
        "label": "Audio 1",
        "href": "/materials/lesson-1/audio-1.ogg"
      },
      {
        "label": "Audio 2",
        "href": "/materials/lesson-1/audio-2.ogg"
      }
    ]
  },
  {
    "title": "LESSON 2",
    "description": "New materials for Lesson 2.",
    "links": [
      {
        "label": "PDF",
        "href": "/materials/lesson-2/pdf-1.pdf"
      },
      {
        "label": "Audio 1",
        "href": "/materials/lesson-2/audio-1.ogg"
      }
    ]
  },
  {
    "title": "LESSON 3",
    "description": "New materials for Lesson 3.",
    "links": [
      {
        "label": "PDF",
        "href": "/materials/lesson-3/pdf-1.pdf"
      },
      {
        "label": "Audio 1",
        "href": "/materials/lesson-3/audio-1.ogg"
      },
      {
        "label": "Audio 2",
        "href": "/materials/lesson-3/audio-2.ogg"
      }
    ]
  },
  {
    "title": "LESSON 4",
    "description": "New materials for Lesson 4.",
    "links": [
      {
        "label": "PDF",
        "href": "/materials/lesson-4/pdf-1.pdf"
      },
      {
        "label": "Audio 1",
        "href": "/materials/lesson-4/audio-1.ogg"
      },
      {
        "label": "Audio 2",
        "href": "/materials/lesson-4/audio-2.ogg"
      }
    ]
  },
  {
    "title": "LESSON 5",
    "description": "New materials for Lesson 5.",
    "links": [
      {
        "label": "PDF",
        "href": "/materials/lesson-5/pdf-1.pdf"
      },
      {
        "label": "Audio 1",
        "href": "/materials/lesson-5/audio-1.ogg"
      },
      {
        "label": "Audio 2",
        "href": "/materials/lesson-5/audio-2.ogg"
      }
    ]
  },
  {
    "title": "LESSON 6",
    "description": "New materials for Lesson 6.",
    "links": [
      {
        "label": "PDF",
        "href": "/materials/lesson-6/pdf-1.pdf"
      },
      {
        "label": "Audio 1",
        "href": "/materials/lesson-6/audio-1.ogg"
      }
    ]
  },
  {
    "title": "LESSON 7",
    "description": "New materials for Lesson 7.",
    "links": [
      {
        "label": "PDF",
        "href": "/materials/lesson-7/pdf-1.pdf"
      },
      {
        "label": "Audio 1",
        "href": "/materials/lesson-7/audio-1.ogg"
      }
    ]
  },
  {
    "title": "LESSON 8",
    "description": "New materials for Lesson 8.",
    "links": [
      {
        "label": "Audio 1",
        "href": "/materials/lesson-8/audio-1.ogg"
      },
      {
        "label": "Audio 2",
        "href": "/materials/lesson-8/audio-2.ogg"
      }
    ]
  },
  {
    "title": "LESSON 9",
    "description": "New materials for Lesson 9.",
    "links": [
      {
        "label": "Audio 1",
        "href": "/materials/lesson-9/audio-1.ogg"
      },
      {
        "label": "Audio 2",
        "href": "/materials/lesson-9/audio-2.ogg"
      }
    ]
  },
  {
    "title": "LESSON 10",
    "description": "New materials for Lesson 10.",
    "links": [
      {
        "label": "PDF",
        "href": "/materials/lesson-10/pdf-1.pdf"
      },
      {
        "label": "Audio 1",
        "href": "/materials/lesson-10/audio-1.ogg"
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
            <a key={index} href={link.href} target="_blank" rel="noreferrer" className="link-btn">
              {link.label}
            </a>
          ))}
        </div>
      ) : (
        <p className="empty-text">Materials will be added soon.</p>
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
            <p>New English homework materials for LESSON 1–10.</p>
          </div>
          <a href="#lessons" className="main-btn">Open Lessons</a>
        </div>
      </header>

      <main>
        <section className="hero container">
          <div className="hero-text">
            <span className="pill">Updated Homework Portfolio</span>
            <h2>All new lessons and materials in one website</h2>
            <p>
              This website contains updated homework materials for LESSON 1–10.
              It works on phone, computer, and inside the Telegram browser.
            </p>
            <div className="hero-buttons">
              <a href="#lessons" className="main-btn">View Homework</a>
            </div>
          </div>

          <div className="hero-info">
            <div className="info-card">
              <p>Lessons</p>
              <strong>10</strong>
            </div>
            <div className="info-card">
              <p>Materials</p>
              <strong>PDF / Presentation / Audio</strong>
            </div>
            <div className="info-card full">
              <p>Goal</p>
              <strong>To make all homework easy to open from one link.</strong>
            </div>
          </div>
        </section>

        <section id="lessons" className="container lessons-section">
          <div className="section-title">
            <h2>Lessons</h2>
            <p>Open each lesson and check the new homework materials.</p>
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

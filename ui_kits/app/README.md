# Whizlabs learner app — UI kit

The signed-in product. Open `index.html` and use the sidebar.

**Screens**

- **Dashboard** — four stat tiles, a "continue where you left off" panel with `LessonRow`s and a readiness bar, recent results, and the learner's library as a 3-up grid with progress.
- **Practice tests** — vendor chips, sort control, 3-up `CourseCard` grid mixing enrolled and purchasable bundles.
- **Exam player** — timed alert, `QuestionCard` with boxed options and flag-for-review, previous/next, and a sticky question navigator showing answered / flagged / current state. Submitting lands on results.
- **Results** — `ScoreRing` with the scaled score, pass badge, per-domain breakdown bars, and three summary tiles.

**Files**

| File | Role |
| --- | --- |
| `AppShell.jsx` | Sidebar shell + `TopBar` |
| `Dashboard.jsx` | Signed-in home |
| `ExamPlayer.jsx` | Question flow + navigator (`WL_QUESTIONS` sample data) |
| `ResultsView.jsx` | Attempt report |

Design width 1280, sidebar 248px. Labs and Certificates are deliberately left blank with a disclaimer — no source design was provided for them.

**Caveat:** reasoned reconstruction, not a recreation of the live Whizlabs app.

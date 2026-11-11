import docx
from docx.shared import Inches, Pt, RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.enum.table import WD_TABLE_ALIGNMENT, WD_ALIGN_VERTICAL
from docx.oxml import parse_xml, OxmlElement
from docx.oxml.ns import nsdecls, qn

def create_modern_docx(output_path):
    doc = docx.Document()

    # Configure 0.6 inch margins all around
    sections = doc.sections
    for s in sections:
        s.top_margin = Inches(0.6)
        s.bottom_margin = Inches(0.6)
        s.left_margin = Inches(0.7)
        s.right_margin = Inches(0.7)
        s.page_width = Inches(8.5)
        s.page_height = Inches(11.0)

    # Style colors
    COLOR_PRIMARY = RGBColor(0x0F, 0x17, 0x2A)   # Dark Slate Navy
    COLOR_ACCENT = RGBColor(0x25, 0x63, 0xEB)    # Royal Blue
    COLOR_BODY = RGBColor(0x33, 0x41, 0x55)      # Slate Text
    COLOR_MUTED = RGBColor(0x64, 0x74, 0x8B)     # Light Slate
    COLOR_EMERALD = RGBColor(0x05, 0x96, 0x69)   # Emerald Green

    # Default Font
    style_normal = doc.styles['Normal']
    style_normal.font.name = 'Calibri'
    style_normal.font.size = Pt(9.5)
    style_normal.font.color.rgb = COLOR_BODY
    style_normal.paragraph_format.line_spacing = 1.15
    style_normal.paragraph_format.space_after = Pt(3)
    style_normal.paragraph_format.space_before = Pt(0)

    # Helper: Set cell shading
    def set_cell_shading(cell, hex_color):
        tcPr = cell._tc.get_or_add_tcPr()
        tcPr.append(parse_xml(f'<w:shd {nsdecls("w")} w:fill="{hex_color}"/>'))

    # Helper: Set cell padding (margins)
    def set_cell_padding(cell, top=100, bottom=100, left=140, right=140):
        tcPr = cell._tc.get_or_add_tcPr()
        tcPr.append(parse_xml(
            f'<w:tcMar {nsdecls("w")}>'
            f'<w:top w:w="{top}" w:type="dxa"/>'
            f'<w:bottom w:w="{bottom}" w:type="dxa"/>'
            f'<w:left w:w="{left}" w:type="dxa"/>'
            f'<w:right w:w="{right}" w:type="dxa"/>'
            f'</w:tcMar>'
        ))

    # Helper: Set cell borders
    def set_cell_border(cell, top=None, bottom=None, left=None, right=None):
        tcPr = cell._tc.get_or_add_tcPr()
        tcBorders = parse_xml(f'<w:tcBorders {nsdecls("w")}/>')
        borders = {'top': top, 'bottom': bottom, 'left': left, 'right': right}
        for edge, val in borders.items():
            if val:
                sz = val.get('sz', 4)
                color = val.get('color', 'E2E8F0')
                b_type = val.get('val', 'single')
                tcBorders.append(parse_xml(f'<w:{edge} {nsdecls("w")} w:val="{b_type}" w:sz="{sz}" w:space="0" w:color="{color}"/>'))
            else:
                tcBorders.append(parse_xml(f'<w:{edge} {nsdecls("w")} w:val="none"/>'))
        tcPr.append(tcBorders)

    # Helper: Add Section Header Banner
    def add_section_header(title):
        tbl = doc.add_table(rows=1, cols=1)
        tbl.alignment = WD_TABLE_ALIGNMENT.CENTER
        tbl.autofit = False
        tbl.columns[0].width = Inches(7.1)
        
        cell = tbl.cell(0, 0)
        set_cell_shading(cell, "F1F5F9")
        set_cell_padding(cell, top=80, bottom=80, left=140, right=140)
        set_cell_border(cell, left={'val': 'single', 'sz': 24, 'color': '2563EB'})
        
        p = cell.paragraphs[0]
        p.paragraph_format.space_before = Pt(0)
        p.paragraph_format.space_after = Pt(0)
        run = p.add_run(title.upper())
        run.font.name = 'Calibri'
        run.font.size = Pt(11)
        run.font.bold = True
        run.font.color.rgb = COLOR_PRIMARY
        run.font.letter_spacing = Pt(0.5)

        # Empty spacer paragraph after table
        sp = doc.add_paragraph()
        sp.paragraph_format.space_before = Pt(2)
        sp.paragraph_format.space_after = Pt(2)

    # --- HEADER SECTION ---
    header_table = doc.add_table(rows=1, cols=2)
    header_table.alignment = WD_TABLE_ALIGNMENT.CENTER
    header_table.columns[0].width = Inches(4.8)
    header_table.columns[1].width = Inches(2.3)

    cell_left = header_table.cell(0, 0)
    set_cell_padding(cell_left, top=0, bottom=60, left=0, right=60)
    p_name = cell_left.paragraphs[0]
    p_name.paragraph_format.space_after = Pt(2)
    r_name = p_name.add_run("ZAW MYO TUN")
    r_name.font.name = 'Calibri'
    r_name.font.size = Pt(24)
    r_name.font.bold = True
    r_name.font.color.rgb = COLOR_PRIMARY

    p_title = cell_left.add_paragraph()
    p_title.paragraph_format.space_after = Pt(4)
    r_title = p_title.add_run("Junior Software Developer | Python & AI Engineering")
    r_title.font.name = 'Calibri'
    r_title.font.size = Pt(11.5)
    r_title.font.bold = True
    r_title.font.color.rgb = COLOR_ACCENT

    p_sub = cell_left.add_paragraph()
    p_sub.paragraph_format.space_after = Pt(0)
    r_sub = p_sub.add_run("Higher National Diploma in Software Engineering (Merit) | BSc Computing Candidate")
    r_sub.font.name = 'Calibri'
    r_sub.font.size = Pt(9)
    r_sub.font.italic = True
    r_sub.font.color.rgb = COLOR_MUTED

    cell_right = header_table.cell(0, 1)
    set_cell_padding(cell_right, top=10, bottom=60, left=60, right=0)
    p_contacts = cell_right.paragraphs[0]
    p_contacts.alignment = WD_ALIGN_PARAGRAPH.RIGHT
    p_contacts.paragraph_format.line_spacing = 1.2
    p_contacts.paragraph_format.space_after = Pt(0)

    contacts = [
        ("Email: ", "zawmyotun.kl@gmail.com"),
        ("GitHub: ", "github.com/Z-Dev-Coder"),
        ("Live Portfolio: ", "z-dev-coder.github.io/portfolio/"),
        ("Location: ", "Mandalay, Myanmar (Remote Ready)")
    ]
    for label, val in contacts:
        p_c = cell_right.add_paragraph() if p_contacts.text else p_contacts
        p_c.alignment = WD_ALIGN_PARAGRAPH.RIGHT
        p_c.paragraph_format.space_after = Pt(1)
        r_lbl = p_c.add_run(label)
        r_lbl.font.size = Pt(8.5)
        r_lbl.font.bold = True
        r_lbl.font.color.rgb = COLOR_MUTED
        r_val = p_c.add_run(val)
        r_val.font.size = Pt(8.5)
        r_val.font.color.rgb = COLOR_PRIMARY

    # Divider bar
    p_div = doc.add_paragraph()
    p_div.paragraph_format.space_before = Pt(4)
    p_div.paragraph_format.space_after = Pt(6)

    # --- EXECUTIVE SUMMARY CARD ---
    tbl_summary = doc.add_table(rows=1, cols=1)
    tbl_summary.alignment = WD_TABLE_ALIGNMENT.CENTER
    tbl_summary.columns[0].width = Inches(7.1)
    c_sum = tbl_summary.cell(0, 0)
    set_cell_shading(c_sum, "F8FAFC")
    set_cell_padding(c_sum, top=100, bottom=100, left=140, right=140)
    set_cell_border(c_sum, 
                    left={'val': 'single', 'sz': 18, 'color': '2563EB'},
                    top={'val': 'single', 'sz': 4, 'color': 'E2E8F0'},
                    right={'val': 'single', 'sz': 4, 'color': 'E2E8F0'},
                    bottom={'val': 'single', 'sz': 4, 'color': 'E2E8F0'})
    
    p_sum = c_sum.paragraphs[0]
    p_sum.paragraph_format.space_after = Pt(0)
    r_sum_bold = p_sum.add_run("Executive Profile: ")
    r_sum_bold.font.bold = True
    r_sum_bold.font.size = Pt(9.5)
    r_sum_bold.font.color.rgb = COLOR_PRIMARY
    
    r_sum_text = p_sum.add_run(
        "Disciplined Junior Software Developer holding a Higher National Diploma in Software Engineering (Merit) "
        "and actively progressing toward a BSc (Hons) in Computing. Core expertise in architecting robust backend systems with Python and Django, "
        "engineering agentic AI systems using LangGraph and PostgreSQL pgvector RAG pipelines, and creating modern responsive interfaces. "
        "Leverages a rigorous engineering mindset developed from physical construction site management to deliver dependable, deadline-driven code "
        "through collaborative Agile/Scrum sprints and accelerated AI-assisted workflows (VibeCoding)."
    )
    r_sum_text.font.size = Pt(9.5)
    r_sum_text.font.color.rgb = COLOR_BODY

    doc.add_paragraph().paragraph_format.space_after = Pt(4)

    # --- TECHNICAL SKILLS MATRIX (2x2 Grid) ---
    add_section_header("Technical Competencies & Stack")

    skills_tbl = doc.add_table(rows=2, cols=2)
    skills_tbl.alignment = WD_TABLE_ALIGNMENT.CENTER
    for col in skills_tbl.columns:
        col.width = Inches(3.5)

    categories = [
        (
            "AI & AGENTIC SYSTEMS",
            "from-indigo-600",
            [
                ("LangGraph", "Multi-agent workflows, state graphs & dialogue routing"),
                ("RAG Architectures", "PostgreSQL pgvector cosine similarity search"),
                ("Local LLM Deployment", "Ollama self-hosted models ($0 cloud cost)"),
                ("Prompt Engineering", "Structured output formatting & agent handover")
            ]
        ),
        (
            "BACKEND & RELATIONAL DATABASES",
            "from-blue-600",
            [
                ("Python 3.12 & Django", "Django REST Framework, ORM query optimization"),
                ("Databases", "PostgreSQL, SQLite, schema normalization & indexing"),
                ("Real-time WebSockets", "Django Channels asynchronous chat pipelines"),
                ("Security & Auth", "Role-Based Access Control (RBAC), JWT sessions")
            ]
        ),
        (
            "FRONTEND & MOBILE ENGINEERING",
            "from-emerald-600",
            [
                ("React 19 & Vite", "Component lifecycle, modern hooks, SPA state flow"),
                ("Tailwind CSS", "Utility-first responsive styling & dark aesthetics"),
                ("Android Development", "Native Java, Android Studio SDK, XML layouts"),
                ("JavaScript / TypeScript", "ES6+ asynchronous syntax, fetch/REST clients")
            ]
        ),
        (
            "SDLC, AGILE & PRACTICES",
            "from-amber-600",
            [
                ("Agile / Scrum Methodologies", "Jira sprint cycles, standups, burn-down tracking"),
                ("Version Control", "Git, GitHub branch policies, code hygiene & PRs"),
                ("Software Architecture", "SRS, SDD, UML class/sequence diagrams & ERDs"),
                ("AI-Driven Velocity", "Accelerated prototyping & quality auditing (VibeCoding)")
            ]
        )
    ]

    for idx, (cat_title, _, items) in enumerate(categories):
        r_idx = idx // 2
        c_idx = idx % 2
        cell = skills_tbl.cell(r_idx, c_idx)
        set_cell_shading(cell, "F8FAFC")
        set_cell_padding(cell, top=80, bottom=80, left=100, right=100)
        set_cell_border(cell,
                        top={'val': 'single', 'sz': 4, 'color': 'E2E8F0'},
                        bottom={'val': 'single', 'sz': 4, 'color': 'E2E8F0'},
                        left={'val': 'single', 'sz': 12, 'color': '2563EB' if c_idx == 0 else '4F46E5'},
                        right={'val': 'single', 'sz': 4, 'color': 'E2E8F0'})
        
        p_ct = cell.paragraphs[0]
        p_ct.paragraph_format.space_after = Pt(3)
        r_ct = p_ct.add_run(cat_title)
        r_ct.font.name = 'Calibri'
        r_ct.font.size = Pt(9.5)
        r_ct.font.bold = True
        r_ct.font.color.rgb = COLOR_PRIMARY

        for name, desc in items:
            p_item = cell.add_paragraph()
            p_item.paragraph_format.space_after = Pt(1.5)
            r_bullet = p_item.add_run("• ")
            r_bullet.font.bold = True
            r_bullet.font.color.rgb = COLOR_ACCENT
            r_bname = p_item.add_run(f"{name}: ")
            r_bname.font.bold = True
            r_bname.font.size = Pt(8.5)
            r_bname.font.color.rgb = COLOR_PRIMARY
            r_bdesc = p_item.add_run(desc)
            r_bdesc.font.size = Pt(8.5)
            r_bdesc.font.color.rgb = COLOR_BODY

    doc.add_paragraph().paragraph_format.space_after = Pt(4)

    # --- FEATURED SOFTWARE & AI PROJECTS ---
    add_section_header("Featured Software & AI Projects")

    PROJECTS = [
        {
            "name": "Recap Studio — AI Video & Narration Suite",
            "context": "Flagship Project | Python, Electron.js, FastAPI, Gemini AI, Whisper, VoxCPM2, FFmpeg",
            "github": "https://github.com/Z-Dev-Coder/recap-studio",
            "overview": "Production-grade desktop multimedia automation platform converting raw video into comprehensive social media posting kits: automated Whisper transcription, Gemini LLM bilingual script generation (English & Burmese), intelligent FFmpeg highlight cuts, and zero-cost VoxCPM2 neural voice cloning.",
            "deliverables": [
                "Architected modular multi-process desktop app with Electron.js IPC, global Windows hotkeys, and Python FastAPI backend.",
                "Integrated faster-whisper speech-to-text transcription with Gemini API prompt engineering for bilingual script beats and hashtags.",
                "Engineered automated FFmpeg multimedia pipeline: highlight cutting, audio ducking, subtitle retiming, and ranked frame thumbnails.",
                "Deployed self-hosted VoxCPM2 neural voice cloning model with CUDA PyTorch acceleration for zero-cloud-cost narration synthesis."
            ],
            "tags": "Python 3.12 | Electron.js | FastAPI | Gemini AI | Whisper | VoxCPM2 | FFmpeg | PyTorch"
        },
        {
            "name": "JumpStart AI-Supported Chatbot",
            "context": "HDSE Capstone Project | Python, Django, LangGraph, pgvector, WebSockets",
            "github": "https://github.com/Z-Dev-Coder/JumpStart-AI-Supported-Chatbot",
            "overview": "Enterprise-grade multi-agent customer support automation platform designed to resolve complex user queries using semantic vector search and dynamic live human agent escalation.",
            "deliverables": [
                "Engineered multi-agent state machines using LangGraph with state persistence across multi-turn user conversations.",
                "Integrated PostgreSQL pgvector embeddings for domain knowledge retrieval, delivering high-accuracy contextual answers.",
                "Programmed dynamic confidence threshold evaluation to trigger automated real-time escalation to human agents.",
                "Built asynchronous bidirectional agent-user chat channels using Django Channels WebSockets."
            ],
            "tags": "Python 3.12 | Django | LangGraph | pgvector | PostgreSQL | WebSockets | REST API"
        },
        {
            "name": "English Coach AI EdTech Platform",
            "context": "AI Language Platform | React, Django REST, Ollama Local LLMs, Tailwind CSS",
            "github": "https://github.com/Z-Dev-Coder/english-coach",
            "overview": "Adaptive language learning application evaluating student submissions against a comprehensive 8-skill CEFR matrix to generate personalized drills and grammar corrections at $0 cloud cost.",
            "deliverables": [
                "Deployed local Ollama LLMs (Llama/Mistral) eliminating cloud API subscription fees and protecting user privacy.",
                "Architected an 8-skill CEFR diagnostic matrix evaluating grammar, vocabulary, fluency, and reading comprehension.",
                "Generated instant diagnostic explanations and tailored exercises calibrated to user proficiency gaps.",
                "Built clean React single-page interface with responsive feedback states and Django REST API integration."
            ],
            "tags": "React 19 | Django REST Framework | Ollama | Local LLM | Tailwind CSS | Python"
        },
        {
            "name": "MerryMeal Charitable Logistics Platform",
            "context": "Agile Team Project (Tech Titans) | Django, RBAC, GIS Geofencing, Scrum",
            "github": "https://github.com/Z-Dev-Coder/MerryMeal",
            "overview": "Charity meals-on-wheels platform developed by a 5-member Agile Scrum team to manage donor payments, kitchen food preparation workflows, and volunteer delivery routing.",
            "deliverables": [
                "Delivered through 3 structured Scrum sprint cycles with Jira tracking, daily standups, and retrospective documentation.",
                "Implemented granular Role-Based Access Control (Admin, Kitchen Staff, Donor, Volunteer, Member).",
                "Programmed 10km GIS geofenced delivery feasibility validation to route hot meals vs frozen meal packages.",
                "Authored comprehensive Software Requirements Specification (SRS) and UML system architecture models."
            ],
            "tags": "Django | Python | GIS Logistics | RBAC Security | SQLite | Agile Scrum"
        },
        {
            "name": "DoBu Martial Arts Academy Portal",
            "context": "Production Frontend Project | HTML5, CSS3, JavaScript, GitHub Pages",
            "github": "https://github.com/Z-Dev-Coder/DoBuMartialArts",
            "live": "https://z-dev-coder.github.io/DoBuMartialArts/",
            "overview": "Modern, responsive multi-page fitness and martial arts academy web portal featuring interactive membership calculators and live class timetable schedules.",
            "deliverables": [
                "Engineered interactive client-side fee calculator with dynamic add-on selections and tiered membership plans.",
                "Built responsive schedule viewer with filterable martial arts disciplines and trainer bios.",
                "Deployed global static hosting on GitHub Pages with clean cross-device mobile responsiveness."
            ],
            "tags": "JavaScript ES6 | HTML5 Semantic UI | CSS3 Flexbox/Grid | GitHub Pages"
        },
        {
            "name": "Silent Library Management System",
            "context": "WDF Academic Module | Django, SQLite, SMTP Email Notifications, Bootstrap",
            "github": "https://github.com/Z-Dev-Coder/silentlibrary",
            "overview": "Full-stack academic library information system handling book catalogs, active borrowing lifecycles, member reviews, and automated fine calculation.",
            "deliverables": [
                "Designed normalized relational database models with strict foreign-key integrity for loans, members, and books.",
                "Programmed automated fine calculation engine based on loan duration and return timestamps.",
                "Configured SMTP email integration to dispatch real-time loan receipts, reservation notices, and overdue reminders."
            ],
            "tags": "Django | Python | SQLite | SMTP Notifications | Bootstrap 5"
        },
        {
            "name": "Math Quiz Educational Mobile App",
            "context": "BTEC Unit 7 MAD | Android Studio, Native Java, SQLite, Timed Mechanics",
            "github": "https://github.com/Z-Dev-Coder/Math-Quiz-Mobile-App",
            "overview": "Native Android educational mental arithmetic game featuring 3 timed challenge tiers, randomized math generation, and local database persistence.",
            "deliverables": [
                "Engineered native Android activity lifecycle management with countdown timer mechanics in Java OOP.",
                "Structured 3 progressive difficulty tiers (Novice, Adept, Master) with visual progress meters.",
                "Integrated local SQLite database to persist player high scores, accuracy statistics, and game history."
            ],
            "tags": "Android SDK | Java | SQLite | XML UI Layouts | BTEC Unit 7"
        }
    ]

    for p in PROJECTS:
        p_tbl = doc.add_table(rows=1, cols=1)
        p_tbl.alignment = WD_TABLE_ALIGNMENT.CENTER
        p_tbl.columns[0].width = Inches(7.1)
        
        c = p_tbl.cell(0, 0)
        set_cell_shading(c, "FAFAFA")
        set_cell_padding(c, top=80, bottom=80, left=120, right=120)
        set_cell_border(c,
                        left={'val': 'single', 'sz': 16, 'color': '2563EB'},
                        top={'val': 'single', 'sz': 4, 'color': 'E2E8F0'},
                        bottom={'val': 'single', 'sz': 4, 'color': 'E2E8F0'},
                        right={'val': 'single', 'sz': 4, 'color': 'E2E8F0'})
        
        p_title = c.paragraphs[0]
        p_title.paragraph_format.space_after = Pt(1)
        r_pname = p_title.add_run(p['name'])
        r_pname.font.name = 'Calibri'
        r_pname.font.size = Pt(10.5)
        r_pname.font.bold = True
        r_pname.font.color.rgb = COLOR_PRIMARY
        
        r_sep = p_title.add_run("  |  ")
        r_sep.font.color.rgb = COLOR_MUTED

        r_pctx = p_title.add_run(p['context'])
        r_pctx.font.name = 'Calibri'
        r_pctx.font.size = Pt(9)
        r_pctx.font.italic = True
        r_pctx.font.color.rgb = COLOR_ACCENT

        # Links line
        p_lnk = c.add_paragraph()
        p_lnk.paragraph_format.space_after = Pt(3)
        r_lbl1 = p_lnk.add_run("Repository: ")
        r_lbl1.font.size = Pt(8.5)
        r_lbl1.font.bold = True
        r_lbl1.font.color.rgb = COLOR_MUTED
        r_url1 = p_lnk.add_run(p['github'])
        r_url1.font.size = Pt(8.5)
        r_url1.font.color.rgb = COLOR_ACCENT
        r_url1.font.underline = True

        if 'live' in p:
            r_sep2 = p_lnk.add_run("   |   Live Demo: ")
            r_sep2.font.size = Pt(8.5)
            r_sep2.font.bold = True
            r_sep2.font.color.rgb = COLOR_MUTED
            r_url2 = p_lnk.add_run(p['live'])
            r_url2.font.size = Pt(8.5)
            r_url2.font.color.rgb = COLOR_EMERALD
            r_url2.font.underline = True

        # Overview
        p_ov = c.add_paragraph()
        p_ov.paragraph_format.space_after = Pt(3)
        r_ov = p_ov.add_run(p['overview'])
        r_ov.font.size = Pt(9)
        r_ov.font.color.rgb = COLOR_BODY

        # Deliverables bullets
        for item in p['deliverables']:
            p_d = c.add_paragraph()
            p_d.paragraph_format.space_after = Pt(1.5)
            p_d.paragraph_format.left_indent = Inches(0.15)
            r_b = p_d.add_run("• ")
            r_b.font.bold = True
            r_b.font.color.rgb = COLOR_ACCENT
            r_txt = p_d.add_run(item)
            r_txt.font.size = Pt(8.5)
            r_txt.font.color.rgb = COLOR_BODY

        # Tech stack footer pill
        p_tg = c.add_paragraph()
        p_tg.paragraph_format.space_before = Pt(2)
        p_tg.paragraph_format.space_after = Pt(0)
        r_tg_lbl = p_tg.add_run("Tech Stack: ")
        r_tg_lbl.font.size = Pt(8)
        r_tg_lbl.font.bold = True
        r_tg_lbl.font.color.rgb = COLOR_MUTED
        r_tg_val = p_tg.add_run(p['tags'])
        r_tg_val.font.size = Pt(8)
        r_tg_val.font.color.rgb = COLOR_PRIMARY

        # Spacing between cards
        doc.add_paragraph().paragraph_format.space_after = Pt(2)

    # --- EDUCATION & ACADEMIC CREDENTIALS ---
    add_section_header("Education & Academic Qualifications")

    edu_tbl = doc.add_table(rows=2, cols=1)
    edu_tbl.alignment = WD_TABLE_ALIGNMENT.CENTER
    edu_tbl.columns[0].width = Inches(7.1)

    edus = [
        (
            "BSc (Hons) in Computing",
            "EduCLaaS Academy",
            "2025 — Present  (In Progress)",
            "Advanced curriculum focusing on distributed systems architecture, enterprise software engineering, and modern machine learning concepts."
        ),
        (
            "Higher National Diploma in Software Engineering (HDSE)",
            "EduCLaaS Academy",
            "2023 — 2025  (Graduated with Merit)",
            "Comprehensive training in Object-Oriented Programming (Java, Python), Relational Databases (SQL), Web Development (Django), Mobile Applications (Android), and Agile Scrum Project Management."
        )
    ]

    for idx, (degree, institution, period, details) in enumerate(edus):
        cell = edu_tbl.cell(idx, 0)
        set_cell_shading(cell, "F8FAFC")
        set_cell_padding(cell, top=60, bottom=60, left=100, right=100)
        set_cell_border(cell,
                        left={'val': 'single', 'sz': 12, 'color': '2563EB'},
                        bottom={'val': 'single', 'sz': 4, 'color': 'E2E8F0'},
                        top={'val': 'single', 'sz': 4, 'color': 'E2E8F0'},
                        right={'val': 'single', 'sz': 4, 'color': 'E2E8F0'})
        
        p = cell.paragraphs[0]
        p.paragraph_format.space_after = Pt(1)
        r_d = p.add_run(degree)
        r_d.font.bold = True
        r_d.font.size = Pt(10)
        r_d.font.color.rgb = COLOR_PRIMARY

        r_sep = p.add_run("  —  ")
        r_inst = p.add_run(institution)
        r_inst.font.size = Pt(9)
        r_inst.font.color.rgb = COLOR_BODY

        r_prd = p.add_run(f"  ({period})")
        r_prd.font.size = Pt(8.5)
        r_prd.font.bold = True
        r_prd.font.color.rgb = COLOR_ACCENT

        p_det = cell.add_paragraph()
        p_det.paragraph_format.space_after = Pt(0)
        r_det = p_det.add_run(details)
        r_det.font.size = Pt(8.5)
        r_det.font.color.rgb = COLOR_MUTED

    doc.add_paragraph().paragraph_format.space_after = Pt(4)

    # --- PROFESSIONAL EXPERIENCE & TRANSFERABLE BACKGROUND ---
    add_section_header("Professional Background & Engineering Discipline")

    exp_tbl = doc.add_table(rows=2, cols=1)
    exp_tbl.alignment = WD_TABLE_ALIGNMENT.CENTER
    exp_tbl.columns[0].width = Inches(7.1)

    exps = [
        (
            "Site Engineer",
            "Myat Min Construction",
            "Engineering Oversight & Quality Assurance",
            "Supervised physical construction blueprint adherence, conducted daily quality assurance checks, and coordinated schedules across multi-trade teams. Instilled strict problem-solving discipline and structural thinking directly transferable to software architecture."
        ),
        (
            "Senior Sales Executive & Project Lead",
            "Family Retail Business",
            "Stakeholder Relations & Problem Resolution",
            "Directed client relationship workflows, resolved customer challenges, and tracked inventory velocity. Developed high user empathy, active listening, and practical value-driven communication."
        )
    ]

    for idx, (role, org, subtitle, details) in enumerate(exps):
        cell = exp_tbl.cell(idx, 0)
        set_cell_shading(cell, "F8FAFC")
        set_cell_padding(cell, top=60, bottom=60, left=100, right=100)
        set_cell_border(cell,
                        left={'val': 'single', 'sz': 12, 'color': '059669'},
                        bottom={'val': 'single', 'sz': 4, 'color': 'E2E8F0'},
                        top={'val': 'single', 'sz': 4, 'color': 'E2E8F0'},
                        right={'val': 'single', 'sz': 4, 'color': 'E2E8F0'})
        
        p = cell.paragraphs[0]
        p.paragraph_format.space_after = Pt(1)
        r_r = p.add_run(role)
        r_r.font.bold = True
        r_r.font.size = Pt(10)
        r_r.font.color.rgb = COLOR_PRIMARY

        r_sep = p.add_run("  —  ")
        r_org = p.add_run(org)
        r_org.font.size = Pt(9)
        r_org.font.color.rgb = COLOR_BODY

        r_sub = p.add_run(f"  ({subtitle})")
        r_sub.font.size = Pt(8.5)
        r_sub.font.bold = True
        r_sub.font.color.rgb = COLOR_EMERALD

        p_det = cell.add_paragraph()
        p_det.paragraph_format.space_after = Pt(0)
        r_det = p_det.add_run(details)
        r_det.font.size = Pt(8.5)
        r_det.font.color.rgb = COLOR_MUTED

    # Save document
    doc.save(output_path)
    print(f"Modernized DOCX saved successfully to: {output_path}")

if __name__ == "__main__":
    create_modern_docx("D:/Projects/portfolio/Zaw_Myo_Tun_Portfolio.docx")

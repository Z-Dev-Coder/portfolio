import docx
from docx.shared import Inches, Pt, RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.enum.table import WD_TABLE_ALIGNMENT
from docx.oxml import parse_xml
from docx.oxml.ns import nsdecls

def create_modern_docx(output_path):
    doc = docx.Document()

    # Configure 0.6 inch margins all around
    sections = doc.sections
    for s in sections:
        s.top_margin = Inches(0.55)
        s.bottom_margin = Inches(0.55)
        s.left_margin = Inches(0.65)
        s.right_margin = Inches(0.65)
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
    style_normal.paragraph_format.space_after = Pt(2.5)
    style_normal.paragraph_format.space_before = Pt(0)

    def set_cell_shading(cell, hex_color):
        tcPr = cell._tc.get_or_add_tcPr()
        tcPr.append(parse_xml(f'<w:shd {nsdecls("w")} w:fill="{hex_color}"/>'))

    def set_cell_padding(cell, top=80, bottom=80, left=120, right=120):
        tcPr = cell._tc.get_or_add_tcPr()
        tcPr.append(parse_xml(
            f'<w:tcMar {nsdecls("w")}>'
            f'<w:top w:w="{top}" w:type="dxa"/>'
            f'<w:bottom w:w="{bottom}" w:type="dxa"/>'
            f'<w:left w:w="{left}" w:type="dxa"/>'
            f'<w:right w:w="{right}" w:type="dxa"/>'
            f'</w:tcMar>'
        ))

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

    def add_section_header(title):
        tbl = doc.add_table(rows=1, cols=1)
        tbl.alignment = WD_TABLE_ALIGNMENT.CENTER
        tbl.autofit = False
        tbl.columns[0].width = Inches(7.2)
        
        cell = tbl.cell(0, 0)
        set_cell_shading(cell, "F1F5F9")
        set_cell_padding(cell, top=70, bottom=70, left=120, right=120)
        set_cell_border(cell, left={'val': 'single', 'sz': 20, 'color': '2563EB'})
        
        p = cell.paragraphs[0]
        p.paragraph_format.space_before = Pt(0)
        p.paragraph_format.space_after = Pt(0)
        run = p.add_run(title.upper())
        run.font.name = 'Calibri'
        run.font.size = Pt(10.5)
        run.font.bold = True
        run.font.color.rgb = COLOR_PRIMARY

        sp = doc.add_paragraph()
        sp.paragraph_format.space_before = Pt(1)
        sp.paragraph_format.space_after = Pt(2)

    # --- HEADER SECTION (MATCHING RESUME) ---
    header_table = doc.add_table(rows=1, cols=2)
    header_table.alignment = WD_TABLE_ALIGNMENT.CENTER
    header_table.columns[0].width = Inches(4.5)
    header_table.columns[1].width = Inches(2.7)

    cell_left = header_table.cell(0, 0)
    set_cell_padding(cell_left, top=0, bottom=40, left=0, right=40)
    p_name = cell_left.paragraphs[0]
    p_name.paragraph_format.space_after = Pt(1)
    r_name = p_name.add_run("ZAW MYO TUN")
    r_name.font.name = 'Calibri'
    r_name.font.size = Pt(22)
    r_name.font.bold = True
    r_name.font.color.rgb = COLOR_PRIMARY

    p_title = cell_left.add_paragraph()
    p_title.paragraph_format.space_after = Pt(3)
    r_title = p_title.add_run("Junior Software Developer | Python, Django & AI Engineering")
    r_title.font.name = 'Calibri'
    r_title.font.size = Pt(11)
    r_title.font.bold = True
    r_title.font.color.rgb = COLOR_ACCENT

    p_sub = cell_left.add_paragraph()
    p_sub.paragraph_format.space_after = Pt(0)
    r_sub = p_sub.add_run("Higher National Diploma in Software Engineering (EduCLaaS) | BSc Computing Candidate")
    r_sub.font.name = 'Calibri'
    r_sub.font.size = Pt(8.5)
    r_sub.font.italic = True
    r_sub.font.color.rgb = COLOR_MUTED

    cell_right = header_table.cell(0, 1)
    set_cell_padding(cell_right, top=0, bottom=40, left=40, right=0)
    p_contacts = cell_right.paragraphs[0]
    p_contacts.alignment = WD_ALIGN_PARAGRAPH.RIGHT
    p_contacts.paragraph_format.line_spacing = 1.15
    p_contacts.paragraph_format.space_after = Pt(0)

    contacts = [
        ("Location: ", "Mandalay, Myanmar"),
        ("Phone: ", "09-943773771 / 09-793443483"),
        ("Email: ", "zawmyotun.kl@gmail.com"),
        ("GitHub: ", "github.com/Z-Dev-Coder"),
        ("Live Portfolio: ", "z-dev-coder.github.io/portfolio/")
    ]
    for label, val in contacts:
        p_c = cell_right.add_paragraph() if p_contacts.text else p_contacts
        p_c.alignment = WD_ALIGN_PARAGRAPH.RIGHT
        p_c.paragraph_format.space_after = Pt(0.5)
        r_lbl = p_c.add_run(label)
        r_lbl.font.size = Pt(8)
        r_lbl.font.bold = True
        r_lbl.font.color.rgb = COLOR_MUTED
        r_val = p_c.add_run(val)
        r_val.font.size = Pt(8)
        r_val.font.color.rgb = COLOR_PRIMARY

    # --- PROFILE SUMMARY (DIRECT ALIGNMENT WITH RESUME) ---
    tbl_summary = doc.add_table(rows=1, cols=1)
    tbl_summary.alignment = WD_TABLE_ALIGNMENT.CENTER
    tbl_summary.columns[0].width = Inches(7.2)
    c_sum = tbl_summary.cell(0, 0)
    set_cell_shading(c_sum, "F8FAFC")
    set_cell_padding(c_sum, top=80, bottom=80, left=120, right=120)
    set_cell_border(c_sum, 
                    left={'val': 'single', 'sz': 16, 'color': '2563EB'},
                    top={'val': 'single', 'sz': 4, 'color': 'E2E8F0'},
                    right={'val': 'single', 'sz': 4, 'color': 'E2E8F0'},
                    bottom={'val': 'single', 'sz': 4, 'color': 'E2E8F0'})
    
    p_sum = c_sum.paragraphs[0]
    p_sum.paragraph_format.space_after = Pt(0)
    r_sum_bold = p_sum.add_run("Profile: ")
    r_sum_bold.font.bold = True
    r_sum_bold.font.size = Pt(9.2)
    r_sum_bold.font.color.rgb = COLOR_PRIMARY
    
    r_sum_text = p_sum.add_run(
        "Junior Software Developer with a Higher National Diploma in Software Engineering from EduCLaaS, with a strong interest in using modern AI tools to build software faster and smarter. Hands-on experience with Python and Django, and comfortable applying AI tools — such as language models, LangGraph agents, and automation pipelines — to accelerate everyday development work. Currently advancing studies toward a Bachelor's degree (BSc in Computing), with a long-term aspiration of growing into an AI Engineer role. Brings a strong, reliable work ethic carried over from an earlier career in civil engineering oversight and customer-facing roles."
    )
    r_sum_text.font.size = Pt(9)
    r_sum_text.font.color.rgb = COLOR_BODY

    doc.add_paragraph().paragraph_format.space_after = Pt(3)

    # --- TECHNICAL SKILLS, CURRENTLY LEARNING & LANGUAGES (FROM RESUME) ---
    add_section_header("Technical Skills & Competencies")

    skills_tbl = doc.add_table(rows=2, cols=2)
    skills_tbl.alignment = WD_TABLE_ALIGNMENT.CENTER
    for col in skills_tbl.columns:
        col.width = Inches(3.6)

    categories = [
        (
            "CORE TECHNICAL SKILLS (FROM RESUME)",
            [
                ("Programming & Backend", "Python 3.12, Django, Django REST Framework"),
                ("AI & Agentic Systems", "LangGraph, RAG Pipelines, Groq-hosted LLMs, Ollama"),
                ("AI-Assisted Development", "Modern LLM developer tooling, prompt engineering"),
                ("Version Control & Tools", "Git, GitHub Workflows, VS Code, MS Office (Word, PPT, Excel)")
            ]
        ),
        (
            "PROJECT ARCHITECTURES & APIS",
            [
                ("Desktop & Microservices", "Electron.js IPC, FastAPI asynchronous service, PyTorch"),
                ("Multimedia Pipelines", "Faster-Whisper STT, FFmpeg, VoxCPM2 Neural TTS"),
                ("Databases & Vectors", "PostgreSQL, pgvector cosine search, SQLite"),
                ("Frontend & Mobile", "React 19, Vite, Tailwind CSS, Android Java SDK")
            ]
        ),
        (
            "CURRENTLY LEARNING / TRAJECTORY",
            [
                ("AI Engineering", "Production LLM architectures, fine-tuning, system safety"),
                ("Agentic AI Systems", "State machines, tool-calling graphs, multi-agent orchestration"),
                ("LLM Application Design", "Context routing, memory retention, semantic caching"),
                ("Academic Advancement", "BSc in Computing distributed systems coursework")
            ]
        ),
        (
            "LANGUAGES & PERSONAL SKILLS",
            [
                ("Languages", "Myanmar (Native), English (Fair / Working Proficiency)"),
                ("Work Ethic", "Hardworking & honest, punctual, reliable execution"),
                ("Collaboration", "Team player, good communication, agile stand-up contributor"),
                ("Growth Mindset", "Fast learner, self-driven, analytical engineering discipline")
            ]
        )
    ]

    for idx, (cat_title, items) in enumerate(categories):
        r_idx = idx // 2
        c_idx = idx % 2
        cell = skills_tbl.cell(r_idx, c_idx)
        set_cell_shading(cell, "F8FAFC")
        set_cell_padding(cell, top=60, bottom=60, left=80, right=80)
        set_cell_border(cell,
                        top={'val': 'single', 'sz': 4, 'color': 'E2E8F0'},
                        bottom={'val': 'single', 'sz': 4, 'color': 'E2E8F0'},
                        left={'val': 'single', 'sz': 12, 'color': '2563EB' if c_idx == 0 else '4F46E5'},
                        right={'val': 'single', 'sz': 4, 'color': 'E2E8F0'})
        
        p_ct = cell.paragraphs[0]
        p_ct.paragraph_format.space_after = Pt(2)
        r_ct = p_ct.add_run(cat_title)
        r_ct.font.name = 'Calibri'
        r_ct.font.size = Pt(8.8)
        r_ct.font.bold = True
        r_ct.font.color.rgb = COLOR_PRIMARY

        for name, desc in items:
            p_item = cell.add_paragraph()
            p_item.paragraph_format.space_after = Pt(1)
            r_bullet = p_item.add_run("• ")
            r_bullet.font.bold = True
            r_bullet.font.color.rgb = COLOR_ACCENT
            r_bname = p_item.add_run(f"{name}: ")
            r_bname.font.bold = True
            r_bname.font.size = Pt(8.2)
            r_bname.font.color.rgb = COLOR_PRIMARY
            r_bdesc = p_item.add_run(desc)
            r_bdesc.font.size = Pt(8.2)
            r_bdesc.font.color.rgb = COLOR_BODY

    doc.add_paragraph().paragraph_format.space_after = Pt(3)

    # --- FEATURED PROJECTS (ALIGNED TO RESUME & REPOSITORIES) ---
    add_section_header("Software & AI Projects")

    PROJECTS = [
        {
            "name": "AI Content Automation Tool (Recap Studio)",
            "context": "Personal Project | Flagship AI Suite",
            "github": "https://github.com/Z-Dev-Coder/recap-studio",
            "overview": "Desktop multimedia automation suite built with Python, FastAPI, and Electron.js. Automatically transforms raw videos into comprehensive social media kits: Whisper transcription, Gemini AI bilingual narration scripts (English & Burmese), intelligent FFmpeg highlight cuts, and self-hosted VoxCPM2 neural voice cloning at $0 cloud cost.",
            "deliverables": [
                "Built an asynchronous Python FastAPI microservice communicating with an Electron.js frontend via IPC and SSE events.",
                "Integrated Faster-Whisper local speech-to-text with Gemini LLM prompt engineering for bilingual narration scripts.",
                "Engineered an automated FFmpeg multimedia pipeline: video highlight slicing, audio ducking, subtitle burning, and ranked frame thumbnails.",
                "Deployed self-hosted VoxCPM2 voice cloning model with PyTorch CUDA acceleration for high-speed offline narration."
            ],
            "tags": "Python 3.12 | Electron.js | FastAPI | Gemini AI | Whisper | VoxCPM2 | FFmpeg | PyTorch"
        },
        {
            "name": "AI-Powered Customer Support Chatbot (JumpStart)",
            "context": "Academic Capstone Project (HDSE-CPL)",
            "github": "https://github.com/Z-Dev-Coder/JumpStart-AI-Supported-Chatbot",
            "overview": "Enterprise customer support chatbot engineered for JumpStart Retail. Integrates stateful LangGraph agent graphs with PostgreSQL pgvector RAG to accurately ground responses in retail policies, with dynamic real-time escalation to human agents.",
            "deliverables": [
                "Designed and built a customer support chatbot for a retail scenario, integrating an AI language model to understand queries and generate natural replies.",
                "Connected the chatbot to a knowledge base using PostgreSQL pgvector RAG so it pulls accurate store policy information instead of guessing.",
                "Set up logic using LangGraph state machines so the chatbot recognizes complex questions or negative sentiment and automatically hands over to human agents.",
                "Built asynchronous bidirectional agent-user chat channels using Django Channels WebSockets."
            ],
            "tags": "Python 3.12 | Django | LangGraph | pgvector RAG | PostgreSQL | WebSockets"
        },
        {
            "name": "Charity Meal Delivery Web Application (MerryMeal)",
            "context": "Academic Project | Agile/Scrum Team of 5 | Role: Developer",
            "github": "https://github.com/Z-Dev-Coder/MerryMeal",
            "overview": "Role-based Django web platform for Meals on Wheels charity, delivered by a 5-member Agile Scrum team (Tech Titans). Coordinates member registrations, donor contributions, kitchen food preparation, and volunteer delivery dispatching.",
            "deliverables": [
                "Worked in a small Agile team of 5, joining daily stand-ups, 2-week sprints, and backlog grooming to deliver features incrementally.",
                "Developed features for a role-based Django web application (Members, Caregivers, Kitchens, Volunteers, Donors).",
                "Implemented 10km GIS geofenced delivery logistics validating hot meals on weekdays vs frozen meal packages on weekends.",
                "Contributed to the team's proposal report, Software Requirements Specification (SRS), and UML design documents."
            ],
            "tags": "Python | Django | Role-Based Access (RBAC) | GIS Logistics | SQLite | Agile Scrum"
        },
        {
            "name": "Adaptive AI Language Learning Platform (English Coach)",
            "context": "Personal AI EdTech Platform",
            "github": "https://github.com/Z-Dev-Coder/english-coach",
            "overview": "Full-stack educational application that evaluates student English responses across an 8-skill CEFR matrix and generates personalized drills using local Ollama and Groq-hosted LLMs at zero cloud subscription cost.",
            "deliverables": [
                "Deployed local Ollama and Groq-hosted LLMs for instant grammar explanations while maintaining user data privacy.",
                "Architected an 8-skill CEFR diagnostic matrix evaluating grammar, vocabulary, fluency, and reading comprehension.",
                "Engineered a Speaking Script Studio generating conversational cadence and oral practice scripts.",
                "Built a modern React single-page frontend styled with Tailwind CSS, connected to a modular Django REST API."
            ],
            "tags": "React 19 | Django REST Framework | Groq LLMs | Ollama | Tailwind CSS | Python"
        },
        {
            "name": "DoBu Martial Arts & Fitness Academy Portal",
            "context": "Academic Front-End Module (HDSE-FED)",
            "github": "https://github.com/Z-Dev-Coder/DoBuMartialArts",
            "live": "https://z-dev-coder.github.io/DoBuMartialArts/",
            "overview": "High-performance responsive multi-page web platform for a martial arts academy, featuring interactive membership fee calculators and class schedules.",
            "deliverables": [
                "Engineered interactive client-side fee calculator with dynamic add-on selections and tiered membership plans.",
                "Built responsive schedule viewer with filterable martial arts disciplines and trainer rosters.",
                "Deployed global static hosting on GitHub Pages with clean cross-device mobile responsiveness."
            ],
            "tags": "JavaScript ES6 | HTML5 Semantic UI | CSS3 Flexbox/Grid | GitHub Pages"
        },
        {
            "name": "Silent Library Management System",
            "context": "Academic Web Development Module (WDF)",
            "github": "https://github.com/Z-Dev-Coder/silentlibrary",
            "overview": "Full-stack academic library information system handling book catalogs, loan checkouts, member reviews, and automated fine calculations.",
            "deliverables": [
                "Designed normalized relational database models with strict foreign-key integrity for loans, members, and books.",
                "Programmed automated fine calculation engine based on loan duration and return timestamps.",
                "Configured SMTP email integration to dispatch real-time loan receipts, reservation notices, and overdue reminders."
            ],
            "tags": "Django | Python | SQLite | SMTP Notifications | Bootstrap 5"
        },
        {
            "name": "Math Quiz Educational Mobile App",
            "context": "Academic BTEC Unit 7: Mobile Apps Development",
            "github": "https://github.com/Z-Dev-Coder/Math-Quiz-Mobile-App",
            "overview": "Native Android mental arithmetic game featuring 3 timed challenge tiers, randomized math generation, and local database persistence.",
            "deliverables": [
                "Engineered native Android activity lifecycle management with countdown timer mechanics in Java OOP.",
                "Structured 3 progressive difficulty tiers (Novice, Adept, Master) with visual progress meters and audio feedback.",
                "Integrated local SQLite database to persist player high scores, accuracy statistics, and game history."
            ],
            "tags": "Android SDK | Java | SQLite | Android Studio | BTEC Unit 7"
        }
    ]

    for p in PROJECTS:
        p_tbl = doc.add_table(rows=1, cols=1)
        p_tbl.alignment = WD_TABLE_ALIGNMENT.CENTER
        p_tbl.columns[0].width = Inches(7.2)
        
        c = p_tbl.cell(0, 0)
        set_cell_shading(c, "FAFAFA")
        set_cell_padding(c, top=60, bottom=60, left=100, right=100)
        set_cell_border(c,
                        left={'val': 'single', 'sz': 16, 'color': '2563EB'},
                        top={'val': 'single', 'sz': 4, 'color': 'E2E8F0'},
                        bottom={'val': 'single', 'sz': 4, 'color': 'E2E8F0'},
                        right={'val': 'single', 'sz': 4, 'color': 'E2E8F0'})
        
        p_title = c.paragraphs[0]
        p_title.paragraph_format.space_after = Pt(1)
        r_pname = p_title.add_run(p['name'])
        r_pname.font.name = 'Calibri'
        r_pname.font.size = Pt(10)
        r_pname.font.bold = True
        r_pname.font.color.rgb = COLOR_PRIMARY
        
        r_sep = p_title.add_run("  |  ")
        r_sep.font.color.rgb = COLOR_MUTED

        r_pctx = p_title.add_run(p['context'])
        r_pctx.font.name = 'Calibri'
        r_pctx.font.size = Pt(8.5)
        r_pctx.font.italic = True
        r_pctx.font.color.rgb = COLOR_ACCENT

        # Links line
        p_lnk = c.add_paragraph()
        p_lnk.paragraph_format.space_after = Pt(2)
        r_lbl1 = p_lnk.add_run("Repository: ")
        r_lbl1.font.size = Pt(8)
        r_lbl1.font.bold = True
        r_lbl1.font.color.rgb = COLOR_MUTED
        r_url1 = p_lnk.add_run(p['github'])
        r_url1.font.size = Pt(8)
        r_url1.font.color.rgb = COLOR_ACCENT
        r_url1.font.underline = True

        if 'live' in p:
            r_sep2 = p_lnk.add_run("   |   Live Demo: ")
            r_sep2.font.size = Pt(8)
            r_sep2.font.bold = True
            r_sep2.font.color.rgb = COLOR_MUTED
            r_url2 = p_lnk.add_run(p['live'])
            r_url2.font.size = Pt(8)
            r_url2.font.color.rgb = COLOR_EMERALD
            r_url2.font.underline = True

        # Overview
        p_ov = c.add_paragraph()
        p_ov.paragraph_format.space_after = Pt(2)
        r_ov = p_ov.add_run(p['overview'])
        r_ov.font.size = Pt(8.5)
        r_ov.font.color.rgb = COLOR_BODY

        # Deliverables bullets
        for item in p['deliverables']:
            p_d = c.add_paragraph()
            p_d.paragraph_format.space_after = Pt(1)
            p_d.paragraph_format.left_indent = Inches(0.12)
            r_b = p_d.add_run("• ")
            r_b.font.bold = True
            r_b.font.color.rgb = COLOR_ACCENT
            r_txt = p_d.add_run(item)
            r_txt.font.size = Pt(8.2)
            r_txt.font.color.rgb = COLOR_BODY

        # Tech stack footer pill
        p_tg = c.add_paragraph()
        p_tg.paragraph_format.space_before = Pt(1.5)
        p_tg.paragraph_format.space_after = Pt(0)
        r_tg_lbl = p_tg.add_run("Tech Stack: ")
        r_tg_lbl.font.size = Pt(7.8)
        r_tg_lbl.font.bold = True
        r_tg_lbl.font.color.rgb = COLOR_MUTED
        r_tg_val = p_tg.add_run(p['tags'])
        r_tg_val.font.size = Pt(7.8)
        r_tg_val.font.color.rgb = COLOR_PRIMARY

        doc.add_paragraph().paragraph_format.space_after = Pt(2)

    # --- WORK EXPERIENCE (EXACT MATCH TO RESUME) ---
    add_section_header("Work Experience")

    exp_tbl = doc.add_table(rows=4, cols=1)
    exp_tbl.alignment = WD_TABLE_ALIGNMENT.CENTER
    exp_tbl.columns[0].width = Inches(7.2)

    exps = [
        (
            "Site Engineer",
            "Innovate Myanmar Forward Co., Ltd.",
            "2020 – 2021",
            "Supervised on-site construction blueprint compliance, conducted quality assurance inspections, and coordinated schedules across contractor teams. Cultivated structural thinking, disciplined task execution, and problem resolution under tight deadlines."
        ),
        (
            "Site Engineer",
            "AM Construction Group",
            "2018 – 2019",
            "Assisted in structural site operations, tracked material inventory and workmanship standards, and maintained daily progress reports. Built strong habits of rigor, precision, and adherence to technical specifications."
        ),
        (
            "Salesman",
            "Shin Shin Rice Selling Shop",
            "2021 – 2022",
            "Managed front-line customer transactions, client communication, and inventory reconciliation. Developed high active listening, empathy for user needs, and practical problem resolution."
        ),
        (
            "Salesman",
            "Power Used Laptop Sales & Service Centre",
            "2013 – 2014",
            "Advised customers on computer hardware and laptop specifications, handled diagnostic inquiries, and managed stock. Developed foundational technical literacy and customer-facing communication skills."
        )
    ]

    for idx, (role, org, period, details) in enumerate(exps):
        cell = exp_tbl.cell(idx, 0)
        set_cell_shading(cell, "F8FAFC")
        set_cell_padding(cell, top=50, bottom=50, left=90, right=90)
        set_cell_border(cell,
                        left={'val': 'single', 'sz': 12, 'color': '059669'},
                        bottom={'val': 'single', 'sz': 4, 'color': 'E2E8F0'},
                        top={'val': 'single', 'sz': 4, 'color': 'E2E8F0'},
                        right={'val': 'single', 'sz': 4, 'color': 'E2E8F0'})
        
        p = cell.paragraphs[0]
        p.paragraph_format.space_after = Pt(0.5)
        r_r = p.add_run(role)
        r_r.font.bold = True
        r_r.font.size = Pt(9.5)
        r_r.font.color.rgb = COLOR_PRIMARY

        r_sep = p.add_run("  —  ")
        r_org = p.add_run(org)
        r_org.font.size = Pt(8.8)
        r_org.font.color.rgb = COLOR_BODY

        r_prd = p.add_run(f"  ({period})")
        r_prd.font.size = Pt(8.2)
        r_prd.font.bold = True
        r_prd.font.color.rgb = COLOR_EMERALD

        p_det = cell.add_paragraph()
        p_det.paragraph_format.space_after = Pt(0)
        r_det = p_det.add_run(details)
        r_det.font.size = Pt(8.2)
        r_det.font.color.rgb = COLOR_MUTED

    doc.add_paragraph().paragraph_format.space_after = Pt(3)

    # --- EDUCATION (EXACT MATCH TO RESUME) ---
    add_section_header("Education")

    edu_tbl = doc.add_table(rows=3, cols=1)
    edu_tbl.alignment = WD_TABLE_ALIGNMENT.CENTER
    edu_tbl.columns[0].width = Inches(7.2)

    edus = [
        (
            "Higher National Diploma (HND), Software Engineering",
            "EduCLaaS, Myanmar",
            "2024 – Aug 2026",
            "Comprehensive program covering Object-Oriented Programming (Java, Python), Relational Databases (SQL), Web Development (Django), Mobile Applications (Android), Agile Scrum Project Management, and Software Design Documentation (Graduated with Merit)."
        ),
        (
            "Bachelor's Degree in Computing",
            "EduCLaaS Academy",
            "Currently studying (In Progress)",
            "Advancing toward a Bachelor's degree in Computing / Software Engineering, focusing on distributed systems architecture and intelligent software design."
        ),
        (
            "Civil Engineering (not completed)",
            "Technological University, Myanmar",
            "2014 – 2020",
            "Completed rigorous engineering coursework through the first semester of final year, building a strong foundation in engineering mathematics, structural mechanics, and analytical systems thinking before committing fully to software engineering."
        )
    ]

    for idx, (degree, institution, period, details) in enumerate(edus):
        cell = edu_tbl.cell(idx, 0)
        set_cell_shading(cell, "F8FAFC")
        set_cell_padding(cell, top=50, bottom=50, left=90, right=90)
        set_cell_border(cell,
                        left={'val': 'single', 'sz': 12, 'color': '2563EB'},
                        bottom={'val': 'single', 'sz': 4, 'color': 'E2E8F0'},
                        top={'val': 'single', 'sz': 4, 'color': 'E2E8F0'},
                        right={'val': 'single', 'sz': 4, 'color': 'E2E8F0'})
        
        p = cell.paragraphs[0]
        p.paragraph_format.space_after = Pt(0.5)
        r_d = p.add_run(degree)
        r_d.font.bold = True
        r_d.font.size = Pt(9.5)
        r_d.font.color.rgb = COLOR_PRIMARY

        r_sep = p.add_run("  —  ")
        r_inst = p.add_run(institution)
        r_inst.font.size = Pt(8.8)
        r_inst.font.color.rgb = COLOR_BODY

        r_prd = p.add_run(f"  ({period})")
        r_prd.font.size = Pt(8.2)
        r_prd.font.bold = True
        r_prd.font.color.rgb = COLOR_ACCENT

        p_det = cell.add_paragraph()
        p_det.paragraph_format.space_after = Pt(0)
        r_det = p_det.add_run(details)
        r_det.font.size = Pt(8.2)
        r_det.font.color.rgb = COLOR_MUTED

    # Save document
    doc.save(output_path)
    print(f"Resume-aligned DOCX saved successfully to: {output_path}")

if __name__ == "__main__":
    create_modern_docx("D:/Projects/portfolio/Zaw_Myo_Tun_Portfolio.docx")

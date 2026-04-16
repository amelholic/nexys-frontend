# Process Mapping for AI Workshop
## Facilitator Guide

---

## Overview

**Purpose**: Deep-dive on a single process to prepare it for AI automation. Produce enough detail to spec an agent.

**Duration**: Full day (6-7 hours)

**Outcome**: Complete process specification including current state map, decision rules, exception catalogue, data flows, and draft agent specification.

**Ideal Participants**: 4-6 people who actually do or manage the process, plus IT/systems representative.

**Prerequisites**: 
- Process has been identified as a good AI candidate (e.g., from Opportunity Assessment)
- Key participants have been briefed on the goal
- Sample documents/data are available

---

## Workshop Flow

| Time | Duration | Section | Purpose |
|------|----------|---------|---------|
| 9:00 | 30 min | Welcome & Setup | Introductions, goals, ground rules |
| 9:30 | 90 min | Current State Mapping | Map the process end-to-end |
| 11:00 | 15 min | Break | |
| 11:15 | 60 min | Volume & Timing Analysis | Understand quantities, durations, patterns |
| 12:15 | 45 min | Lunch | |
| 13:00 | 75 min | Decision Rules Deep-Dive | Document every decision point |
| 14:15 | 15 min | Break | |
| 14:30 | 60 min | Exception Catalogue | Identify and categorise all exceptions |
| 15:30 | 45 min | Data & Systems Mapping | Map data flows and system touchpoints |
| 16:15 | 15 min | Break | |
| 16:30 | 45 min | Future State & Agent Spec | Design the automated future |
| 17:15 | 15 min | Wrap-Up | Summary, next steps |

**Total**: ~7 hours (with breaks and lunch)

---

## Pre-Workshop Preparation

### 1-2 Weeks Before

- [ ] Confirm the specific process to be mapped
- [ ] Identify and invite participants (process experts are critical)
- [ ] Send calendar invite with agenda and pre-work
- [ ] Request sample documents:
  - 5-10 examples of typical inputs (documents, emails, forms)
  - Examples of exceptions or edge cases
  - Any existing process documentation
- [ ] Book room with large whiteboard or multiple flip charts
- [ ] Prepare digital workspace (Miro, Lucidchart, or similar)

### Pre-Work for Participants

Ask participants to:
1. Bring 3-5 examples of typical work items they process
2. Note down the most common exceptions they encounter
3. Think about: "What takes the most time?" and "What goes wrong?"

### Day Before

- [ ] Print participant workbooks
- [ ] Set up room with supplies:
  - Large whiteboard or butcher paper for process map
  - Sticky notes (multiple colours)
  - Markers
  - Sample documents printed
- [ ] Set up digital workspace
- [ ] Review any pre-work submissions

### Materials Needed

- Slide deck (minimal - mostly facilitation)
- Participant workbooks
- Process mapping supplies (sticky notes, markers, whiteboard)
- Sample documents
- Timer
- Camera/phone to photograph whiteboard work

---

## Section-by-Section Facilitation Notes

### 1. Welcome & Setup (30 min)

**Goal**: Set context, introduce approach, establish ground rules.

**Facilitator Script**:
> "Today we're going to map out [process name] in enough detail that we could hand it to someone — or an AI agent — and they could do it.
>
> We need your expertise. You know this process better than anyone. My job is to ask the questions and capture the answers.
>
> By the end of today, we'll have:
> - A complete map of how the process works today
> - All the decision rules documented
> - A catalogue of exceptions and edge cases
> - A draft specification for what an AI agent would do
>
> Ground rules:
> - There are no stupid questions
> - We want the reality, not the 'official' version
> - Tangents are okay if they're relevant
> - Phones on silent please"

**Activity**: Quick round of introductions
- Name, role
- How long they've been doing this process
- One thing they wish was easier about it

**Capture** the "wish list" items — these hint at pain points.

---

### 2. Current State Mapping (90 min)

**Goal**: Create a complete visual map of the process as it works today.

**Approach**: Build the map collaboratively on whiteboard/Miro

**Step 1: Identify the Trigger (10 min)**
> "What kicks off this process? What's the very first thing that happens?"

Common triggers:
- Email arrives
- Document received
- Request submitted
- Time-based (daily, weekly)
- System event

**Step 2: Walk Through Step by Step (60 min)**

For each step, capture:
- **What** happens (action)
- **Who** does it (role)
- **Where** it happens (system/location)
- **How long** it takes
- **What can go wrong**

Use swim lanes if multiple roles are involved.

**Prompting Questions**:
- "Then what happens?"
- "Who does that?"
- "Where do you do that? Which system?"
- "How do you know when to move to the next step?"
- "What do you do if X happens?"
- "Is that always the case, or does it vary?"

**Step 3: Identify Decision Points (20 min)**

Mark every point where a decision is made:
- Approval/rejection
- Routing decisions
- Validation checks
- Escalation triggers

Use a different colour sticky note for decisions.

**Facilitator Tips**:
- Don't worry about making it perfect — capture now, refine later
- Take photos regularly in case sticky notes fall off
- Note disagreements — they reveal variation in the process
- Ask "Is that documented anywhere?" for each rule

---

### 3. Break (15 min)

**Facilitator Action**:
- Photograph the current process map
- Start transferring to digital format if possible
- Note any gaps or questions to clarify

---

### 4. Volume & Timing Analysis (60 min)

**Goal**: Understand the quantitative aspects of the process.

**Work Through the Workbook Section Together**:

**A. Volume (15 min)**
- How many items processed per day/week/month?
- Is volume consistent or variable?
- Peak times? (end of month, seasonal)
- Trend over time? (growing, stable, declining)

**B. Timing (20 min)**
For each major step in the process:
- How long does it typically take?
- What's the range (fastest to slowest)?
- What causes the variation?

Calculate:
- Total cycle time (trigger to completion)
- Total touch time (actual work time)
- Wait time (time spent queuing/waiting)

**C. Patterns (15 min)**
- When do items arrive? (time of day, day of week)
- Are there patterns in the types of items?
- Complexity distribution — what % are simple vs complex?

**D. Current Metrics (10 min)**
- What metrics exist today?
- What's the current accuracy/error rate?
- What's the current SLA or target?

**Output**: Completed volume/timing table in workbook

---

### 5. Lunch (45 min)

**Facilitator Action**:
- Refine the process map
- Prepare for decision rules deep-dive
- Review sample documents

---

### 6. Decision Rules Deep-Dive (75 min)

**Goal**: Document every decision rule in explicit, unambiguous terms.

**This is the most critical section for AI automation.**

**For Each Decision Point Identified**:

**A. State the Decision (5 min each)**
- What question is being answered?
- What are the possible outcomes?

**B. Document the Rules (10 min each)**

Use the format:
```
IF [condition] THEN [action]
ELSE IF [condition] THEN [action]
ELSE [default action]
```

**Example**:
```
IF invoice amount < $1,000 AND vendor is approved AND PO exists
THEN auto-approve
ELSE IF invoice amount < $5,000 AND vendor is approved
THEN route to team lead for approval
ELSE route to manager for approval
```

**Prompting Questions**:
- "What do you look at to make this decision?"
- "What makes you choose option A vs option B?"
- "Are there any exceptions to that rule?"
- "What if [edge case]? What would you do?"
- "Is that written down anywhere, or is it just known?"
- "Do different people do this differently?"

**C. Identify Information Sources**
- Where does the information come from to make this decision?
- Is it always available?
- How reliable is it?

**D. Capture Confidence Level**
For each rule:
- How confident are you this is complete?
- What percentage of cases does this cover?
- What's missing?

**Output**: Decision rules table in workbook

**Red Flags to Listen For**:
- "It depends" (dig deeper — depends on what?)
- "You just know" (there's a hidden rule)
- "Sometimes we..." (indicates variation)
- "The experienced people know..." (undocumented knowledge)

---

### 7. Break (15 min)

**Facilitator Action**:
- Review captured decision rules
- Identify any gaps or contradictions
- Prepare exception catalogue template

---

### 8. Exception Catalogue (60 min)

**Goal**: Identify and categorise every exception and edge case.

**Step 1: Brainstorm Exceptions (20 min)**

Ask each participant to write down:
- Exceptions they encounter regularly
- Edge cases that are tricky
- Things that make them think "this is weird"
- Items that get escalated

Collect all on whiteboard/Miro.

**Step 2: Categorise (15 min)**

Group exceptions into categories:
- **Data exceptions** (missing info, wrong format, conflicting data)
- **Rule exceptions** (doesn't fit normal rules, needs judgment)
- **System exceptions** (system down, can't access, integration failure)
- **Timing exceptions** (urgent, late, deadline-related)
- **Stakeholder exceptions** (special customer, executive request)

**Step 3: Analyse Each Exception (25 min)**

For each exception category:
- How often does it occur? (% of total volume)
- What's the current handling process?
- Could it be handled by rules? Or does it need human judgment?
- What's the cost/impact of getting it wrong?

**Classification for AI**:
- **Automate**: Can be handled by rules
- **Assist**: AI can prepare/recommend, human approves
- **Escalate**: Must go to human
- **Prevent**: Can we stop this exception from occurring?

**Output**: Completed exception catalogue in workbook

---

### 9. Data & Systems Mapping (45 min)

**Goal**: Map all data inputs, outputs, and system touchpoints.

**A. Input Data Inventory (15 min)**

For each input document/data source:
- What is it? (invoice, email, form, etc.)
- What format? (PDF, email, spreadsheet, etc.)
- What data fields are extracted?
- How consistent is the format?
- Source system?

**B. Output Data Inventory (10 min)**

What data is created or updated:
- What fields?
- Which system(s)?
- What format?

**C. System Touchpoints (10 min)**

Map all systems involved:
- Source systems (where data comes from)
- Processing systems (where work is done)
- Destination systems (where results go)
- Integration points (how systems connect)

**D. Data Flow Diagram (10 min)**

Draw a simple diagram showing:
- Data sources → Process → Data destinations
- System to system flows
- Manual handoffs

**Output**: Data inventory and flow diagram in workbook

---

### 10. Break (15 min)

**Facilitator Action**:
- Photograph all work
- Review completeness
- Prepare future state discussion

---

### 11. Future State & Agent Spec (45 min)

**Goal**: Design what the AI-assisted process will look like.

**Step 1: Define the Target (10 min)**

What should the AI agent do?
- Full automation (no human touch for standard cases)?
- Assisted automation (AI prepares, human approves)?
- Triage and routing only?

What's the success criteria?
- % of items fully automated
- Time savings
- Accuracy requirements

**Step 2: Draw the Future State (15 min)**

Sketch the new process:
- What steps does the agent handle?
- Where are the human touchpoints?
- What's the escalation path?
- What's the exception handling?

**Step 3: Draft Agent Specification (20 min)**

Capture in workbook:

**Agent Overview**
- Name/identifier
- Primary function
- Scope (what's in, what's out)

**Inputs**
- What the agent receives
- Trigger conditions

**Processing**
- Key decisions the agent makes
- Rules it follows
- Tools/systems it uses

**Outputs**
- What the agent produces
- Where results go
- Notifications/alerts

**Human Touchpoints**
- When humans are involved
- Approval thresholds
- Escalation triggers

**Success Metrics**
- How we'll measure success
- Target performance levels

**Output**: Draft agent specification in workbook

---

### 12. Wrap-Up (15 min)

**Goal**: Summarise, confirm next steps, close.

**Activity**: Quick review of what we captured

Walk through:
1. Process map — "Does this accurately reflect how it works today?"
2. Decision rules — "Have we captured the key rules?"
3. Exceptions — "Are we missing any major exceptions?"
4. Agent spec — "Does this target make sense?"

**Confirm Next Steps**:
1. Nexys to produce Process Specification document (1 week)
2. Review session to validate documentation
3. [If proceeding] Technical discovery with IT
4. Proposal for build phase

**Thank Participants**:
> "Thank you for your time and expertise today. This is exactly what we needed to move forward. The knowledge in this room is invaluable — we couldn't build an effective agent without it."

**Capture**:
- Any open questions
- Items needing follow-up
- Who to contact for clarifications

---

## Post-Workshop

### Same Day
- [ ] Photograph all whiteboard work
- [ ] Back up digital workspace
- [ ] Send thank-you email to participants

### Within 3 Days
- [ ] Transfer all notes to digital format
- [ ] Create clean process flow diagram
- [ ] Compile decision rules into structured format

### Within 1 Week
- [ ] Complete Process Specification document
- [ ] Send to client for review
- [ ] Schedule validation session

### Process Specification Document Should Include
1. Executive Summary
2. Process Overview (scope, trigger, actors)
3. Current State Process Map
4. Volume and Timing Analysis
5. Decision Rules (structured format)
6. Exception Catalogue
7. Data and Systems Inventory
8. Future State Design
9. Draft Agent Specification
10. Recommendations and Next Steps

---

## Facilitation Tips

### Handling Common Challenges

| Challenge | Solution |
|-----------|----------|
| **Participant doesn't know details** | Ask "Who would know?" and note for follow-up |
| **Disagreement about how process works** | Capture both versions, note it's a variation |
| **Getting too detailed too early** | "Let's capture that as a note and come back to it" |
| **Process has many variations** | Map the most common path first, then variations |
| **Sensitive information** | Remind about confidentiality, use generic examples |
| **Energy dropping after lunch** | More interactive activities, shorter sections |
| **Running behind schedule** | Prioritise decision rules and exceptions over polish |

### Questions That Unlock Detail

- "Walk me through the last one you did"
- "What would a new person need to know?"
- "What do you check first?"
- "How do you know when you're done?"
- "What makes you confident it's right?"
- "What's the worst that could happen if this went wrong?"

---

*Nexys Process Mapping for AI Workshop — Facilitator Guide v1.0*

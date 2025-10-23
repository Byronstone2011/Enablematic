# Enablematic: Complete System Overview

## What This System Does

Enablematic turns a list of business websites into personalized outreach campaigns automatically.

**The full flow:**
1. You add website URLs to a spreadsheet
2. System scrapes each site and analyzes the business + design
3. AI generates custom websites for qualified leads
4. System writes personalized outreach messages
5. Campaigns go out through your email tool

**Result:** From raw lead list to personalized outreach in minutes, not days.

---

## The Complete Flow

```
Google Sheets (Lead List)
         ↓
    n8n Workflow
    (Scrape + Analyze)
         ↓
Google Sheets (Enriched Data)
         ↓
   Replit Agent
   (Generate Websites)
         ↓
 GitHub (Published Sites)
         ↓
  ChatGPT (Write Messages)
         ↓
   Instantly.ai (Send)
```

---

## Component 1: n8n Workflow (Data Collection)

**What it does:** Takes website URLs and turns them into structured business intelligence.

### The Process

**Input:** List of website URLs in Google Sheets "Leads" tab

**Steps:**
1. **Scrape Website** (Apify)
   - Takes screenshot of the site
   - Extracts all text content
   - Grabs metadata

2. **Design Analysis** (Claude AI + Screenshot)
   - Evaluates visual quality (0-100 score)
   - Extracts brand colors
   - Identifies design era (modern/dated/outdated)
   - Spots improvement opportunities
   - Determines redesign priority

3. **Business Analysis** (OpenAI + Content)
   - Identifies industry and services
   - Finds pain points
   - Spots automation opportunities
   - Calculates lead score (0-100)
   - Determines if they're a good fit

**Output:** Structured data written to two Google Sheets tabs:
- **Business Tab:** Company info, services, lead score, fit assessment
- **Design Tab:** Visual quality, brand colors, redesign priority

**Why this matters:** You know exactly who to target and what their problems are before you ever reach out.

---

## Component 2: Replit Agent (Website Generation)

**What it does:** Reads enriched lead data, generates custom websites automatically, and publishes them live.

### The Process

**Input:** Enriched data from Google Sheets (3-way join of Leads + Business + Design tabs)

**Filtering:**
- Lead score must be 75 or higher
- Design quality score below 70 (worse sites = bigger opportunity)

**Steps:**

1. **Load Configuration** (from Google Sheets Config tab)
   - Scoring thresholds
   - GitHub settings
   - Processing limits
   - Template preferences

2. **Generate AI Copy** (GPT-4o)
   - Creates 50+ content fields
   - Hero section with numeric highlights ("18+ years", "24/7 support")
   - 3 value pillars
   - 3 service offerings
   - Story section
   - Testimonials
   - SEO metadata
   - **Result:** Professional copy tailored to their business

3. **Find Images** (Pexels + Unsplash)
   - Hero image (industry-specific)
   - Story image
   - Testimonial avatars
   - Fallback to generic if specific search fails

4. **Select Template** (AI-powered)
   - Analyzes industry and brand
   - Chooses best-fit template (currently: Harbor & Pine for restaurants/hospitality)
   - Customizes with brand colors from design analysis

5. **Generate Website** (React)
   - Single-page responsive site
   - Injects all copy and images
   - Custom brand colors
   - Mobile-optimized
   - SEO-ready

6. **Publish to GitHub**
   - Commits to repository: `Byronstone2011/Enablematic`
   - Creates subdirectory for each company
   - **Public URL:** `https://demo.enablematic.io/{company-name}/index.html`

7. **Log Results**
   - Success/failure status
   - Website URL
   - Timestamp
   - Saves to Google Sheets Results tab

**Output:**
- Live website for each qualified lead
- Public URL ready to include in outreach
- All data logged in spreadsheet

**Why this matters:** You can show prospects "here's what your new site could look like" instead of just talking about it. Proof beats promises.

---

## Component 3: Outreach Pipeline (Personalization + Delivery)

**What it does:** Takes the generated websites and lead intelligence, writes custom messages, and sends campaigns.

### The Process

**Input:**
- Website URLs from Replit agent
- Business intelligence from n8n workflow
- Lead contact info from Google Sheets

**Steps:**

1. **Message Personalization** (ChatGPT)
   - Reads lead's business details
   - References specific pain points found during analysis
   - Includes link to custom-generated website
   - Writes in your voice and positioning
   - **Result:** Each message feels 1-on-1, not templated

2. **Campaign Delivery** (Instantly.ai via n8n)
   - Imports personalized messages
   - Sets up drip sequences
   - Tracks opens, clicks, replies
   - Manages follow-ups

**Output:** Personalized outreach campaigns running on autopilot

**Why this matters:** High-converting outreach at scale. Personal touch without manual work.

---

## How to Use the System

### Step 1: Add Leads
1. Open Google Sheets: `Byron-Lead-List`
2. Go to "Leads" tab
3. Add website URLs (one per row)
4. Mark "Scraped?" column as empty

### Step 2: Run n8n Workflow
1. Open n8n workflow: "Website_Scraper"
2. Click "Execute workflow"
3. Wait for completion (2-3 minutes per lead)
4. Check "Business" and "Design" tabs for results

### Step 3: Generate Websites
**Automatic:** Replit agent runs daily at 9 AM PT

**Manual trigger:**
```bash
curl -X POST http://localhost:5000/api/workflows/websiteGenerationWorkflow/start-async
```

**What happens:**
- Agent processes all qualified leads
- Generates websites
- Publishes to GitHub
- Logs results

### Step 4: Monitor Progress
**Check these Google Sheets tabs:**
- **Copy:** Review AI-generated website copy
- **Results:** See website URLs and status
- **Log:** Workflow run summaries

**Check GitHub:**
- Repository: `Byronstone2011/Enablematic`
- Each company has a subdirectory with their site

### Step 5: Launch Outreach
1. Review generated websites
2. Pull lead data + website URLs
3. ChatGPT writes personalized messages (using lead intelligence)
4. Import to Instantly.ai campaign
5. Launch campaign

---

## System Architecture

### Data Flow Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                        GOOGLE SHEETS                             │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐       │
│  │  Leads   │  │ Business │  │  Design  │  │  Config  │       │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘       │
└───────┬──────────────┬──────────────┬──────────────────────────┘
        │              │              │
        │              │              │
┌───────▼──────┐       │              │
│              │       │              │
│  n8n WORKFLOW│       │              │
│              │       │              │
│  • Apify     │───────┼──────────────┘
│  • Claude AI │       │
│  • OpenAI    │       │
│              │       │
└───────┬──────┘       │
        │              │
        └──────────────▼───────────────────────────────────────────┐
                                                                    │
                       REPLIT AGENT (Enablematic)                  │
                                                                    │
                       • Configuration loading                     │
                       • Data join & filtering                     │
                       • AI copywriting (GPT-4o)                   │
                       • Image search (Pexels/Unsplash)            │
                       • Template selection                        │
                       • React website generation                  │
                       • GitHub publishing                         │
                                                                    │
┌───────────────────────────────┬───────────────────────────────────┘
│                               │
│                               ▼
│                    ┌─────────────────────┐
│                    │                     │
│                    │  GITHUB REPOSITORY  │
│                    │                     │
│                    │  Published Websites │
│                    │                     │
│                    └──────────┬──────────┘
│                               │
│                               │
└───────────────────────────────┼───────────────────────────────────┐
                                │                                    │
                                ▼                                    │
                    ┌─────────────────────┐                         │
                    │                     │                         │
                    │  CHATGPT PROMPTS    │                         │
                    │                     │                         │
                    │  • Read lead data   │◄────────────────────────┘
                    │  • Generate message │
                    │  • Personalize      │
                    │                     │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │                     │
                    │   INSTANTLY.AI      │
                    │                     │
                    │  Campaign Delivery  │
                    │                     │
                    └─────────────────────┘
```

### Key Integration Points

**n8n → Google Sheets**
- Writes Business analysis
- Writes Design analysis
- Updates lead status

**Google Sheets → Replit Agent**
- Reads Leads, Business, Design tabs (3-way join)
- Reads Config tab for settings
- Writes Copy tab (generated content)
- Writes Results tab (website URLs)
- Writes Log tab (run summaries)

**Replit Agent → GitHub**
- Commits website files
- Creates subdirectories
- Pushes to main branch

**Google Sheets → ChatGPT → Instantly.ai**
- Manual or automated message generation
- Campaign import via n8n connector

---

## Configuration

All settings live in Google Sheets "Config" tab. No code changes needed.

### Key Settings

| Setting | Default | What It Does |
|---------|---------|--------------|
| `min_lead_score` | 75 | Only process leads with score 75+ |
| `max_visual_quality_score` | 70 | Only process sites with design score below 70 |
| `max_websites_per_run` | unlimited | Limit how many sites to generate per run |
| `auto_publish` | yes | Automatically publish to GitHub |
| `ai_model` | gpt-4o | Which AI model for copywriting |
| `github_repo` | Enablematic | Where to publish websites |
| `base_domain` | demo.enablematic.io | Public URL domain |

**To change settings:** Just edit the Config tab. Changes apply immediately.

---

## Common Issues & Fixes

### Issue: "No qualifying businesses found"

**Cause:** No leads meet filter criteria or Regenerate flag not set

**Fix:**
- Check lead scores in Business tab (need 75+)
- Check design scores in Design tab (need below 70)
- For existing leads, set Regenerate flag to TRUE in Copy tab

### Issue: "GitHub publishing failed"

**Cause:** Authentication or permissions problem

**Fix:**
- Verify `GITHUB_TOKEN` is valid
- Check token has `repo` scope
- Confirm `github_username` matches repository owner

### Issue: "AI copy generation slow"

**Cause:** GPT-4o takes 8-12 seconds per website (this is normal)

**Fix:**
- Switch to GPT-3.5-turbo for faster (but lower quality) copy
- Reduce character limits in template settings
- Process fewer websites per run

### Issue: "Image search fails"

**Cause:** API rate limits or invalid keys

**Fix:**
- Check `PEXELS_API_KEY` and `UNSPLASH_ACCESS_KEY`
- Pexels limit: 200 requests/hour
- Unsplash limit: 50 requests/hour
- System uses fallback images automatically

### Issue: "n8n workflow times out"

**Cause:** Apify scraping taking too long

**Fix:**
- Check website is accessible
- Reduce `maxCrawlPages` in Apify config
- Increase timeout in n8n node settings

---

## Performance & Limits

### Processing Speed

**n8n Workflow** (per lead):
- Website scraping: 30-60 seconds
- AI analysis: 10-15 seconds
- **Total:** ~60-90 seconds per lead

**Replit Agent** (per website):
- AI copywriting: 8-12 seconds
- Image search: 1-2 seconds
- Website generation: 0.5 seconds
- GitHub publishing: 1-2 seconds
- **Total:** ~12-20 seconds per website

### Throughput

**Sequential Processing:**
- 10 websites: ~2.5 minutes
- 50 websites: ~12.5 minutes
- 100 websites: ~25 minutes
- 500 websites: ~2 hours

### Rate Limits

- **OpenAI GPT-4o:** 10,000 requests/minute (not a bottleneck)
- **Google Sheets API:** 60 requests/minute
- **Pexels API:** 200 requests/hour
- **Unsplash API:** 50 requests/hour
- **Apify:** Depends on subscription plan

---

## What Makes This System Work

**1. Deterministic AI**
- Structured outputs every time
- No random hallucinations
- Reliable JSON formatting
- Predictable website generation

**2. Smart Filtering**
- Only process qualified leads
- Focus on businesses that need help (low design scores)
- Skip leads that won't convert (low lead scores)

**3. Proof Over Promises**
- Show prospects their new site
- Visual proof beats explanations
- Reduces objections
- Increases conversion

**4. Modular Architecture**
- Each piece works independently
- Can swap templates easily
- Can add more analysis layers
- Can scale processing

**5. Full Automation**
- From URL to outreach with minimal human touch
- Schedule runs automatically
- Error handling and retries built in
- Results tracked automatically

---

## Next Steps

### For Byron
1. Review generated websites in GitHub repo
2. Check Google Sheets Results tab for all URLs
3. Pull lead data for outreach personalization
4. Test one outreach campaign manually first
5. Scale up once proven

### System Improvements
- Add more templates for different industries
- Parallel processing for faster throughput
- Advanced analytics on website performance
- A/B testing different copy styles
- Webhook triggers for real-time processing

### Scaling Considerations
- **Under 100 websites/month:** Current setup works great
- **100-500 websites/month:** Enable parallel processing
- **500+ websites/month:** Consider Digital Ocean for cost savings

---

## Technical Details

**For full technical documentation, see:**
- `Replit-Agent-Guide.md` - Complete agent architecture
- `Website_Scraper.json` - n8n workflow definition
- `/agents/` directory - Agent implementations

**Support:**
1. Check workflow logs in Replit
2. Review Google Sheets Log tab
3. Check GitHub repository for published sites
4. Contact Simon for troubleshooting

---

**System Status:** Production-ready
**Last Updated:** October 23, 2025
**Maintained By:** LemonBrand (Simon Bergeron)
**Client:** Byron Stone (Enablematic)

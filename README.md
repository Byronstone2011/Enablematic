# Enablematic

**Automated lead generation and website creation system powered by AI.**

Turn a list of website URLs into personalized outreach campaigns automatically.

## What It Does

1. **Scrapes and analyzes** business websites (design quality + business intelligence)
2. **Generates custom websites** for qualified leads using AI
3. **Creates personalized outreach** messages tailored to each prospect
4. **Delivers campaigns** through your email automation tool

Result: From raw lead list to personalized outreach in minutes, not days.

## The System

```
Google Sheets → n8n → Replit Agent → GitHub → ChatGPT → Instantly.ai
(Lead List)   (Scrape) (Generate)  (Publish) (Personalize) (Send)
```

### Components

- **n8n Workflow**: Scrapes websites, analyzes design and business fit
- **Replit Agent**: Generates AI copy and React websites, publishes to GitHub
- **Outreach Pipeline**: Creates personalized messages and sends campaigns

### Built With

- **AI**: OpenAI GPT-4o, Anthropic Claude
- **Automation**: n8n, Mastra, Inngest
- **Data**: Google Sheets, Airtable
- **Scraping**: Apify
- **Hosting**: Replit, GitHub Pages
- **Delivery**: Instantly.ai

## Quick Start

### 1. Add Leads
Add website URLs to Google Sheets "Leads" tab

### 2. Run Analysis
Execute n8n workflow to scrape and analyze sites

### 3. Generate Websites
Replit agent automatically processes qualified leads (runs daily at 9 AM PT)

**Manual trigger:**
```bash
curl -X POST http://localhost:5000/api/workflows/websiteGenerationWorkflow/start-async
```

### 4. Monitor Results
Check Google Sheets tabs:
- **Copy**: Generated website content
- **Results**: Published website URLs
- **Log**: Workflow summaries

### 5. Launch Outreach
Use lead intelligence and website URLs to create personalized campaigns

## Configuration

All settings live in Google Sheets "Config" tab. No code changes needed.

**Key Settings:**
- `min_lead_score`: Minimum score to process (default: 75)
- `max_visual_quality_score`: Maximum design score (default: 70)
- `max_websites_per_run`: Processing limit (default: unlimited)
- `auto_publish`: Auto-publish to GitHub (default: yes)

## Documentation

**📖 [Complete System Overview](SYSTEM-OVERVIEW.md)** - Full guide covering:
- Detailed component explanations
- System architecture diagrams
- How-to guides
- Troubleshooting
- Performance specs

**📖 [Replit Agent Guide](Replit-Agent-Guide.md)** - Technical documentation:
- Agent architecture
- Template system
- API integrations
- Deployment options

## Performance

**Processing Speed:**
- n8n analysis: ~60-90 seconds per lead
- Website generation: ~12-20 seconds per site
- Throughput: 100 websites in ~25 minutes

**Rate Limits:**
- OpenAI: 10,000 requests/min
- Google Sheets: 60 requests/min
- Pexels: 200 requests/hour
- Unsplash: 50 requests/hour

## Published Websites

All generated websites are published to:
```
https://demo.enablematic.io/{company-name}/index.html
```

View the repository: [github.com/Byronstone2011/Enablematic](https://github.com/Byronstone2011/Enablematic)

## Key Features

✅ Automated website scraping and analysis
✅ AI-powered business intelligence extraction
✅ Custom website generation with React templates
✅ Brand color extraction and customization
✅ Automatic GitHub publishing
✅ Personalized outreach message creation
✅ Smart lead filtering and scoring
✅ Error handling and retry logic
✅ Comprehensive logging and tracking

## System Requirements

- **Replit Agent**: Node.js 20+, PostgreSQL
- **n8n Workflow**: n8n instance with API access
- **APIs**: OpenAI, Anthropic, Pexels, Unsplash, Apify
- **Storage**: Google Sheets, GitHub repository

## Troubleshooting

### No leads processed?
- Check lead scores (need 75+)
- Check design scores (need below 70)
- Set Regenerate flag for existing leads

### GitHub publishing fails?
- Verify GITHUB_TOKEN is valid
- Check token has `repo` scope
- Confirm username matches repo owner

### Slow processing?
- Normal: 8-12 seconds per website (GPT-4o)
- Faster option: Switch to GPT-3.5-turbo in Config

**[See complete troubleshooting guide →](SYSTEM-OVERVIEW.md#common-issues--fixes)**

## Support

1. Check [SYSTEM-OVERVIEW.md](SYSTEM-OVERVIEW.md) for detailed guides
2. Review workflow logs in Replit
3. Check Google Sheets Log tab for run history
4. Contact Simon Bergeron for technical support

## Architecture

Built using modular AI agents powered by [Mastra](https://mastra.ai):
- Deterministic outputs
- Structured JSON responses
- Reliable website generation
- Scalable processing

Each agent works independently or in orchestrated workflows.

## License

Proprietary - Built for Enablematic by LemonBrand

---

**Status**: Production-ready
**Version**: 1.0
**Last Updated**: October 23, 2025
**Maintained By**: LemonBrand (Simon Bergeron)
**Client**: Byron Stone

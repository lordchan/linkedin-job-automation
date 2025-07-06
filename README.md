# LinkedIn Job Application Automation

🤖 Automated LinkedIn job application system powered by Cursor AI and Playwright MCP

## Overview

This project automates the LinkedIn job application process using Playwright MCP (Model Context Protocol) and Cursor AI. It leverages browser automation capabilities to streamline the job application workflow, making it easier to apply for multiple positions while maintaining personalization.

## Features

- 🔍 Automated job search based on customizable criteria
- 📝 Smart resume and cover letter customization
- 🤖 Automated form filling and application submission
- 📊 Application tracking and status monitoring
- 🔐 Secure credential management
- 📈 Analytics and insights on application performance

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Cursor IDE
- LinkedIn account
- [Playwright MCP Server](https://github.com/executeautomation/mcp-playwright)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/lordchan/linkedin-job-automation.git
cd linkedin-job-automation
```

2. Install dependencies:
```bash
npm install
```

3. Configure the environment variables:
```bash
cp .env.example .env
# Edit .env with your credentials and preferences
```

## Usage

1. Start the Playwright MCP server:
```bash
npx @executeautomation/playwright-mcp-server
```

2. Run the automation script:
```bash
npm run start
```

## Security Considerations

- Never commit your `.env` file
- Use secure credential storage
- Implement rate limiting to avoid account flags
- Follow LinkedIn's terms of service and automation guidelines

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Built on top of [Playwright MCP](https://github.com/executeautomation/mcp-playwright)
- Inspired by the Model Context Protocol community

## Disclaimer

This tool is for educational purposes only. Use it responsibly and in accordance with LinkedIn's terms of service. The authors are not responsible for any misuse or consequences.
import dotenv from 'dotenv';
import { setupLogger } from './utils/logger';
import { LinkedInAutomation } from './actions/linkedin';

dotenv.config();
const logger = setupLogger();

async function main() {
  const automation = new LinkedInAutomation();
  
  try {
    logger.info('Starting LinkedIn job application automation');
    
    await automation.initialize();
    await automation.login();
    await automation.searchJobs();
    await automation.applyToJobs();
    
    logger.info('Job application automation completed successfully');
  } catch (error) {
    logger.error('Automation failed:', error);
    process.exit(1);
  } finally {
    await automation.close();
  }
}

main();
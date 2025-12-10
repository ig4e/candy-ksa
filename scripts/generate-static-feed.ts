import { writeFileSync } from 'fs'
import { join } from 'path'
import { config } from 'dotenv'
import { generateFeed } from '../utils/generateFeed'

// Load environment variables
config()

const feedXml = generateFeed()
const outputPath = join(process.cwd(), 'public', 'feeds', 'utopia-feed.xml')

writeFileSync(outputPath, feedXml, 'utf-8')
console.log(`✅ Feed generated successfully at: ${outputPath}`)
console.log(`📍 Using domain: ${process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL || 'https://arzaq.app'}`)


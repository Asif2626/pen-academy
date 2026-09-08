import { exec } from 'child_process'
import { setTimeout } from 'timers/promises'

console.log('Starting frontend dev server...')

const env = {
  ...process.env,
  VITE_API_URL: '/api'
}

const child = exec(
  'C:\\Users\\hp\\Desktop\\New folder\\pen-academy\\client\\node_modules\\.bin\\vite.cmd',
  {
    cwd: 'C:/Users/hp/Desktop/New folder/pen-academy/client',
    env,
    maxBuffer: 10 * 1024 * 1024
  },
  (error) => {
    if (error) {
      console.error('FRONTEND exited with error:', error.message)
    }
  }
)

child.stdout.on('data', (data) => {
  const text = data.toString()
  console.log(text.trim())
  if (text.includes('Local') || text.includes('localhost')) {
    console.log('\n✓ Frontend dev server is ready!')
  }
})

child.stderr.on('data', (data) => {
  console.error('FRONTEND ERROR:', data.toString())
})

// Wait for server to be ready
await setTimeout(10000)

console.log('\nWaiting for server to be fully ready...')
await setTimeout(5000)

console.log('\nDone - servers should be running')
console.log('Backend: http://localhost:5000')
console.log('Frontend: http://localhost:5173')

'use client'

import dynamic from 'next/dynamic'

// Dynamically import your client-only component with SSR disabled
const ClientAchievements = dynamic(() => import('./ClientAchievements'), {
  ssr: false,
})

export default ClientAchievements

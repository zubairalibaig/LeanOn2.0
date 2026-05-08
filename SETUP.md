# LeanOn — Windows Setup Guide
# Run these commands in PowerShell (Run as Administrator for Node install)

## ─────────────────────────────────────────
## STEP 1: Install Node.js (if not installed)
## ─────────────────────────────────────────

# Download from: https://nodejs.org → click "LTS" button → install
# After install, verify in a new PowerShell window:
node --version   # should show v20.x.x or higher
npm --version    # should show v10.x.x or higher


## ─────────────────────────────────────────
## STEP 2: Create the project
## ─────────────────────────────────────────

# In PowerShell, navigate to where you want the project:
cd C:\Users\YourName\Documents

# Copy the leaon/ folder I created into this directory, then:
cd leaon
npm install

# OR create fresh with Next.js and copy files in:
# npx create-next-app@14.2.3 leaon --typescript --tailwind --app --no-src-dir --import-alias "@/*"


## ─────────────────────────────────────────
## STEP 3: Set up environment variables
## ─────────────────────────────────────────

# Copy the example env file:
copy .env.example .env.local

# Then open .env.local in VS Code and fill in your keys:
code .env.local


## ─────────────────────────────────────────
## STEP 4: Set up Supabase
## ─────────────────────────────────────────

# 1. Go to https://supabase.com → Sign up with GitHub
# 2. New project → name it "leaon" → pick region "Asia South (Mumbai ap-south-1)"
# 3. Wait ~2 minutes for provisioning
# 4. Go to Settings → API → copy:
#    - Project URL → paste as NEXT_PUBLIC_SUPABASE_URL
#    - anon public key → paste as NEXT_PUBLIC_SUPABASE_ANON_KEY
#    - service_role key → paste as SUPABASE_SERVICE_ROLE_KEY
# 5. Go to SQL Editor → New Query → paste the ENTIRE contents of supabase/schema.sql → Run

# Verify tables were created:
# Go to Table Editor — you should see: users, listener_profiles, sessions, messages,
# wallet_transactions, specialty_tags


## ─────────────────────────────────────────
## STEP 5: Set up Supabase Phone Auth (for OTP)
## ─────────────────────────────────────────

# In Supabase dashboard:
# Authentication → Providers → Phone → Enable
# For testing: enable "SMS provider" → select "Twilio" 
#   OR use "Test OTPs" in Auth settings to test without real SMS:
# Authentication → Configuration → Enable "Test phone numbers"
# Add test number: +919876543210 → OTP: 123456


## ─────────────────────────────────────────
## STEP 6: Set up Agora
## ─────────────────────────────────────────

# 1. Go to https://console.agora.io → Sign up (free)
# 2. Create Project → name "leaon" → Security: APP ID only (for now)
# 3. Copy App ID → paste as NEXT_PUBLIC_AGORA_APP_ID
# FREE: 10,000 voice minutes/month — enough for all of beta


## ─────────────────────────────────────────
## STEP 7: Run the dev server
## ─────────────────────────────────────────

npm run dev

# Open in browser: http://localhost:3000
# You should see the LeanOn landing page!


## ─────────────────────────────────────────
## STEP 8: VS Code setup (recommended)
## ─────────────────────────────────────────

# Install VS Code: https://code.visualstudio.com
# Open project: code .
# Install extensions (VS Code will suggest):
# - Tailwind CSS IntelliSense
# - ES7+ React/Redux/React-Native snippets
# - TypeScript Hero


## ─────────────────────────────────────────
## USEFUL COMMANDS
## ─────────────────────────────────────────

npm run dev      # start dev server (localhost:3000)
npm run build    # build for production
npm run lint     # check for errors


## ─────────────────────────────────────────
## FILE STRUCTURE
## ─────────────────────────────────────────

# leaon/
# ├── app/
# │   ├── layout.tsx          ← Root layout (fonts, metadata)
# │   ├── page.tsx            ← Landing page ✅
# │   ├── globals.css         ← Global styles + Tailwind ✅
# │   ├── auth/
# │   │   └── page.tsx        ← Phone OTP login ✅
# │   ├── browse/
# │   │   └── page.tsx        ← Browse listeners ✅
# │   ├── listener/[id]/      ← Listener profile (next to build)
# │   ├── session/[id]/       ← Live session chat/voice (next)
# │   ├── wallet/             ← Wallet & recharge (next)
# │   └── dashboard/          ← Listener earnings dashboard (next)
# ├── components/             ← Shared UI components
# ├── lib/
# │   └── supabase.ts         ← Supabase client ✅
# ├── types/
# │   └── index.ts            ← All TypeScript types ✅
# ├── supabase/
# │   └── schema.sql          ← Run this in Supabase SQL editor ✅
# ├── public/
# │   └── manifest.json       ← PWA config ✅
# ├── .env.example            ← Copy to .env.local ✅
# ├── package.json            ✅
# └── tailwind.config.ts      ✅

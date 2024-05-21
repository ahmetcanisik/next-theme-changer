
# Add ThemeChanger to Next-App

<br>

## This project just provides an idea of ​​what will be applied where. Include the project in the nextjs project you created.

<br>

## How to use

<br>

- install  `requirements.txt`

```bash
# Include the following in your project.
 - npm create-next-app
# Make sure to include tailwindcss when downloading

- npm i @heroicons/react
- npm i next-themes
```

<br>
<br>

- Edit the `tailwind.config.js` file as follows

```javascript
module.exports = {
  content: [
    //...
  ],

  // add this line your tailwind.config.js
  darkMode: 'class',

  theme: {
    //...
  },
  plugins: [],
};
```

<br>
<br>

- `/app/providers.jsx`

```javascript
'use client'

import { ThemeProvider } from 'next-themes'

export default function Providers({ children }) {
    return <ThemeProvider attribute='class'>{children}</ThemeProvider>
}
```

<br>
<br>

- `/app/components/ThemeButton.jsx`

```javascript
'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';

const ThemeButton = () => {
    const { resolvedTheme, setTheme } = useTheme()

    const [mounted, setMounted] = useState(false)
    useEffect(() => setMounted(true), [])

    if (!mounted) {
        return null
    }

    return (
        <button
            aria-label='Toggle Dark Mode'
            type='button'
            className='flex items-center justify-center rounded-lg p-2 transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-700'
            onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
        >
            {resolvedTheme === 'dark' ? (
                <SunIcon className='h-5 w-5 text-orange-300' />
            ) : (
                <MoonIcon className='h-5 w-5 text-slate-800' />
            )}
        </button>
    )
}

export default ThemeButton

```

<br>
<br>

- and update `/app/layout.js`

```javascript
import Providers from "@/app/providers";
import ThemeButton from "@/app/components/ThemeButton";

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body>
        <Providers>
            <header>
                <ThemeButton/>
            </header>
            {children}
        </Providers>
        </body>
        </html>
    );
}

```
const fs = require('fs');
const path = require('path');
const files = fs.readdirSync('src/pages').map(f => path.join('src/pages', f));
files.forEach(file => {
  let code = fs.readFileSync(file, 'utf-8');
  if (!code.includes('import Layout')) {
    code = code.replace(/import React from 'react';/, "import React from 'react';\nimport Layout from '../components/layout/Layout';");
    code = code.replace('return <div className="min-h-screen relative w-full">', 'return ( <Layout>');
    code = code.replace(/<\/div>;\s*}\s*$/, '</Layout>\n  );\n}');
    // Naive way to strip existing nav:
    code = code.replace(/<nav[\s\S]*?<\/nav>/, '');
    code = code.replace(/<header[\s\S]*?<\/header>/, '');
    code = code.replace(/<footer[\s\S]*?<\/footer>/, '');
    fs.writeFileSync(file, code);
} });

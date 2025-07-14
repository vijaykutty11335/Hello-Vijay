#!/usr/bin/env node

import chalk from 'chalk';
import boxen from 'boxen';

const data = {
  name: chalk.bold.cyan('VIJAY S'),
  title: chalk.white('Full Stack Developer'),
  subtitle: chalk.gray('B.Tech IT • Final Year Student at SECE'),
  
  stack: chalk.green('MERN Stack Developer'),
  
  skills: chalk.white('JAVA • DSA • OOPS • MySQL'),
  
  coding: chalk.magenta('LeetCode 275+ • CodeChef 300+'),
  
  contact: {
    github: chalk.blue('https://github.com/vijaykutty11335'),
    linkedin: chalk.cyan('https://linkedin.com/in/vijay-s-03s'),
    email: chalk.white('vijay.s11335@gmail.com')
  }
};

const output = `${data.name}
${data.title}
${data.subtitle}

${chalk.bold('🚀 ')} ${data.stack}

${chalk.bold('⚡ ')} ${data.skills}

${chalk.bold('🏆 ')} ${data.coding}

${chalk.bold('📧 ')} ${data.contact.email}
${chalk.bold('🔗 ')} ${data.contact.github}
${chalk.bold('💼 ')} ${data.contact.linkedin}`;

console.log(boxen(output, { 
  padding: 1,
  margin: 1,
  borderStyle: 'round',
  borderColor: 'cyan',
  backgroundColor: 'black',
  textAlignment: 'left'
}));

console.log(chalk.italic.dim('  "Building scalable web solutions with modern technologies"'));
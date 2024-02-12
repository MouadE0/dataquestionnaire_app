"use strict";
// const { PrismaClient } = require('@prisma/client');
// const fs = require('fs');
// const csvParse = require('csv-parse');
// const prisma = new PrismaClient();
// async function loadIndicators() {
//   try {
//     const csvData = fs.readFileSync('indicators.csv', 'utf-8');
//     const parsedData = await csvParse(csvData, {
//       columns: true,
//       skip_empty_lines: true,
//     });
//     const indicators = parsedData.map((row) => ({
//       id: row.id,
//       theme: row.theme,
//       subtheme: row.subtheme,
//       indicator: row.indicator,
//       description: row.description,
//       entity: row.entity,
//       period: parseInt(row.period),
//       value: row.value,
//       unit: row.unit,
//       supporting_doc_link: row.supporting_doc_link || null,
//       comment: row.comment || null,
//     }));
//     await prisma.indicator.createMany({
//       data: indicators,
//       skipDuplicates: true,
//     });
//     console.log('Indicators loaded successfully');
//   } catch (error) {
//     console.error('Error loading indicators:', error);
//   } finally {
//     await prisma.$disconnect();
//   }
// }
// loadIndicators();

/* const fs = require("fs");
const path = require("path");
const { PrismaClient } = require('@prisma/client');
const { parse } = require('csv-parse');

const prisma = new PrismaClient();

(async () => {
    try {
        // Check if indicators already exist in the database
        const existingIndicators = await prisma.indicator.findMany();
        if (existingIndicators.length > 0) {
            console.log('Indicators already exist in the database. Skipping data load.');
            return;
        }

        // Read CSV file and parse data
        const csvFilePath = path.resolve(__dirname, 'data', 'companydata.csv');
        const fileContent = fs.readFileSync(csvFilePath, 'utf-8');

        const parsedData = await new Promise((resolve, reject) => {
            parse(fileContent, {
                columns: true,
                skip_empty_lines: true,
            }, (error, parsed) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(parsed);
                }
            });
        });

        // Insert indicators into the database
        await prisma.indicator.createMany({
            data: parsedData.map((row: { id: any; theme: any; subtheme: any; indicator: any; description: any; entity: any; period: string; value: any; unit: any; supporting_doc_link: any; comment: any; }) => ({
                id: row.id,
                theme: row.theme || null,
                subtheme: row.subtheme || null,
                indicator: row.indicator || null,
                description: row.description || null,
                entity: row.entity || null,
                period: parseInt(row.period) || null,
                value: row.value || null,
                unit: row.unit || null,
                supporting_doc_link: row.supporting_doc_link || null,
                comment: row.comment || null,
            })),
            skipDuplicates: true,
        });

        console.log('Indicators loaded successfully');
    } catch (error) {
        console.error('Error loading indicators:', error);
    } finally {
        await prisma.$disconnect();
    }
})();
 */
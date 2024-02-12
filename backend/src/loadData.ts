import fs from "fs";
import path from "path";
import { PrismaClient } from '@prisma/client';
import { parse } from 'csv-parse';

const prisma = new PrismaClient();
type DataRow = {
  id: string;
  theme: string | null;
  subtheme: string | null;
  indicator: string | null;
  description: string | null;
  entity: string | null;
  period: string | null;
  value: string | null;
  unit: string | null;
  supporting_doc_link: string | null;
  comment: string | null;
};
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
        }) as DataRow[];

        // Insert indicators into the database
        await prisma.indicator.createMany({
            data: parsedData.map((row) => ({
                theme: row.theme || null,
                subtheme: row.subtheme || null,
                indicator: row.indicator || null,
                description: row.description || "empty",
                entity: row.entity || null,
                period: row.period || null,
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

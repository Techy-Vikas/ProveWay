import express from 'express';
import { fileHandlingGetControllerDownload, fileHandlingGetControllerUpload } from '../controllers/file_handling.controller.js';

const fileHandlingRoutes = express.Router();

/**
 * @openapi
 * /v1/file/download/:fileId:
 *  get:
 *     tags:
 *     - File
 *     description: File Handling
 *     parameters:
 *       - name: userId
 *         in: path
 *         description: User ID to fetch
 *         required: true
 *         schema:
 *          type: string
 *     responses:
 *       200:
 *         description: File Handling
 */
fileHandlingRoutes.get('/download/:fileId', fileHandlingGetControllerDownload);

/**
 * @openapi
 * /v1/file/upload/:fileId:
 *  get:
 *     tags:
 *     - File
 *     description: File Handling
 *     parameters:
 *       - name: userId
 *         in: path
 *         description: User ID to fetch
 *         required: true
 *         schema:
 *          type: string
 *     responses:
 *       200:
 *         description: File Handling
 */
fileHandlingRoutes.get('/upload/:fileId', fileHandlingGetControllerUpload);


export default fileHandlingRoutes;
import express from 'express';
import fileHandlingRoutes from './file_handling.routes.js';

const router = express.Router();

router.use('/v1/file', fileHandlingRoutes);

export default router
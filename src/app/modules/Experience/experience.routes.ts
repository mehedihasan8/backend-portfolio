import express from 'express';
import AuthGuard from '../../middlewares/AuthGuard';
import experienceControllers from './experience.controller';

const router = express.Router();

router.post('/', AuthGuard(), experienceControllers.createExperience);
router.get('/', experienceControllers.getAllExperience);
router.get('/:id');

router.delete('/:id', AuthGuard(), experienceControllers.deleteExperience);

const experienceRoutes = router;

export default experienceRoutes;
